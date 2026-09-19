import { createHash, randomBytes } from 'node:crypto';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import { BadRequestError, ConflictError, NotFoundError } from '@/lib/errors';

const passwordSchema = z
  .string()
  .min(12, 'Password must be at least 12 characters long')
  .regex(/[A-Z]/, 'Password must contain an uppercase letter')
  .regex(/[a-z]/, 'Password must contain a lowercase letter')
  .regex(/[0-9]/, 'Password must contain a number');

export const registrationSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().toLowerCase().email(),
  password: passwordSchema,
});

export const credentialsSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(1),
});

const hashToken = (token: string) => createHash('sha256').update(token).digest('hex');

const createToken = () => randomBytes(32).toString('hex');

export const registerUser = async (input: z.infer<typeof registrationSchema>) => {
  const data = registrationSchema.parse(input);
  const existingUser = await prisma.user.findUnique({ where: { email: data.email } });

  if (existingUser) {
    throw new ConflictError('An account with this email already exists');
  }

  const passwordHash = await bcrypt.hash(data.password, 12);
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      passwordHash,
      status: 'PENDING',
    },
    select: { id: true, name: true, email: true, status: true },
  });

  const rawToken = createToken();
  await prisma.verificationToken.create({
    data: {
      identifier: user.email,
      token: hashToken(rawToken),
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
  });

  return { user, verificationToken: rawToken };
};

export const authenticateCredentials = async (input: z.infer<typeof credentialsSchema>) => {
  const data = credentialsSchema.parse(input);
  const user = await prisma.user.findUnique({ where: { email: data.email } });

  if (!user?.passwordHash || user.status !== 'ACTIVE') {
    return null;
  }

  const passwordMatches = await bcrypt.compare(data.password, user.passwordHash);
  if (!passwordMatches) {
    return null;
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { lastLoginAt: new Date() },
  });

  return { id: user.id, name: user.name, email: user.email, image: user.image };
};

export const verifyEmail = async (rawToken: string) => {
  const token = await prisma.verificationToken.findFirst({
    where: { token: hashToken(rawToken), expires: { gt: new Date() } },
  });

  if (!token) {
    throw new BadRequestError('Verification token is invalid or expired');
  }

  await prisma.$transaction([
    prisma.user.update({
      where: { email: token.identifier },
      data: { emailVerified: new Date(), status: 'ACTIVE' },
    }),
    prisma.verificationToken.delete({ where: { token: token.token } }),
  ]);
};

export const requestPasswordReset = async (email: string) => {
  const parsedEmail = z.string().email().parse(email.trim().toLowerCase());
  const user = await prisma.user.findUnique({ where: { email: parsedEmail } });

  if (!user) {
    return null;
  }

  const rawToken = createToken();
  await prisma.passwordResetToken.create({
    data: {
      userId: user.id,
      tokenHash: hashToken(rawToken),
      expires: new Date(Date.now() + 60 * 60 * 1000),
    },
  });

  return rawToken;
};

export const resetPassword = async (rawToken: string, password: string) => {
  const validPassword = passwordSchema.parse(password);
  const token = await prisma.passwordResetToken.findFirst({
    where: { tokenHash: hashToken(rawToken), usedAt: null, expires: { gt: new Date() } },
  });

  if (!token) {
    throw new BadRequestError('Password reset token is invalid or expired');
  }

  const passwordHash = await bcrypt.hash(validPassword, 12);
  await prisma.$transaction([
    prisma.user.update({ where: { id: token.userId }, data: { passwordHash } }),
    prisma.passwordResetToken.update({ where: { id: token.id }, data: { usedAt: new Date() } }),
  ]);
};

export const getUserForSession = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true, email: true, image: true, status: true },
  });

  if (!user || user.status !== 'ACTIVE') {
    throw new NotFoundError('User not found');
  }

  return user;
};

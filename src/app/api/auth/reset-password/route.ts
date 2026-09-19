import { z } from 'zod';
import { badRequest, ok, serverError } from '@/lib/api-response';
import { resetPassword } from '@/server/services/auth-service';

const resetSchema = z.object({
  token: z.string().min(1),
  password: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const input = resetSchema.safeParse(body);

    if (!input.success) {
      return badRequest('Reset token and password are required');
    }

    await resetPassword(input.data.token, input.data.password);
    return ok(null, 'Password reset successfully');
  } catch (error) {
    if (error instanceof z.ZodError) {
      return badRequest(error.issues[0]?.message ?? 'Invalid password');
    }
    if (error instanceof Error && error.name === 'BadRequestError') {
      return badRequest(error.message);
    }
    return serverError();
  }
}

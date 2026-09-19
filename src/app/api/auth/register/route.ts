import { NextResponse } from 'next/server';
import { registrationSchema, registerUser } from '@/server/services/auth-service';
import { badRequest, created, serverError } from '@/lib/api-response';

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const input = registrationSchema.safeParse(body);

    if (!input.success) {
      return badRequest('Invalid registration details', input.error.flatten().fieldErrors);
    }

    const result = await registerUser(input.data);
    return created({ user: result.user }, 'Account created. Verify your email to activate it.');
  } catch (error) {
    if (error instanceof Error && error.name === 'ConflictError') {
      return NextResponse.json(
        { success: false, error: { code: 'CONFLICT', message: error.message } },
        { status: 409 },
      );
    }
    return serverError();
  }
}

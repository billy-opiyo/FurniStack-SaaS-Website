import { NextResponse } from 'next/server';
import { verifyEmail } from '@/server/services/auth-service';
import { badRequest, ok, serverError } from '@/lib/api-response';

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== 'object' || !('token' in body) || typeof body.token !== 'string') {
      return badRequest('Verification token is required');
    }

    await verifyEmail(body.token);
    return ok(null, 'Email verified successfully');
  } catch (error) {
    if (error instanceof Error && error.name === 'BadRequestError') {
      return badRequest(error.message);
    }
    return serverError();
  }
}

import { z } from 'zod';
import { badRequest, ok, serverError } from '@/lib/api-response';
import { requestPasswordReset } from '@/server/services/auth-service';

const emailSchema = z.object({ email: z.string().trim().toLowerCase().email() });

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const input = emailSchema.safeParse(body);

    if (!input.success) {
      return badRequest('A valid email address is required');
    }

    await requestPasswordReset(input.data.email);
    return ok(null, 'If an account exists, password reset instructions have been sent.');
  } catch {
    return serverError();
  }
}

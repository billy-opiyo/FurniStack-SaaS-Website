import { describe, expect, it } from 'vitest';
import { credentialsSchema, registrationSchema } from '@/server/services/auth-service';

describe('authentication input validation', () => {
  it('accepts a strong registration password and normalizes email', () => {
    const result = registrationSchema.parse({
      name: 'Amina Wanjiku',
      email: ' AMINA@example.com ',
      password: 'SecurePassword123',
    });

    expect(result.email).toBe('amina@example.com');
  });

  it('rejects passwords that do not meet the security policy', () => {
    const result = registrationSchema.safeParse({
      name: 'Amina Wanjiku',
      email: 'amina@example.com',
      password: 'weakpassword',
    });

    expect(result.success).toBe(false);
  });

  it('requires a valid email for credential authentication', () => {
    const result = credentialsSchema.safeParse({
      email: 'not-an-email',
      password: 'password',
    });

    expect(result.success).toBe(false);
  });
});

import { signIn } from '@/auth';

export default function LoginPage() {
  return (
    <main>
      <h1>Sign in to FurniStack</h1>
      <form
        action={async (formData) => {
          'use server';
          await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirectTo: '/dashboard',
          });
        }}
      >
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
        />
        <button type="submit">Sign in</button>
      </form>
    </main>
  );
}

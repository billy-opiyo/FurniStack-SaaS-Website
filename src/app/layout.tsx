import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FurniStack',
  description: 'The Complete Growth For Furniture Stores',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

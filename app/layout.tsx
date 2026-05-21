import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Assadavoot Anukool — Front-end / Full Stack Developer',
  description:
    'Portfolio of Assadavoot Anukool, Front-end Developer with 8 years of experience in React.js, Next.js, TypeScript, Node.js.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

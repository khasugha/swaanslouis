import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Louis Swaans - CV',
  description: 'Personal CV website of Louis Swaans, Full Stack Developer & IT Specialist',
  verification: {
    google: 'FIgcLo_b1tXhCX-cQlCm7CqSKvM1tsPk4891uMihbH0',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 
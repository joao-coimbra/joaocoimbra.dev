import './globals.css'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: {
    template: '%s – João Coimbra',
    default: 'João Coimbra', // a default is required when creating a template
  },
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${quicksand.variable}`} suppressHydrationWarning>
      <body className='bg-gradient-to-br bg-noise bg-contain from-neutral-950 to-neutral-800'>{children}</body>
    </html>
  )
}

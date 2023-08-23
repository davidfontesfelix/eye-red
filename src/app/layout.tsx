import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'EyeRed',
  description: 'O melhor anti virus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="../icons/icon-logo.svg" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}

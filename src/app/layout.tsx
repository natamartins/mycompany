import '../styles/style.scss'
import { Roboto } from 'next/font/google'


const inter = Roboto({
  subsets: ['latin'],
  weight: '500'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
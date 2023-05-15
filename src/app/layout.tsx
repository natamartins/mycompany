import '../styles/style.scss'
import { Paytone_One } from 'next/font/google'

const inter = Paytone_One({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'NSoluções',
  description: 'crie seu e-commerce já!',
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

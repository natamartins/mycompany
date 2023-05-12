import '../styles/style.scss'
import { Roboto } from 'next/font/google'


const inter = Roboto({
  subsets: ['latin'],
  weight: '900'
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

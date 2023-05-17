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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3446067000341217"
          crossOrigin="anonymous">
        </script>
        <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

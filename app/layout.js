import { PT_Sans } from 'next/font/google'
import './globals.css'
import Header from '../components/header/header'
import Footer from '@/components/footer/footer'

const fontSans = PT_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-sans',
})
export const metadata = {
  title: 'CraftCrust | Крафтовая пекарня',
  description: 'Ремесленный хлеб на закваске и свежая слоёная выпечка в уютной атмосфере.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${fontSans.variable} h-full`}>
      <body className="bg-bakery-dark text-bakery-light flex min-h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

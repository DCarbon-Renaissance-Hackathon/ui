import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { ThemeProvider } from '@/context/ThemeContext'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import SolanaProvider from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DCarbon',
  description:
    'DCarbon is a decentralized carbon offset platform that allows users to offset their carbon footprint by purchasing carbon credits on the Solana blockchain.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <SolanaProvider>
            <div className='w-full overflow-hidden'>
              <Header />
              {children}
              <Footer />
            </div>
            <ToastContainer />
          </SolanaProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

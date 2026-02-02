import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aura Safaris',
  description: 'Experience the beauty of African wildlife',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

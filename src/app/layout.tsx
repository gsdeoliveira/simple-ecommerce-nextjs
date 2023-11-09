import type { Metadata } from 'next'
import clsx from 'clsx'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from './components/Navbar'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations';
import Hydrate from './components/Hydrate'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next E-Commerce',
  description: 'Nextjs Ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR}>
    <html lang="pt-BR" className='bg-slate-700'>
      <body className={clsx(inter.className, 'bg-slate-700')}>
        <Hydrate>
          <Navbar />
          <main className='mt-7 md:mt-0 p-3 md:p-10 lg:p-16 pb-0 bg-slate-700'>
            {children}
          </main>
        </Hydrate>
      </body>
    </html>
    </ClerkProvider>
  )
}

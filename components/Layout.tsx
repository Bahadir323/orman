import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'


export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter()
  const showProductSubnav = pathname.startsWith('/urunler')
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

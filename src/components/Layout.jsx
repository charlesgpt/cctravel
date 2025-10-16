import React from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="flex flex-col">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Layout

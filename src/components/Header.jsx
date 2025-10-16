import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/#services', label: 'Services' },
    { path: '/#destinations', label: 'Destinations' },
    { path: '/contact', label: 'Contact' }
  ]

  const handleNavClick = (path) => {
    if (path.includes('#')) {
      const [route, anchor] = path.split('#')
      if (route === '' || route === '/') {
        // If we're already on home page, just scroll to anchor
        if (location.pathname === '/') {
          const element = document.getElementById(anchor)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        } else {
          // Navigate to home page with anchor
          window.location.href = `/#${anchor}`
        }
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap px-6 sm:px-10 py-6 bg-black/20 backdrop-blur-2xl border-b border-primary/20">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="text-primary glowing-compass rounded-full p-2 bg-black/40 backdrop-blur-sm border border-primary/30">
            <span className="material-symbols-outlined text-3xl">explore</span>
          </div>
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
        </div>
        <Link to="/" className="text-white text-2xl font-display font-bold hover:text-primary transition-all duration-300 tracking-wide">
          C & C Travel Hub
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          link.path.includes('#') ? (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className="relative text-white text-sm font-medium hover:text-primary transition-all duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ) : (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-all duration-300 group ${
                isActive(link.path)
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          )
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <button className="text-white hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-white/10">
          <span className="material-symbols-outlined">language</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-primary/20 lg:hidden">
          <nav className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              link.path.includes('#') ? (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="text-left text-white text-lg font-medium hover:text-primary transition-all duration-300 py-2"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium transition-all duration-300 py-2 ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-white hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

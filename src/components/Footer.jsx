import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const handleNavClick = (path) => {
    if (path.includes('#')) {
      const [route, anchor] = path.split('#')
      if (route === '' || route === '/') {
        const element = document.getElementById(anchor)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <footer className="bg-surface-dark text-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="text-primary">
            <span className="material-symbols-outlined text-4xl">explore</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-text-dark">
            C & C Travel Hub
          </h2>
        </div>
        
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6">
          <Link
            to="/"
            className="text-muted-dark hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-muted-dark hover:text-primary transition-colors"
          >
            About
          </Link>
          <button
            onClick={() => handleNavClick('/#services')}
            className="text-muted-dark hover:text-primary transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('/#destinations')}
            className="text-muted-dark hover:text-primary transition-colors"
          >
            Destinations
          </button>
          <Link
            to="/contact"
            className="text-muted-dark hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
        
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="#"
            className="text-muted-dark hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.791 4.649-.69.188-1.42.225-2.16.084.609 1.882 2.373 3.256 4.478 3.295-1.645 1.28-3.714 2.037-5.96 2.037-.386 0-.766-.023-1.141-.066 2.135 1.369 4.671 2.173 7.42 2.173 8.908 0 13.788-7.386 13.788-13.788 0-.21 0-.419-.015-.626.946-.684 1.768-1.536 2.417-2.51z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-muted-dark hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-muted-dark hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.90-11.988C24.007 5.367 18.641.001.012.001z"></path>
            </svg>
          </a>
        </div>
        
        <p className="text-sm text-muted-dark">
          © 2024 C & C Travel Hub. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

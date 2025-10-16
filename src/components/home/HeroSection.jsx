import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-primary/30 rounded-full px-6 py-3 mb-8">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-primary font-medium tracking-wider text-sm uppercase">Premium Travel Experiences</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
          <span className="block text-gradient animate-shimmer">Discover</span>
          <span className="block">the World with</span>
          <span className="block text-gradient animate-shimmer" style={{ animationDelay: '1s' }}>
            Luxury
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200 font-light">
          Experience extraordinary journeys crafted exclusively for discerning travelers.
          From exotic destinations to personalized service, we make every moment
          <span className="text-primary font-medium"> unforgettable</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link
            to="/contact"
            className="btn-primary text-lg group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Journey
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </span>
          </Link>

          <button
            onClick={() => {
              const element = document.getElementById('destinations')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-secondary text-lg group"
          >
            <span className="flex items-center gap-3">
              <span className="material-symbols-outlined">explore</span>
              Explore Destinations
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '2024', label: 'Founded' },
            { number: '50+', label: 'Destinations' },
            { number: 'Premium', label: 'Service' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Luxury Elements */}
      <div className="absolute top-20 left-10 text-primary/20 floating-element hidden lg:block">
        <span className="material-symbols-outlined text-8xl">flight_takeoff</span>
      </div>

      <div className="absolute top-40 right-20 text-primary/20 floating-element hidden lg:block" style={{ animationDelay: '2s' }}>
        <span className="material-symbols-outlined text-6xl">hotel</span>
      </div>

      <div className="absolute bottom-40 left-20 text-primary/20 floating-element hidden lg:block" style={{ animationDelay: '4s' }}>
        <span className="material-symbols-outlined text-7xl">luggage</span>
      </div>

      <div className="absolute bottom-20 right-10 text-primary/20 floating-element hidden lg:block" style={{ animationDelay: '1s' }}>
        <span className="material-symbols-outlined text-5xl">camera_alt</span>
      </div>
    </section>
  )
}

export default HeroSection

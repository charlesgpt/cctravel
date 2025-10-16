import React, { useEffect, useRef, useState } from 'react'

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  const services = [
    {
      icon: 'flight',
      title: 'Luxury Travel Planning',
      description: 'Bespoke itineraries crafted to your preferences, ensuring every detail exceeds expectations.',
      gradient: 'from-blue-500/20 to-purple-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: 'hotel',
      title: 'Premium Accommodations',
      description: 'Exclusive access to the world\'s finest hotels, resorts, and unique luxury properties.',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-400'
    },
    {
      icon: 'support_agent',
      title: '24/7 Concierge Service',
      description: 'Round-the-clock support from our dedicated travel specialists wherever you are.',
      gradient: 'from-primary/20 to-yellow-500/20',
      iconColor: 'text-primary'
    },
    {
      icon: 'groups',
      title: 'Group & Corporate Travel',
      description: 'Seamless coordination for business trips, conferences, and group adventures.',
      gradient: 'from-pink-500/20 to-rose-500/20',
      iconColor: 'text-pink-400'
    },
    {
      icon: 'local_activity',
      title: 'Exclusive Experiences',
      description: 'Access to private tours, cultural immersions, and once-in-a-lifetime adventures.',
      gradient: 'from-orange-500/20 to-red-500/20',
      iconColor: 'text-orange-400'
    },
    {
      icon: 'verified_user',
      title: 'Travel Insurance & Safety',
      description: 'Comprehensive protection and safety measures for worry-free travel experiences.',
      gradient: 'from-indigo-500/20 to-blue-500/20',
      iconColor: 'text-indigo-400'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fadeInUp')
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      {/* Floating Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-primary/30 rounded-full px-6 py-3 mb-8">
            <span className="material-symbols-outlined text-primary text-sm">diamond</span>
            <span className="text-primary font-medium tracking-wider text-sm uppercase">Premium Services</span>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
            <span className="text-gradient">Exceptional</span> Services
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From planning to execution, we handle every aspect of your journey with
            <span className="text-primary font-medium"> meticulous attention to detail</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card group relative opacity-0 transform translate-y-10`}
            >
              <div className={`relative bg-gradient-to-br ${service.gradient} backdrop-blur-xl rounded-3xl border border-white/10 p-8 transition-all duration-700 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2`}>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 ${service.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <span className="material-symbols-outlined text-primary text-2xl">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/contact"
            className="btn-primary text-lg group"
          >
            <span className="flex items-center gap-3">
              Learn More About Our Services
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

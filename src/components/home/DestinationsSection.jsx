import React, { useEffect, useRef, useState } from 'react'

const DestinationsSection = () => {
  const [activeDestination, setActiveDestination] = useState(0)
  const sectionRef = useRef(null)

  const destinations = [
    {
      name: 'Maldives',
      description: 'Crystal clear waters and overwater bungalows.',
      longDescription: 'Paradise on Earth with pristine beaches, luxury resorts, and underwater adventures.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Overwater Villas', 'Coral Reefs', 'Spa Retreats'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Dubai',
      description: 'Luxury shopping, modern architecture, and desert adventures.',
      longDescription: 'Where futuristic skylines meet ancient traditions in the heart of luxury.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Gold Souks'],
      color: 'from-amber-500 to-orange-600'
    },
    {
      name: 'Rome',
      description: 'Ancient history meets modern luxury.',
      longDescription: 'Eternal city where every corner tells a story of magnificent civilizations.',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Colosseum', 'Vatican City', 'Trevi Fountain'],
      color: 'from-rose-500 to-pink-600'
    },
    {
      name: 'Santorini',
      description: 'Breathtaking sunsets and whitewashed architecture.',
      longDescription: 'Greek island paradise with dramatic cliffs and azure waters.',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Sunset Views', 'Wine Tasting', 'Volcanic Beaches'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Tokyo',
      description: 'Modern metropolis with traditional charm.',
      longDescription: 'Where cutting-edge technology harmonizes with ancient traditions.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Cherry Blossoms', 'Temples', 'Cuisine'],
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'Bali',
      description: 'Tropical paradise with spiritual serenity.',
      longDescription: 'Island of gods offering perfect blend of culture, nature, and luxury.',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Rice Terraces', 'Temples', 'Beach Clubs'],
      color: 'from-emerald-500 to-teal-600'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDestination((prev) => (prev + 1) % destinations.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [destinations.length])

  return (
    <section id="destinations" className="py-24 sm:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url("${destinations[activeDestination].image}")`,
            filter: 'blur(100px) brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-primary/30 rounded-full px-6 py-3 mb-8">
            <span className="material-symbols-outlined text-primary text-sm">public</span>
            <span className="text-primary font-medium tracking-wider text-sm uppercase">Featured Destinations</span>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
            <span className="text-gradient">Extraordinary</span> Places
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover handpicked destinations that offer the perfect blend of
            <span className="text-primary font-medium"> luxury, culture, and adventure</span>.
          </p>
        </div>

        {/* Main Featured Destination */}
        <div className="mb-16">
          <div className="relative h-[70vh] rounded-3xl overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
              style={{ backgroundImage: `url("${destinations[activeDestination].image}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <div className="max-w-2xl">
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${destinations[activeDestination].color} text-white text-sm font-medium mb-4`}>
                  Featured Destination
                </div>

                <h3 className="font-display text-4xl lg:text-6xl font-bold text-white mb-4">
                  {destinations[activeDestination].name}
                </h3>

                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                  {destinations[activeDestination].longDescription}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {destinations[activeDestination].highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <button className="btn-primary group">
                  <span className="flex items-center gap-3">
                    Explore {destinations[activeDestination].name}
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`relative h-32 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                index === activeDestination
                  ? 'ring-4 ring-primary scale-105'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
              onClick={() => setActiveDestination(index)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("${destination.image}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <h4 className="font-display text-white text-sm font-bold truncate">
                  {destination.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-secondary text-lg group">
            <span className="flex items-center gap-3">
              <span className="material-symbols-outlined">explore</span>
              View All Destinations
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default DestinationsSection

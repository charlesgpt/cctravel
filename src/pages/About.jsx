import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const values = [
    {
      icon: 'diamond',
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring that each journey exceeds expectations and creates unforgettable memories.'
    },
    {
      icon: 'handshake',
      title: 'Trust',
      description: 'Building lasting relationships through transparency, reliability, and unwavering commitment to our clients\' satisfaction.'
    },
    {
      icon: 'psychology',
      title: 'Innovation',
      description: 'Continuously evolving our services and embracing new technologies to enhance the travel experience.'
    },
    {
      icon: 'favorite',
      title: 'Passion',
      description: 'Our love for travel and exploration drives us to create extraordinary experiences that inspire and delight.'
    }
  ]

  const team = [
    {
      name: 'Christopher Johnson',
      role: 'Founder & CEO',
      description: 'With over 15 years in luxury travel, Christopher founded C&C Travel Hub to revolutionize personalized travel experiences.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Catherine Williams',
      role: 'Co-Founder & COO',
      description: 'Catherine brings expertise in operations and customer experience, ensuring every journey is flawlessly executed.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Destinations',
      description: 'Michael\'s extensive global network and destination expertise help craft unique itineraries for every traveler.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ]

  const stats = [
    { number: '2024', label: 'Founded', sublabel: 'Fresh perspective on luxury travel' },
    { number: '50+', label: 'Destinations', sublabel: 'Carefully curated locations' },
    { number: 'Premium', label: 'Service Quality', sublabel: 'Excellence in every detail' },
    { number: '24/7', label: 'Support', sublabel: 'Round-the-clock assistance' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-text-light dark:text-text-dark mb-6">
            About C & C Travel Hub
          </h1>
          <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
            Crafting extraordinary journeys and creating unforgettable memories for discerning travelers worldwide.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-text-light dark:text-text-dark mb-6">
                Our Story
              </h2>
              <p className="text-muted-light dark:text-muted-dark mb-6 leading-relaxed">
                Founded with a passion for exploration and a commitment to excellence, C & C Travel Hub has been transforming the way people experience the world. Our journey began with a simple belief: that travel should be more than just a destination—it should be a transformative experience that enriches your life and creates lasting memories.
              </p>
              <p className="text-muted-light dark:text-muted-dark mb-6 leading-relaxed">
                With years of experience in the luxury travel industry, we have built a reputation for delivering exceptional service and creating bespoke itineraries that cater to the unique preferences and interests of our clients. From exotic getaways to cultural immersions, we handle every detail with precision and care.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <span className="material-symbols-outlined text-4xl">verified</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-text-light dark:text-text-dark">
                    Quality Focused
                  </h3>
                  <p className="text-sm text-muted-light dark:text-muted-dark">
                    Premium service for discerning travelers
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div 
                  className="h-48 bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
                ></div>
                <div 
                  className="h-32 bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
                ></div>
              </div>
              <div className="space-y-4">
                <div 
                  className="h-32 bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
                ></div>
                <div 
                  className="h-48 bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-text-light dark:text-text-dark mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
              Driven by passion, guided by excellence, and committed to creating extraordinary travel experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center card">
              <div className="text-primary mb-6">
                <span className="material-symbols-outlined text-6xl">flag</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-text-light dark:text-text-dark mb-4">
                Our Mission
              </h3>
              <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                To provide exceptional, personalized travel experiences that exceed expectations and create lasting memories. We are committed to delivering seamless, luxury travel services that transform the way our clients explore the world.
              </p>
            </div>
            <div className="text-center card">
              <div className="text-primary mb-6">
                <span className="material-symbols-outlined text-6xl">visibility</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-text-light dark:text-text-dark mb-4">
                Our Vision
              </h3>
              <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                To be the world's most trusted luxury travel partner, known for our innovative approach, exceptional service, and ability to turn travel dreams into reality. We envision a world where every journey is extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-text-light dark:text-text-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
              The principles that guide everything we do and shape every experience we create.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center card hover:shadow-lg transition-all duration-300">
                <div className="text-primary mb-6">
                  <span className="material-symbols-outlined text-5xl">{value.icon}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-text-light dark:text-text-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-text-light dark:text-text-dark mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
              The passionate professionals behind your extraordinary travel experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center card hover:shadow-lg transition-all duration-300">
                <div
                  className="size-32 rounded-full bg-cover bg-center mx-auto mb-6 border-4 border-primary"
                  style={{ backgroundImage: `url("${member.image}")` }}
                ></div>
                <h3 className="font-display text-xl font-bold text-text-light dark:text-text-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-text-light dark:text-text-dark mb-4">
              Our Impact
            </h2>
            <p className="text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-text-light dark:text-text-dark font-medium mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-light dark:text-muted-dark">
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-text-light dark:text-text-dark mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-light dark:text-muted-dark mb-8">
            Let us create an extraordinary travel experience tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg">
              Contact Us Today
            </Link>
            <Link to="/#destinations" className="btn-secondary text-lg">
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

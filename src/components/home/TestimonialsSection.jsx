import React from 'react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'C&C Travel Hub made our honeymoon in the Maldives absolutely magical. Every detail was perfect, from the overwater villa to the private dining experiences.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Michael Chen',
      location: 'London, UK',
      rating: 5,
      text: 'The level of service and attention to detail exceeded all expectations. Our family trip to Dubai was seamlessly organized and truly unforgettable.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Emma Rodriguez',
      location: 'Barcelona, Spain',
      rating: 5,
      text: 'From the moment we contacted them until we returned home, everything was flawless. The 24/7 support gave us complete peace of mind.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index}
        className={`material-symbols-outlined text-lg ${
          index < rating ? 'text-primary' : 'text-gray-300'
        }`}
      >
        star
      </span>
    ))
  }

  return (
    <section className="py-16 sm:py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-dark max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied travelers have to say about their experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <div 
                  className="size-20 rounded-full bg-cover bg-center mx-auto mb-4 border-4 border-primary"
                  style={{ backgroundImage: `url("${testimonial.image}")` }}
                ></div>
                
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <blockquote className="text-muted-dark mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>

              <div>
                <h4 className="font-display text-lg font-bold text-text-dark">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-dark">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-primary/10 rounded-lg p-6">
            <div className="text-primary">
              <span className="material-symbols-outlined text-4xl">verified</span>
            </div>
            <div className="text-left">
              <h3 className="font-display text-xl font-bold text-text-dark">
                Premium Service Quality
              </h3>
              <p className="text-muted-dark">
                Committed to excellence in every journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

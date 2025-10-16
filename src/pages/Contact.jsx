import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelType: '',
    destination: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        travelType: '',
        destination: '',
        budget: '',
        message: ''
      })
    } catch (error) {
      setSubmitMessage('Thank you for your interest! Please contact us directly via WhatsApp or phone for immediate assistance.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: 'phone',
      title: 'Phone Numbers',
      details: ['UAE: +971 58 524 2945', 'Tanzania: +255 763 858 246'],
      action: 'Call us anytime'
    },
    {
      icon: 'email',
      title: 'Email Address',
      details: ['info@cctravelhub.com'],
      action: 'Send us an email'
    },
    {
      icon: 'schedule',
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      action: '24/7 emergency support available'
    }
  ]

  const faqs = [
    {
      question: 'How far in advance should I book my trip?',
      answer: 'We recommend booking luxury travel experiences 2-3 months in advance to ensure availability of premium accommodations and exclusive experiences.'
    },
    {
      question: 'Do you offer travel insurance?',
      answer: 'Yes, we provide comprehensive travel insurance options to protect your investment and ensure peace of mind during your journey.'
    },
    {
      question: 'Can you accommodate special dietary requirements?',
      answer: 'Absolutely! We work closely with hotels and restaurants to accommodate all dietary restrictions and preferences.'
    },
    {
      question: 'What happens if my travel plans change?',
      answer: 'We understand that plans can change. Our team will work with you to modify your itinerary with minimal disruption and fees.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-text-light dark:text-text-dark mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
            Ready to embark on your next adventure? Get in touch with our travel experts to start planning your extraordinary journey.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-all duration-300">
                <div className="text-primary mb-6">
                  <span className="material-symbols-outlined text-5xl">{info.icon}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-text-light dark:text-text-dark mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-light dark:text-muted-dark">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-primary font-medium">
                  {info.action}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="https://wa.me/971585242945?text=Hello%20C%20%26%20C%20Travel%20Hub%2C%20I%27m%20interested%20in%20your%20travel%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              <span className="material-symbols-outlined mr-2">chat</span>
              WhatsApp Us
            </a>
            <a 
              href="tel:+971585242945"
              className="btn-secondary text-center"
            >
              <span className="material-symbols-outlined mr-2">phone</span>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-text-light dark:text-text-dark mb-4">
              Send Us a Message
            </h2>
            <p className="text-muted-light dark:text-muted-dark">
              Fill out the form below and our travel experts will get back to you within 24 hours.
            </p>
          </div>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-light dark:text-muted-dark mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="form-input"
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-light dark:text-muted-dark mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="form-input"
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-light dark:text-muted-dark mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="form-input"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-light dark:text-muted-dark mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="form-input"
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-light dark:text-muted-dark mb-2" htmlFor="travelType">
                    Type of Travel
                  </label>
                  <select
                    className="form-input"
                    id="travelType"
                    name="travelType"
                    value={formData.travelType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select travel type</option>
                    <option value="honeymoon">Honeymoon</option>
                    <option value="family">Family Vacation</option>
                    <option value="business">Business Travel</option>
                    <option value="adventure">Adventure Travel</option>
                    <option value="luxury">Luxury Getaway</option>
                    <option value="group">Group Travel</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-light dark:text-muted-dark mb-2" htmlFor="destination">
                    Preferred Destination
                  </label>
                  <input
                    className="form-input"
                    id="destination"
                    name="destination"
                    type="text"
                    placeholder="e.g., Maldives, Dubai, Europe"
                    value={formData.destination}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-light dark:text-muted-dark mb-2" htmlFor="budget">
                  Budget Range (USD)
                </label>
                <select
                  className="form-input"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                >
                  <option value="">Select budget range</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-25000">$10,000 - $25,000</option>
                  <option value="25000-50000">$25,000 - $50,000</option>
                  <option value="50000+">$50,000+</option>
                  <option value="custom">Custom Budget</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-light dark:text-muted-dark mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-input"
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your dream trip, special requirements, or any questions you have..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>

              {submitMessage && (
                <div className={`p-4 rounded-lg text-sm ${
                  submitMessage.includes('successfully')
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-text-light dark:text-text-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-light dark:text-muted-dark">
              Find answers to common questions about our travel services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-display text-lg font-bold text-text-light dark:text-text-dark mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-light dark:text-muted-dark mb-4">
              Still have questions? We're here to help!
            </p>
            <a
              href="https://wa.me/971585242945?text=Hello%20C%20%26%20C%20Travel%20Hub%2C%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

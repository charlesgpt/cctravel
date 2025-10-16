import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      
      setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setSubmitMessage('Thank you for your interest! Please contact us directly via WhatsApp or phone for immediate assistance.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 sm:py-24 bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-4xl font-bold text-text-dark mb-6">
              Contact Us
            </h2>
            <p className="text-muted-dark mb-8 leading-relaxed">
              Have a question or ready to plan your next adventure? Fill out the form or find us on the map.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <span className="material-symbols-outlined text-2xl">phone</span>
                </div>
                <div>
                  <p className="font-medium text-text-dark">Phone Numbers</p>
                  <p className="text-sm text-muted-dark">UAE: +971 58 524 2945</p>
                  <p className="text-sm text-muted-dark">Tanzania: +255 763 858 246</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <span className="material-symbols-outlined text-2xl">email</span>
                </div>
                <div>
                  <p className="font-medium text-text-dark">Email</p>
                  <p className="text-sm text-muted-dark">info@cctravelhub.com</p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/contact"
              className="btn-secondary"
            >
              View Full Contact Page
            </Link>
          </div>
          
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-dark mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-input"
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-dark mb-2" htmlFor="email">
                  Email
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
                <label className="block text-sm font-medium text-muted-dark mb-2" htmlFor="phone">
                  Phone (Optional)
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

              <div>
                <label className="block text-sm font-medium text-muted-dark mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-input"
                  id="message"
                  name="message"
                  rows="4"
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
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitMessage && (
                <div className={`p-3 rounded-lg text-sm ${
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
      </div>
    </section>
  )
}

export default ContactSection

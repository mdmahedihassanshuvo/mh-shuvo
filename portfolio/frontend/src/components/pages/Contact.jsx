import React, { useState } from 'react'
import { submitContactForm } from '../../services/api'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await submitContactForm(formData)
      setSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-5 contact-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-4">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="text-white-50 fs-5">
            Have a project in mind? Let's talk and make it real.
          </p>
        </div>

        <div className="row g-5 align-items-stretch">
          {/* LEFT: SHORT INFO ONLY */}
          <div className="col-lg-5">
            <div className="contact-card h-100">
              <h4 className="text-white fw-bold mb-3">Let's Connect</h4>

              <p className="text-white-50 mb-4">
                I'm open to freelance work, collaborations, and full-time opportunities.
                Feel free to send a message anytime.
              </p>

              {/* Minimal contact highlights only */}
              <div className="mb-3 text-white-50">
                <strong className="text-white">Response Time:</strong> Within 24 hours
              </div>

              <div className="mb-3 text-white-50">
                <strong className="text-white">Work Status:</strong> Available for freelance
              </div>

              <div className="mb-3 text-white-50">
                <strong className="text-white">Preferred Projects:</strong> Web Apps, APIs, SaaS
              </div>
            </div>
          </div>

          {/* RIGHT: FORM ONLY (MAIN FOCUS) */}
          <div className="col-lg-7">
            <div className="contact-card">
              <h4 className="text-white fw-bold mb-4">Send a Message</h4>

              {success && (
                <div className="alert alert-success" role="alert">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control contact-input"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control contact-input"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control contact-input"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      rows="6"
                      className="form-control contact-input"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-gradient px-4 py-3 fw-semibold"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

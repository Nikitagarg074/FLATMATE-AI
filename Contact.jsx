import { useState } from "react";
/* ═══════════════════════════════════════════
   CONTACT PAGE
═══════════════════════════════════════════ */
function ContactPage({ setPage }) {
  const [form, setForm] = useState({ name: '', email: '', type: '', area: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1400)
  }

  const contactLinks = [
    { icon: '📧', bg: 'rgba(108,99,255,0.15)', label: 'Email Us', value: 'hello@flatmate.in' },
    { icon: '📍', bg: 'rgba(0,229,195,0.1)', label: 'Location', value: 'Greater Noida, Uttar Pradesh' },
    { icon: '💬', bg: 'rgba(255,107,157,0.1)', label: 'WhatsApp Group', value: 'Join our community group' },
    { icon: '🐦', bg: 'rgba(249,115,22,0.1)', label: 'Instagram', value: '@flatmate.gnoida' },
  ]

  return (
    <div className="page">
      <div className="contact-page">
        <span className="section__tag">Contact</span>
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Let's get you a flatmate you'll actually like</h2>
            <p>
              Have a question, feedback, or want to partner with us? We're a small team and we actually read every message.
              Or jump straight in — post your profile and let the AI do the rest.
            </p>
            <div className="contact-links">
              {contactLinks.map((c) => (
                <div key={c.label} className="contact-link-item">
                  <div className="contact-link-icon" style={{ background: c.bg, fontSize: '1.3rem' }}>{c.icon}</div>
                  <div className="contact-link-text">
                    <strong>{c.label}</strong>
                    <span>{c.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success">
                <div className="form-success__icon">✓</div>
                <h3>You're in! 🎉</h3>
                <p>We've received your message. Expect a reply within 24 hours — or a match even sooner.</p>
                <button
                  className="btn-primary"
                  style={{ marginTop: 8 }}
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', type: '', area: '', message: '' }) }}
                >
                  Send another →
                </button>
              </div>
            ) : (
              <>
                <h3>Post your profile or reach out</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="Rahul Sharma" />
                    </div>
                    <div className="form-group">
                      <label>Email / Phone</label>
                      <input name="email" required value={form.email} onChange={handleChange} placeholder="rahul@email.com" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>I am a</label>
                      <select name="type" value={form.type} onChange={handleChange}>
                        <option value="" >Select one</option>
                        <option value="student">Student</option>
                        <option value="professional">Working Professional</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Preferred Area</label>
                      <select name="area" value={form.area} onChange={handleChange}>
                        <option value="" >Select area</option>
                        {['Sector 137', 'Knowledge Park II', 'Knowledge Park III', 'Pari Chowk', 'Sector 62', 'Alpha I', 'Beta II', 'Gamma I'].map(a => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Tell us about yourself / your message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Budget range, sleep schedule, any deal-breakers, or just say hi..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: 8, opacity: loading ? 0.7 : 1 }}
                    disabled={loading}
                  >
                    {loading ? '⏳ Submitting...' : '🚀 Submit Profile'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer setPage={setPage} />
    </div>
  )
}
export default ContactPage;
import { useState } from 'react'
import './App.css'

/* ═══════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════ */
function Navbar({ activePage, setPage }) {
  return (
    <nav className="navbar">
      <div className="navbar__logo" onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
        <span className="logo-flat">Flat</span>
        <span className="logo-mate">Mate</span>
        <span className="logo-dot"></span>
      </div>
      <ul className="navbar__links">
        {['home', 'about', 'contact'].map((p) => (
          <li key={p}>
            <button
              className={activePage === p ? 'active' : ''}
              onClick={() => setPage(p)}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          </li>
        ))}
        <li>
          <button className="navbar__cta" onClick={() => setPage('contact')}>
            Get Started →
          </button>
        </li>
      </ul>
    </nav>
  )
}

/* ═══════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════ */
function HomePage({ setPage }) {
  const steps = [
    { icon: '📝', title: 'Post Your Profile', desc: 'Share your budget, preferred area, sleep schedule, habits, and lifestyle preferences in under 2 minutes.' },
    { icon: '🤖', title: 'AI Matches You', desc: 'Our algorithm scores compatibility across 12+ lifestyle dimensions to surface your ideal flatmates.' },
    { icon: '💬', title: 'Chat & Connect', desc: 'Message matches directly in-app. View their location on map before you meet.' },
    { icon: '🏠', title: 'Move In Together', desc: 'Confirm your match, sign up for a shared stay, and start your new chapter confidently.' },
  ]

  const features = [
    { emoji: '🎯', title: 'AI Compatibility Scoring', desc: 'Smart matching across habits, sleep cycles, cleanliness, and social preferences.', color: '#6c63ff' },
    { emoji: '🗺️', title: 'Map View', desc: 'See listings pinned on an interactive map of Greater Noida sectors and areas.', color: '#ff6b9d' },
    { emoji: '💬', title: 'In-App Messaging', desc: 'Secure, real-time chat — no need to share your personal number.', color: '#00e5c3' },
    { emoji: '🛡️', title: 'Verified Profiles', desc: 'Student ID and Aadhaar verification for a safe and trusted community.', color: '#f97316' },
    { emoji: '📊', title: 'Compatibility Breakdown', desc: 'Detailed cards showing exactly why two people are a great match.', color: '#a855f7' },
    { emoji: '🔔', title: 'Instant Alerts', desc: 'Get notified when a high-compatibility listing drops in your preferred area.', color: '#6c63ff' },
  ]

  const listings = [
    { area: 'Sector 137', budget: '₹6,000 – ₹8,000/mo', tags: ['Student', 'Non-smoker', '🌙 Night Owl'], bg: 'linear-gradient(135deg, #1a1040, #0d2240)', emoji: '🏢' },
    { area: 'Knowledge Park II', budget: '₹7,500 – ₹10,000/mo', tags: ['Professional', 'Early Bird', '🐶 Pet-Friendly'], bg: 'linear-gradient(135deg, #0d2820, #0a1a30)', emoji: '🌿' },
    { area: 'Pari Chowk', budget: '₹5,000 – ₹7,000/mo', tags: ['Student', 'Female Only', '📚 Quiet Zone'], bg: 'linear-gradient(135deg, #2a1040, #1a0d20)', emoji: '🏙️' },
  ]

  const compatBars = [
    { label: 'Sleep Schedule', val: 92, color: 'linear-gradient(90deg, #6c63ff, #a855f7)' },
    { label: 'Cleanliness', val: 87, color: 'linear-gradient(90deg, #00e5c3, #6c63ff)' },
    { label: 'Social Life', val: 79, color: 'linear-gradient(90deg, #ff6b9d, #f97316)' },
    { label: 'Budget Match', val: 95, color: 'linear-gradient(90deg, #6c63ff, #00e5c3)' },
  ]

  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
          <div className="hero__grid-overlay" />
        </div>
        <div className="hero__content">
          <div className="hero__badge">
            <span className="badge-dot" />
            Now Live in Greater Noida
          </div>
          <h1 className="hero__title">
            Find Your Perfect<br />
            <span className="line-highlight">Stay Partner</span>
          </h1>
          <p className="hero__subtitle">
            AI-powered flatmate matching for students and professionals in Greater Noida.
            Post your lifestyle, get matched, move in — zero awkward surprises.
          </p>
          <div className="hero__actions">
            <button className="btn-primary" onClick={() => setPage('contact')}>
              🏠 Find a Flatmate
            </button>
            <button className="btn-secondary" onClick={() => setPage('about')}>
              How it works ↓
            </button>
          </div>
          <div className="hero__stats">
            {[['2,400+', 'Active Listings'], ['91%', 'Match Accuracy'], ['8 Areas', 'Greater Noida'], ['Free', 'To Get Started']].map(([val, lbl]) => (
              <div key={lbl} className="stat-item">
                <div className="stat-item__value">{val}</div>
                <div className="stat-item__label">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <span className="section__tag">How It Works</span>
        <h2 className="section__title">Four steps to your new home</h2>
        <p className="section__subtitle">From profile to keys in your hand — the whole process is designed to be fast, safe, and smart.</p>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={s.title} className="step-card">
              <div className="step-card__number">0{i + 1}</div>
              <span className="step-card__icon">{s.icon}</span>
              <h3 className="step-card__title">{s.title}</h3>
              <p className="step-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="features-inner">
          <div className="features-header">
            <div>
              <span className="section__tag">Features</span>
              <h2 className="section__title">Everything you need</h2>
            </div>
            <p className="section__subtitle">Built specifically for the Greater Noida student and professional community.</p>
          </div>
          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-card__glow" style={{ background: f.color }} />
                <span className="feature-card__emoji">{f.emoji}</span>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Preview */}
      <section className="compat-section">
        <div>
          <span className="section__tag">AI Matching</span>
          <h2 className="section__title">Compatibility you can actually see</h2>
          <p className="section__subtitle" style={{ marginBottom: 28 }}>
            Every match comes with a detailed breakdown so you know exactly why FlatMate thinks you'll get along.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Sleep patterns', 'Study habits', 'Guest policy', 'Cooking style', 'Budget range'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
        <div className="compat-card">
          <div className="compat-card__header">
            <div className="compat-avatar compat-avatar--a">R</div>
            <div style={{ fontSize: 18, color: 'var(--clr-muted)' }}>⇄</div>
            <div className="compat-avatar compat-avatar--b">A</div>
            <div className="compat-card__names" style={{ marginLeft: 8 }}>
              <h4>Rahul & Anjali</h4>
              <p>Sector 62 · Knowledge Park III</p>
            </div>
            <div className="compat-score-badge">94%</div>
          </div>
          <div className="compat-bars">
            {compatBars.map(b => (
              <div key={b.label}>
                <div className="compat-bar__label">
                  <span>{b.label}</span>
                  <span style={{ color: 'var(--clr-text)', fontWeight: 600 }}>{b.val}%</span>
                </div>
                <div className="compat-bar__track">
                  <div className="compat-bar__fill" style={{ width: `${b.val}%`, background: b.color }} />
                </div>
              </div>
            ))}
          </div>
          <div className="compat-tags">
            {['Non-smoker ✓', 'Night Owl ✓', 'Vegetarian ✓', 'Budget aligned ✓'].map(t => (
              <span key={t} className="tag tag--teal">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Listings Preview */}
      <section className="listings-section">
        <span className="section__tag">Active Listings</span>
        <h2 className="section__title">Rooms near you right now</h2>
        <div className="listings-grid">
          {listings.map((l) => (
            <div key={l.area} className="listing-card">
              <div className="listing-card__img" style={{ background: l.bg }}>
                <span>{l.emoji}</span>
              </div>
              <div className="listing-card__body">
                <div className="listing-card__area">{l.area}</div>
                <div className="listing-card__budget">{l.budget}</div>
                <div className="listing-card__meta">
                  {l.tags.map(t => <span key={t} className="listing-card__tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <div className="cta-banner" style={{ margin: '0 60px 100px' }}>
        <div className="cta-banner__content">
          <h2>Ready to find your<br /><span style={{ color: 'var(--clr-primary)' }}>perfect flatmate?</span></h2>
          <p>Join thousands of students and professionals already living better together in Greater Noida.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => setPage('contact')}>
              🚀 Post Your Profile — It's Free
            </button>
            <button className="btn-secondary" onClick={() => setPage('about')}>
              Learn more →
            </button>
          </div>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  )
}

/* ═══════════════════════════════════════════
   ABOUT PAGE
═══════════════════════════════════════════ */
function AboutPage({ setPage }) {
  const missions = [
    {
      icon: '🎓', bg: 'rgba(108,99,255,0.15)', title: 'Built for Students',
      desc: 'We understand the struggle of finding accommodation near universities in Greater Noida. FlatMate was born from that problem.'
    },
    {
      icon: '🤝', bg: 'rgba(0,229,195,0.1)', title: 'Safe & Verified',
      desc: 'Every profile goes through student ID or Aadhaar verification. We prioritize your safety above everything else.'
    },
    {
      icon: '✨', bg: 'rgba(255,107,157,0.1)', title: 'AI-First Approach',
      desc: 'We don\'t just match on budget. Our model analyses 12+ lifestyle factors so you actually enjoy living with your flatmate.'
    },
  ]

  const team = [
    { initial: 'A', name: 'Aryan Sharma', role: 'Founder & CEO', tag: 'NIET \'22', bg: 'linear-gradient(135deg, #6c63ff, #a855f7)' },
    { initial: 'P', name: 'Priya Gupta', role: 'Head of Product', tag: 'GL Bajaj \'23', bg: 'linear-gradient(135deg, #ff6b9d, #f97316)' },
    { initial: 'K', name: 'Kunal Verma', role: 'Lead Engineer', tag: 'KIET \'22', bg: 'linear-gradient(135deg, #00e5c3, #6c63ff)' },
    { initial: 'S', name: 'Sneha Rao', role: 'AI/ML Engineer', tag: 'IMS \'23', bg: 'linear-gradient(135deg, #a855f7, #6c63ff)' },
  ]

  const dotPositions = [
    { top: '15%', left: '80%' }, { top: '75%', left: '20%' },
    { top: '30%', right: '15%' }, { bottom: '20%', left: '70%' },
  ]

  return (
    <div className="page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__text">
          <span className="big-tag">Our Story</span>
          <h1>We make shared living <span style={{ color: 'var(--clr-primary)' }}>actually work</span></h1>
          <p>
            Greater Noida has thousands of students and professionals searching for accommodation every semester.
            The old way — WhatsApp groups, sketchy brokers, random roommates — was broken.
          </p>
          <p>
            FlatMate was built to fix that. We combine lifestyle intelligence with real community trust so that
            finding a flatmate feels less like a gamble and more like meeting a future friend.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 8 }}>
            <button className="btn-primary" onClick={() => setPage('contact')}>Join FlatMate</button>
            <button className="btn-secondary" onClick={() => setPage('home')}>← Back Home</button>
          </div>
        </div>
        <div className="about-visual">
          {[1, 2, 3].map(i => <div key={i} className="about-visual__ring" />)}
          <div className="about-visual__center">🏠</div>
          {dotPositions.map((style, i) => (
            <div key={i} className="about-visual__dot" style={{
              ...style,
              background: ['#6c63ff', '#ff6b9d', '#00e5c3', '#f97316'][i],
              boxShadow: `0 0 12px ${['#6c63ff', '#ff6b9d', '#00e5c3', '#f97316'][i]}`
            }} />
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="mission-inner">
          <span className="section__tag">Our Mission</span>
          <h2 className="section__title">Why we built this</h2>
          <div className="mission-grid">
            {missions.map((m) => (
              <div key={m.title} className="mission-card">
                <div className="mission-card__icon" style={{ background: m.bg, fontSize: '1.5rem' }}>{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="section" style={{ textAlign: 'center' }}>
        <span className="section__tag">By The Numbers</span>
        <h2 className="section__title">Growing every day</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 48 }}>
          {[['2,400+', 'Active listings', '#6c63ff'], ['91%', 'Match satisfaction', '#00e5c3'], ['8', 'Greater Noida areas', '#ff6b9d'], ['6 months', 'Since launch', '#a855f7']].map(([val, lbl, clr]) => (
            <div key={lbl} className="step-card" style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, color: clr, marginBottom: 8 }}>{val}</div>
              <div style={{ color: 'var(--clr-muted)', fontSize: '0.85rem' }}>{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <span className="section__tag">The Team</span>
        <h2 className="section__title">People behind FlatMate</h2>
        <div className="team-grid">
          {team.map((t) => (
            <div key={t.name} className="team-card">
              <div className="team-card__avatar" style={{ background: t.bg }}>{t.initial}</div>
              <div className="team-card__name">{t.name}</div>
              <div className="team-card__role">{t.role}</div>
              <span className="team-card__tag">{t.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  )
}

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
                        <option value="" disabled>Select one</option>
                        <option value="student">Student</option>
                        <option value="professional">Working Professional</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Preferred Area</label>
                      <select name="area" value={form.area} onChange={handleChange}>
                        <option value="" disabled>Select area</option>
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

/* ═══════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════ */
function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer__brand">
        Flat<span>Mate</span> · Greater Noida
      </div>
      <div className="footer__copy">© 2025 FlatMate. Made with ❤️ in Greater Noida.</div>
      <div className="footer__links">
        {['home', 'about', 'contact'].map(p => (
          <a key={p} href="#" onClick={(e) => { e.preventDefault(); setPage(p) }}>
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </a>
        ))}
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════
   ROOT APP
═══════════════════════════════════════════ */
export default function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <Navbar activePage={page} setPage={setPage} />
      {page === 'home'    && <HomePage    setPage={setPage} />}
      {page === 'about'   && <AboutPage   setPage={setPage} />}
      {page === 'contact' && <ContactPage setPage={setPage} />}
    </>
  )
}

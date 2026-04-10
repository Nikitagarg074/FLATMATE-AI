/* ═══════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════ */
export default function HomePage({ setPage }) {
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
    </div>
  )
}

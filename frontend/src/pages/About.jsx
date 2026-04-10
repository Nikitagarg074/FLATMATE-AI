
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
export default AboutPage;

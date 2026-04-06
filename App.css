/* ============================================================
   FLATMATE — APP.CSS
   Design System: Dark Urban Glassmorphism + Neon Ink
   ============================================================ */

/* ── CSS Variables ── */
:root {
  --clr-bg:        #07080f;
  --clr-bg2:       #0d0f1e;
  --clr-surface:   rgba(255,255,255,0.04);
  --clr-border:    rgba(255,255,255,0.08);
  --clr-primary:   #6c63ff;
  --clr-accent:    #ff6b9d;
  --clr-teal:      #00e5c3;
  --clr-text:      #e8e8f0;
  --clr-muted:     #7b7c9e;
  --font-display:  'Syne', sans-serif;
  --font-body:     'DM Sans', sans-serif;
  --radius-lg:     20px;
  --radius-md:     12px;
  --radius-sm:     8px;
  --shadow-neon:   0 0 40px rgba(108,99,255,0.25);
  --shadow-card:   0 8px 40px rgba(0,0,0,0.5);
  --transition:    0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── Navbar ── */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 60px;
  background: rgba(7,8,15,0.75);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--clr-border);
  transition: var(--transition);
}

.navbar__logo {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.navbar__logo span.logo-flat { color: var(--clr-text); }
.navbar__logo span.logo-mate { color: var(--clr-primary); }
.navbar__logo .logo-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--clr-accent);
  display: inline-block;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.7); }
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 36px;
  list-style: none;
}

.navbar__links li a,
.navbar__links li button {
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--clr-muted);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: color var(--transition);
  letter-spacing: 0.3px;
  position: relative;
  padding-bottom: 4px;
}

.navbar__links li button.active,
.navbar__links li a:hover,
.navbar__links li button:hover {
  color: var(--clr-text);
}

.navbar__links li button.active::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--clr-primary), var(--clr-accent));
  border-radius: 2px;
}

.navbar__cta {
  background: linear-gradient(135deg, var(--clr-primary), var(--clr-accent));
  color: #fff !important;
  padding: 10px 22px !important;
  border-radius: 50px !important;
  font-weight: 600 !important;
  font-size: 0.85rem !important;
  box-shadow: 0 4px 20px rgba(108,99,255,0.35);
  transition: transform var(--transition), box-shadow var(--transition) !important;
}

.navbar__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(108,99,255,0.5) !important;
  color: #fff !important;
}

/* ── Page Wrapper ── */
.page {
  min-height: 100vh;
  padding-top: 80px;
  animation: fadeUp 0.5s ease both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ══════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════ */

/* Hero */
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 24px 60px;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.45;
  animation: orb-float 8s ease-in-out infinite alternate;
}

.hero__orb--1 {
  width: 420px; height: 420px;
  background: radial-gradient(circle, #6c63ff 0%, transparent 70%);
  top: -80px; left: -100px;
}
.hero__orb--2 {
  width: 320px; height: 320px;
  background: radial-gradient(circle, #ff6b9d 0%, transparent 70%);
  bottom: 40px; right: -60px;
  animation-delay: 2s;
}
.hero__orb--3 {
  width: 250px; height: 250px;
  background: radial-gradient(circle, #00e5c3 0%, transparent 70%);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 4s;
  opacity: 0.2;
}

@keyframes orb-float {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(30px, 20px) scale(1.08); }
}

.hero__grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 780px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(108,99,255,0.12);
  border: 1px solid rgba(108,99,255,0.3);
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--clr-primary);
  margin-bottom: 28px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  animation: fadeUp 0.6s 0.1s ease both;
}

.hero__badge .badge-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--clr-primary);
  animation: pulse-dot 1.5s ease-in-out infinite;
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6vw, 5.2rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -2px;
  margin-bottom: 24px;
  animation: fadeUp 0.6s 0.2s ease both;
}

.hero__title .line-highlight {
  background: linear-gradient(135deg, var(--clr-primary) 20%, var(--clr-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__subtitle {
  font-size: 1.1rem;
  color: var(--clr-muted);
  line-height: 1.7;
  max-width: 560px;
  margin: 0 auto 40px;
  font-weight: 300;
  animation: fadeUp 0.6s 0.3s ease both;
}

.hero__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  animation: fadeUp 0.6s 0.4s ease both;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--clr-primary), var(--clr-accent));
  color: #fff;
  padding: 14px 32px;
  border-radius: 50px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 24px rgba(108,99,255,0.4);
  transition: transform var(--transition), box-shadow var(--transition);
  text-decoration: none;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(108,99,255,0.55);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--clr-surface);
  color: var(--clr-text);
  padding: 14px 28px;
  border-radius: 50px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid var(--clr-border);
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: background var(--transition), border-color var(--transition), transform var(--transition);
  text-decoration: none;
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.15);
  transform: translateY(-2px);
}

/* Stats strip */
.hero__stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 72px;
  padding-top: 48px;
  border-top: 1px solid var(--clr-border);
  animation: fadeUp 0.6s 0.5s ease both;
}

.stat-item {
  text-align: center;
}

.stat-item__value {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--clr-text), var(--clr-muted));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.stat-item__label {
  font-size: 0.78rem;
  color: var(--clr-muted);
  margin-top: 6px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 500;
}

/* ── How It Works ── */
.section {
  padding: 100px 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.section__tag {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--clr-primary);
  margin-bottom: 12px;
  display: block;
}

.section__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.1;
  margin-bottom: 16px;
}

.section__subtitle {
  color: var(--clr-muted);
  font-size: 1rem;
  line-height: 1.7;
  max-width: 480px;
  font-weight: 300;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 60px;
}

.step-card {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
  padding: 36px 28px;
  position: relative;
  overflow: hidden;
  transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
  cursor: default;
}

.step-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--clr-primary), var(--clr-accent));
  opacity: 0;
  transition: opacity var(--transition);
}

.step-card:hover {
  transform: translateY(-6px);
  border-color: rgba(108,99,255,0.3);
  box-shadow: var(--shadow-neon);
}

.step-card:hover::before { opacity: 1; }

.step-card__number {
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 800;
  color: rgba(108,99,255,0.12);
  line-height: 1;
  margin-bottom: 16px;
}

.step-card__icon {
  font-size: 2rem;
  margin-bottom: 16px;
  display: block;
}

.step-card__title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.step-card__desc {
  color: var(--clr-muted);
  font-size: 0.88rem;
  line-height: 1.7;
  font-weight: 300;
}

/* ── Features ── */
.features-section {
  padding: 100px 60px;
  background: var(--clr-bg2);
  border-top: 1px solid var(--clr-border);
  border-bottom: 1px solid var(--clr-border);
}

.features-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.features-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 60px;
  flex-wrap: wrap;
  gap: 24px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 900px) {
  .features-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .features-grid { grid-template-columns: 1fr; }
  .section { padding: 70px 24px; }
  .features-section { padding: 70px 24px; }
  .navbar { padding: 16px 24px; }
  .hero__stats { gap: 28px; }
}

.feature-card {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
  padding: 32px 26px;
  transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 48px rgba(0,0,0,0.4);
  border-color: rgba(108,99,255,0.25);
}

.feature-card__glow {
  position: absolute;
  top: -20px; right: -20px;
  width: 80px; height: 80px;
  border-radius: 50%;
  filter: blur(30px);
  opacity: 0.5;
}

.feature-card__emoji {
  font-size: 2rem;
  margin-bottom: 18px;
  display: block;
}

.feature-card__title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.feature-card__desc {
  color: var(--clr-muted);
  font-size: 0.85rem;
  line-height: 1.7;
  font-weight: 300;
}

/* ── Compatibility Card Preview ── */
.compat-section {
  padding: 100px 60px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

@media (max-width: 900px) {
  .compat-section { grid-template-columns: 1fr; gap: 48px; }
}

.compat-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
  padding: 32px;
  box-shadow: var(--shadow-card);
  position: relative;
  overflow: hidden;
}

.compat-card__header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}

.compat-avatar {
  width: 52px; height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 700;
  flex-shrink: 0;
}

.compat-avatar--a { background: linear-gradient(135deg, #6c63ff, #a855f7); }
.compat-avatar--b { background: linear-gradient(135deg, #ff6b9d, #f97316); }

.compat-card__names {
  flex: 1;
}

.compat-card__names h4 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
}

.compat-card__names p {
  font-size: 0.8rem;
  color: var(--clr-muted);
  margin-top: 2px;
}

.compat-score-badge {
  background: linear-gradient(135deg, var(--clr-primary), var(--clr-accent));
  padding: 6px 14px;
  border-radius: 50px;
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 700;
}

.compat-bars {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
}

.compat-bar__label {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: var(--clr-muted);
}

.compat-bar__track {
  height: 6px;
  background: rgba(255,255,255,0.06);
  border-radius: 50px;
  overflow: hidden;
}

.compat-bar__fill {
  height: 100%;
  border-radius: 50px;
  transition: width 1s ease;
}

.compat-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: rgba(108,99,255,0.1);
  border: 1px solid rgba(108,99,255,0.2);
  color: var(--clr-primary);
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 500;
}

.tag--teal {
  background: rgba(0,229,195,0.08);
  border-color: rgba(0,229,195,0.2);
  color: var(--clr-teal);
}

/* ── Listings Preview ── */
.listings-section {
  padding: 40px 60px 100px;
  max-width: 1200px;
  margin: 0 auto;
}

.listings-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 48px;
}

@media (max-width: 900px) {
  .listings-grid { grid-template-columns: 1fr 1fr; }
}

.listing-card {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform var(--transition), box-shadow var(--transition);
  cursor: pointer;
}

.listing-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

.listing-card__img {
  height: 140px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
}

.listing-card__body {
  padding: 20px;
}

.listing-card__area {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.listing-card__budget {
  color: var(--clr-teal);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.listing-card__meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.listing-card__tag {
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--clr-border);
  padding: 3px 10px;
  border-radius: 50px;
  font-size: 0.72rem;
  color: var(--clr-muted);
}

/* ── CTA Banner ── */
.cta-banner {
  margin: 0 60px 100px;
  background: linear-gradient(135deg, rgba(108,99,255,0.15), rgba(255,107,157,0.1));
  border: 1px solid rgba(108,99,255,0.25);
  border-radius: var(--radius-lg);
  padding: 64px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-banner::before {
  content: '';
  position: absolute;
  top: -50%; left: -50%;
  width: 200%; height: 200%;
  background: conic-gradient(from 0deg, transparent 70%, rgba(108,99,255,0.05) 100%);
  animation: cta-spin 12s linear infinite;
}

@keyframes cta-spin {
  to { transform: rotate(360deg); }
}

.cta-banner__content {
  position: relative;
  z-index: 1;
}

.cta-banner h2 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 16px;
}

.cta-banner p {
  color: var(--clr-muted);
  margin-bottom: 36px;
  font-size: 1rem;
  font-weight: 300;
}

/* ══════════════════════════════════════════
   ABOUT PAGE
══════════════════════════════════════════ */

.about-hero {
  padding: 80px 60px 60px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

@media (max-width: 900px) {
  .about-hero { grid-template-columns: 1fr; gap: 40px; }
}

.about-hero__text .big-tag {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--clr-accent);
  display: block;
  margin-bottom: 16px;
}

.about-hero__text h1 {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin-bottom: 24px;
}

.about-hero__text p {
  color: var(--clr-muted);
  line-height: 1.8;
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 16px;
}

.about-visual {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-visual__ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(108,99,255,0.2);
  animation: ring-spin 20s linear infinite;
}

.about-visual__ring:nth-child(1) { width: 280px; height: 280px; }
.about-visual__ring:nth-child(2) { width: 360px; height: 360px; animation-duration: 30s; animation-direction: reverse; border-color: rgba(255,107,157,0.15); }
.about-visual__ring:nth-child(3) { width: 440px; height: 440px; animation-duration: 40s; border-color: rgba(0,229,195,0.1); }

@keyframes ring-spin {
  to { transform: rotate(360deg); }
}

.about-visual__center {
  width: 120px; height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--clr-primary), var(--clr-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  box-shadow: 0 0 60px rgba(108,99,255,0.4);
  position: relative;
  z-index: 1;
}

.about-visual__dot {
  position: absolute;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--clr-primary);
  box-shadow: 0 0 10px var(--clr-primary);
}

/* Mission section */
.mission-section {
  padding: 80px 60px;
  background: var(--clr-bg2);
  border-top: 1px solid var(--clr-border);
}

.mission-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 56px;
}

@media (max-width: 800px) {
  .mission-grid { grid-template-columns: 1fr; }
}

.mission-card {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
  padding: 36px 28px;
  transition: transform var(--transition);
}

.mission-card:hover { transform: translateY(-4px); }

.mission-card__icon {
  font-size: 2rem;
  margin-bottom: 18px;
  display: flex;
  width: 56px; height: 56px;
  border-radius: var(--radius-md);
  align-items: center;
  justify-content: center;
}

.mission-card h3 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.mission-card p {
  color: var(--clr-muted);
  font-size: 0.87rem;
  line-height: 1.7;
  font-weight: 300;
}

/* Team section */
.team-section {
  padding: 80px 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 48px;
}

@media (max-width: 900px) {
  .team-grid { grid-template-columns: 1fr 1fr; }
}

.team-card {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
  padding: 28px 22px;
  text-align: center;
  transition: transform var(--transition), box-shadow var(--transition);
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
}

.team-card__avatar {
  width: 64px; height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin: 0 auto 16px;
  font-weight: 700;
  color: #fff;
}

.team-card__name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 4px;
}

.team-card__role {
  font-size: 0.78rem;
  color: var(--clr-muted);
  margin-bottom: 12px;
}

.team-card__tag {
  font-size: 0.72rem;
  background: rgba(108,99,255,0.1);
  border: 1px solid rgba(108,99,255,0.2);
  color: var(--clr-primary);
  padding: 3px 10px;
  border-radius: 50px;
}

/* ══════════════════════════════════════════
   CONTACT PAGE
══════════════════════════════════════════ */

.contact-page {
  padding: 60px 60px 100px;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 64px;
  margin-top: 60px;
  align-items: start;
}

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 48px; }
}

.contact-info h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.1;
  margin-bottom: 20px;
}

.contact-info p {
  color: var(--clr-muted);
  line-height: 1.8;
  font-size: 0.95rem;
  margin-bottom: 40px;
  font-weight: 300;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-link-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  transition: border-color var(--transition), transform var(--transition);
  cursor: pointer;
  text-decoration: none;
}

.contact-link-item:hover {
  border-color: rgba(108,99,255,0.35);
  transform: translateX(4px);
}

.contact-link-icon {
  width: 44px; height: 44px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.contact-link-text strong {
  display: block;
  font-size: 0.88rem;
  font-weight: 600;
  margin-bottom: 2px;
}

.contact-link-text span {
  font-size: 0.8rem;
  color: var(--clr-muted);
}

/* Form */
.contact-form-card {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
  padding: 40px;
  backdrop-filter: blur(10px);
}

.contact-form-card h3 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 28px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

@media (max-width: 600px) {
  .form-row { grid-template-columns: 1fr; }
  .contact-page { padding: 60px 24px 80px; }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.form-group label {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--clr-muted);
  letter-spacing: 0.3px;
}

.form-group input,
.form-group select,
.form-group textarea {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  color: var(--clr-text);
  font-family: var(--font-body);
  font-size: 0.9rem;
  outline: none;
  transition: border-color var(--transition), background var(--transition), box-shadow var(--transition);
  width: 100%;
  resize: vertical;
}

.form-group input:focus,
.form-group select,
.form-group textarea:focus {
  border-color: var(--clr-primary);
  background: rgba(108,99,255,0.05);
  box-shadow: 0 0 0 3px rgba(108,99,255,0.1);
}

.form-group select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%237b7c9e' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
}

.form-group select option {
  background: #0d0f1e;
}

.form-group textarea { min-height: 110px; }

.form-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  gap: 16px;
}

.form-success__icon {
  width: 72px; height: 72px;
  background: linear-gradient(135deg, var(--clr-primary), var(--clr-teal));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 0 40px rgba(0,229,195,0.3);
  animation: bounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
}

@keyframes bounceIn {
  from { transform: scale(0); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}

.form-success h3 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
}

.form-success p {
  color: var(--clr-muted);
  font-size: 0.9rem;
}

/* ── Footer ── */
.footer {
  border-top: 1px solid var(--clr-border);
  padding: 40px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.footer__brand {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
}

.footer__brand span { color: var(--clr-primary); }

.footer__copy {
  color: var(--clr-muted);
  font-size: 0.8rem;
}

.footer__links {
  display: flex;
  gap: 24px;
}

.footer__links a {
  color: var(--clr-muted);
  text-decoration: none;
  font-size: 0.8rem;
  transition: color var(--transition);
}

.footer__links a:hover { color: var(--clr-text); }

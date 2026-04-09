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
export default Navbar;
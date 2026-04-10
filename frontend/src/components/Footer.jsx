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

export default Footer;

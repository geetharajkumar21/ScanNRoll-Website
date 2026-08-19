function Header() {
  const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'About Us', href: '#about' },
  ];

  return (
    <header className="site-header">
      <div className="site-header__brand">
        <img
          className="site-header__logo"
          src="/assets/logo.png"
          alt="ScanNRoll logo"
        />
        <span className="site-header__brand-name">ScanNRoll</span>
      </div>

      <nav className="site-header__nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a
            className={
              'site-header__nav-item' +
              (link.active ? ' site-header__nav-item--active' : '')
            }
            href={link.href}
            key={link.label}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="site-header__actions">
        <button className="site-header__lang-btn" type="button">
          Language
          <span className="site-header__lang-caret" aria-hidden="true">▾</span>
        </button>
      </div>
    </header>
  );
}

export default Header;

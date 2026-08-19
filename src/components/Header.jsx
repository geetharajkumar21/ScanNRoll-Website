import { useEffect, useRef, useState } from 'react';

function Header({ currentPath, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [languageLabel, setLanguageLabel] = useState('Language');
  const headerRef = useRef(null);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!headerRef.current || headerRef.current.contains(event.target)) {
        return;
      }

      setIsMobileMenuOpen(false);
      setIsLanguageOpen(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleNavigate = (href) => {
    setIsMobileMenuOpen(false);
    setIsLanguageOpen(false);
    onNavigate(href);
  };

  const handleLanguageSelect = () => {
    setLanguageLabel('English');
    setIsLanguageOpen(false);
  };

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__inner">
        <div className="site-header__brand">
          <img
            className="site-header__logo"
            src="/assets/logo.png"
            alt="ScanNRoll logo"
          />
          <span className="site-header__brand-name">ScanNRoll</span>
        </div>

        <div className="site-header__mobile-menu-wrap">
          <button
            className="site-header__menu"
            type="button"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          {isMobileMenuOpen && (
            <nav className="site-header__mobile-nav" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <button
                  className={
                    'site-header__mobile-item' +
                    (currentPath === link.href || (currentPath === 'home' && link.href === '/')
                      ? ' site-header__mobile-item--active'
                      : '')
                  }
                  type="button"
                  onClick={() => handleNavigate(link.href)}
                  key={link.label}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          )}
        </div>

        <nav className="site-header__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              className={
                'site-header__nav-item' +
                (currentPath === link.href || (currentPath === 'home' && link.href === '/')
                  ? ' site-header__nav-item--active'
                  : '')
              }
              type="button"
              onClick={() => handleNavigate(link.href)}
              key={link.label}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            className="site-header__lang-btn"
            type="button"
            onClick={() => setIsLanguageOpen((value) => !value)}
            aria-expanded={isLanguageOpen}
          >
            <span>{languageLabel}</span>
            <span className="site-header__lang-caret" aria-hidden="true">
              ▾
            </span>
          </button>

          {isLanguageOpen && (
            <div className="site-header__lang-dropdown" role="menu" aria-label="Language options">
              <button className="site-header__lang-option" type="button" onClick={handleLanguageSelect}>
                English
              </button>
            </div>
          )}
        </div>
      </div>

    </header>
  );
}

export default Header;

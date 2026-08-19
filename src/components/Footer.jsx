const footerLinks = ['Privacy Policy', 'Terms of Use', 'Contact Us'];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <div className="site-footer__logo-circle">
          <img src="/assets/logo.png" alt="ScanNRoll logo" />
        </div>
        <span className="site-footer__brand-name">ScanNRoll</span>
      </div>

      <p className="site-footer__tagline">
        All-in-one solutions that help businesses manage, connect and grow
        with confidence.
      </p>

      <nav className="site-footer__links" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <a className="site-footer__link" href="#" key={link}>
            {link}
          </a>
        ))}
      </nav>

      <div className="site-footer__bottom">
        <span>© 2026 ScanNRoll. All rights reserved.</span>
        <span>Empowering Smarter Business Operations.</span>
      </div>
    </footer>
  );
}

export default Footer;

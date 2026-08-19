const footerLinks = ['Privacy Policy', 'Terms of Use', 'Contact Us'];

function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__identity">
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
          </div>

          <nav className="site-footer__links" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <button
                className="site-footer__link"
                type="button"
                onClick={() =>
                  onNavigate(
                    link === 'Privacy Policy'
                      ? '/privacy-policy'
                      : link === 'Terms of Use'
                        ? '/terms-of-use'
                        : '/contact-us',
                  )
                }
                key={link}
              >
                {link}
              </button>
            ))}
          </nav>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 ScanNRoll. All rights reserved.</span>
          <span>Empowering Smarter Business Operations.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

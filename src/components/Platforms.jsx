const platforms = [
  {
    key: 'web',
    name: 'ScanNRoll Web',
    tagline: 'Manage your operations with ease.',
    color: '#47650b',
    bg: '#eef7e2',
    icon: '/assets/web-login-icon.png',
    iconSize: { width: 80, height: 80 },
    action: { label: 'Inquire an Account', style: 'solid', bg: '#47650b' },
  },
  {
    key: 'pro',
    name: 'ScanNRoll Pro',
    tagline: 'Professional mobile toolkit for on-the-go operations.',
    color: '#102b96',
    bg: '#eaf4fd',
    icon: '/assets/app-pro-phone.png',
    iconSize: { width: 66, height: 117 },
    action: { label: 'Inquire an Account', style: 'solid', bg: '#102b96' },
    badge: 'google',
  },
  {
    key: 'app',
    name: 'ScanNRoll App',
    tagline: 'Scan QR codes and NFC tags to access digital experiences.',
    color: '#ff4800',
    bg: '#fff1e6',
    icon: '/assets/app-scan-phone.png',
    iconSize: { width: 63, height: 112 },
    badges: ['google', 'apple'],
    badges: ['Get it on Google Play', 'Download on the App Store'],
  },
];

function Platforms() {
  return (
    <section className="platforms" id="platforms">
      <p className="section-eyebrow">OUR PLATFORMS</p>
      <h2 className="section-title">Powerful Tools. Built for Every Workflow</h2>

      <div className="platforms__grid">
        {platforms.map((p) => (
          <div
            className="platform-card"
            key={p.key}
            style={{ backgroundColor: p.bg }}
          >
            <div className="platform-card__top">
              <img
                className="platform-card__icon"
                src={p.icon}
                alt={p.name}
                style={{
                  width: p.iconSize.width,
                  height: p.iconSize.height,
                }}
              />
              <div className="platform-card__text">
                <h3 className="platform-card__title" style={{ color: p.color }}>
                  {p.name}
                </h3>
                <p className="platform-card__desc">{p.tagline}</p>
              </div>
            </div>

            <div className="platform-card__bottom">
              {p.action && p.action.style === 'solid' && (
                <a
                  className="platform-card__btn platform-card__btn--solid"
                  style={{ backgroundColor: p.action.bg }}
                  href={`#${p.key}`}
                >
                  {p.action.label}
                </a>
              )}
              {p.action && p.action.style === 'outline' && (
                <a
                  className="platform-card__btn platform-card__btn--outline"
                  style={{ color: p.action.color, borderColor: p.action.color }}
                  href={`#${p.key}`}
                >
                  {p.action.label} <span aria-hidden="true">→</span>
                </a>
              )}

              {p.badge && (
                <span className="platform-card__badge">{p.badge}</span>
              )}
              {p.badges && (
                <div className="platform-card__badges">
                  {p.badges.map((b) => (
                    <span className="platform-card__badge" key={b}>
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Platforms;

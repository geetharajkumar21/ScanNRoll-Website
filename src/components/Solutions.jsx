const solutions = [
  {
    key: 'asset',
    name: 'Assest Management Software',
    color: '#0023ad',
    bg: '#eaf4fd',
    iconPosition: '0%',
    items: [
      'Reports & Dashboards',
      'Lifecycle Analytics',
      'Product Data & Media',
      'Asset Tracking & Inventory',
      'Maintenance Management',
    ],
  },
  {
    key: 'trolley',
    name: 'Smart Trolley Solutions',
    color: '#47650b',
    bg: '#f2fee9',
    iconPosition: '50%',
    items: [
      'Smart Connected Trolleys',
      'QR/NFC Integration',
      'Operational Efficiency',
      'Real Time Inventory',
      'Loss Prevention',
    ],
  },
  {
    key: 'media',
    name: 'Media & Interactive Solutions',
    color: '#5b007e',
    bg: '#fbf0ff',
    iconPosition: '100%',
    items: [
      'Campaign Management',
      'Interactive Experiences',
      'Content Management',
      'Audience Engagement',
      'Performance Insights',
    ],
  },
];

function Solutions() {
  return (
    <section className="solutions">
      <p className="section-eyebrow">OUR SOLUTIONS</p>
      <h2 className="section-title">
        Three Powerful Solutions. One Seamless Ecosystem
      </h2>

      <div className="solutions__grid">
        {solutions.map((s) => (
          <div
            className="solution-card"
            key={s.key}
            style={{ backgroundColor: s.bg }}
          >
            <div
              className="solution-card__icon"
              style={{
                backgroundImage: 'url(/assets/solutions-icons-sprite.png)',
                backgroundPositionX: s.iconPosition,
              }}
              role="img"
              aria-label={s.name}
            />
            <h3 className="solution-card__title" style={{ color: s.color }}>
              {s.name}
            </h3>
            <ul className="solution-card__list" style={{ color: s.color }}>
              {s.items.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Solutions;

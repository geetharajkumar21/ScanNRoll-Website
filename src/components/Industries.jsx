const industries = [
  { key: 'retail', label: 'Retail', icon: '/assets/industry-retail.png' },
  { key: 'logistics', label: 'Logistics', icon: '/assets/industry-logistics.png' },
  { key: 'manufacturing', label: 'Manufacturing', icon: '/assets/industry-manufacturing.png' },
  { key: 'hospitality', label: 'Hospitality', icon: '/assets/industry-hospitality.png' },
];

function Industries() {
  return (
    <section className="industries" id="industries">
      <p className="section-eyebrow">INDUSTRIES WE SERVE</p>
      <h2 className="section-title">
        Empowering Business Across Diverse Industries
      </h2>

      <div className="industries__grid">
        {industries.map((ind) => (
          <div className="industry-card" key={ind.key}>
            <img
              className="industry-card__icon"
              src={ind.icon}
              alt={ind.label}
            />
            <p className="industry-card__label">{ind.label}</p>
          </div>
        ))}
        <div className="industry-card">
          <img
            className="industry-card__icon"
            src="/assets/media-industry-icon.png"
            alt="Media & Interactive"
          />
          <p className="industry-card__label">Media &amp; Interactive</p>
        </div>
      </div>
    </section>
  );
}

export default Industries;

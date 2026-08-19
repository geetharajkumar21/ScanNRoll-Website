import topbanner from "./topbanner.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__heading">
          <h1 className="hero__title">
            <span>Smart Solutions.</span>
            <span>Connected Experiences.</span>
            <span className="hero__title-accent">Measurable Impact.</span>
          </h1>
        </div>

        <div className="hero__media">
          <img
            className="hero__illustration"
            src={topbanner}
            alt="ScanNRoll platform illustration connecting asset management, smart trolleys and media solutions"
          />
          <div className="hero__tags">
            <span className="hero__tag hero__tag--asset">
              Assest Management Software
            </span>
            <span className="hero__tag hero__tag--trolley">
              Smart Trolley Solutions
            </span>
            <span className="hero__tag hero__tag--media">
              Media &amp; Interactive Solutions
            </span>
          </div>
        </div>

        <div className="hero__content">
          <p className="hero__desc">
            ScanNRoll empowers businesses with innovative solutions to manage
            assets, engage customers and drive growth with confidence.
          </p>
          <div className="hero__actions">
            <a className="hero__btn hero__btn--primary" href="#web-login">
              ScanNRoll Web Login <span aria-hidden="true">→</span>
            </a>
            <a className="hero__btn hero__btn--outline" href="#store-admin">
              ScanNRoll Store Admin <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

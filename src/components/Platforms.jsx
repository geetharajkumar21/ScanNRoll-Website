function InquireIcon() {
  return (
    <span className="platform-card__inquire-icon" aria-hidden="true">
      <svg viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg" focusable="false">
        <circle cx="25" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M4 34c4-9 14-14 26-14 6 0 12 2 17 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
        <path d="M54 20v22M43 31h22" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
      </svg>
    </span>
  );
}

function Platforms() {
  return (
    <section className="platforms" id="platforms">
      <p className="section-eyebrow">OUR PLATFORMS</p>
      <h2 className="section-title">Powerful Tools. Built for Every Workflow</h2>

      <div className="platforms__grid">
        <article className="platform-card platform-card--web">
          <div className="platform-card__body">
            <img
              className="platform-card__icon platform-card__icon--web"
              src="/assets/web-login-icon.png"
              alt="ScanNRoll Web"
            />
            <div className="platform-card__copy">
              <h3 className="platform-card__title platform-card__title--web">
                ScanNRoll Web
              </h3>
              <p className="platform-card__desc">Manage your operations with ease.</p>
            </div>
          </div>
          <a className="platform-card__btn platform-card__btn--web-inquire" href="mailto:info@scannroll.com">
            <InquireIcon />
            <span>Inquire an Account</span>
          </a>
        </article>

        <article className="platform-card platform-card--pro">
          <div className="platform-card__body platform-card__body--pro">
            <img
              className="platform-card__icon platform-card__icon--pro"
              src="/assets/app-pro-phone.png"
              alt="ScanNRoll Pro"
            />
            <div className="platform-card__copy platform-card__copy--pro">
              <h3 className="platform-card__title platform-card__title--blue">
                ScanNRoll Pro
              </h3>
              <p className="platform-card__desc platform-card__desc--narrow">
                Professional mobile toolkit for on-the-go operations.
              </p>
              <div className="store-badges">
                <a
                  className="store-badge-shell"
                  href="https://play.google.com/store/apps/details?id=com.scannroll.app&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="store-badge-image"
                    src="/assets/google-play-badge-trimmed.png"
                    alt="Get it on Google Play"
                  />
                </a>
              </div>
            </div>
          </div>
          <a className="platform-card__btn platform-card__btn--pro-inquire" href="mailto:info@scannroll.com">
            <InquireIcon />
            <span>Inquire an Account</span>
          </a>
        </article>

        <article className="platform-card platform-card--app">
          <div className="platform-card__body platform-card__body--app">
            <img
              className="platform-card__icon platform-card__icon--app"
              src="/assets/app-scan-phone.png"
              alt="ScanNRoll App"
            />
            <div className="platform-card__copy platform-card__copy--app">
              <h3 className="platform-card__title platform-card__title--orange">
                ScanNRoll App
              </h3>
              <p className="platform-card__desc platform-card__desc--narrow">
                Scan QR codes and NFC tags to access digital experiences.
              </p>
              <div className="store-badges">
                <a
                  className="store-badge-shell"
                  href="https://play.google.com/store/apps/details?id=com.scannroll.clientapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="store-badge-image"
                    src="/assets/google-play-badge-trimmed.png"
                    alt="Get it on Google Play"
                  />
                </a>
                <a
                  className="store-badge-shell"
                  href="https://apps.apple.com/us/app/scannroll/id6748814746"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="store-badge-image store-badge-image--app-store"
                    src="/assets/app-store-badge.svg"
                    alt="Download on the App Store"
                  />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Platforms;

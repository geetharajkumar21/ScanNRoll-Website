import { useEffect, useRef, useState } from 'react';

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo (Congo-Brazzaville)',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czechia',
  'Democratic Republic of the Congo',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Holy See',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine State',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States of America',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

function ContactUsPage() {
  const [status, setStatus] = useState('idle');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isCountryListOpen, setIsCountryListOpen] = useState(false);
  const countryFieldRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryFieldRef.current && !countryFieldRef.current.contains(event.target)) {
        setIsCountryListOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const endpoint = import.meta.env.VITE_CONTACT_SHEET_WEBHOOK_URL;

    if (!endpoint) {
      setStatus('missing-endpoint');
      return;
    }

    const formData = new FormData(form);
    const payload = {
      firstName: formData.get('firstName')?.toString().trim() || '',
      lastName: formData.get('lastName')?.toString().trim() || '',
      country: formData.get('country')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      companyName: formData.get('companyName')?.toString().trim() || '',
      message: formData.get('message')?.toString().trim() || '',
      submittedAt: new Date().toISOString(),
    };

    setStatus('submitting');

    try {
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      form.reset();
      setSelectedCountry('');
      setIsCountryListOpen(false);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="simple-page">
      <div className="simple-page__card simple-page__card--contact">
        <h1 className="simple-page__title">CONTACT US</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <label className="contact-form__field contact-form__field--half">
              <span>First Name <i>*</i></span>
              <input name="firstName" type="text" placeholder="Enter your first name" required />
            </label>

            <label className="contact-form__field contact-form__field--half">
              <span>Last Name <i>*</i></span>
              <input name="lastName" type="text" placeholder="Enter your last name" required />
            </label>
          </div>

          <div className="contact-form__field">
            <span>Select <i>*</i></span>
            <div className="contact-form__country" ref={countryFieldRef}>
              <input
                className="contact-form__country-input"
                name="country"
                type="text"
                placeholder="Select your country"
                value={selectedCountry}
                readOnly
                required
                aria-label="Select your country"
                aria-expanded={isCountryListOpen}
                aria-haspopup="listbox"
                onClick={() => setIsCountryListOpen((prev) => !prev)}
              />

              {isCountryListOpen && (
                <ul className="contact-form__country-list" role="listbox" aria-label="Country list">
                  {countries.map((country) => (
                    <li key={country}>
                      <button
                        className="contact-form__country-option"
                        type="button"
                        onClick={() => {
                          setSelectedCountry(country);
                          setIsCountryListOpen(false);
                        }}
                      >
                        {country}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <label className="contact-form__field">
            <span>Email Address <i>*</i></span>
            <input name="email" type="email" placeholder="Enter your email address" required />
          </label>

          <label className="contact-form__field">
            <span>Company Name</span>
            <input name="companyName" type="text" placeholder="Enter your company name" />
          </label>

          <label className="contact-form__field contact-form__field--message">
            <span>Messages</span>
            <textarea name="message" placeholder="Enter your message" rows="7" />
          </label>

          <button className="contact-form__submit" type="submit">
            {status === 'submitting' ? 'Sending...' : 'Submit'}
          </button>

          {status === 'success' && (
            <p className="contact-form__status contact-form__status--success">Your message has been saved successfully.</p>
          )}
          {status === 'error' && (
            <p className="contact-form__status contact-form__status--error">Unable to save right now. Please try again.</p>
          )}
          {status === 'missing-endpoint' && (
            <p className="contact-form__status contact-form__status--error">Form endpoint is not configured yet.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactUsPage;
# ScanNRoll Website

Marketing website for ScanNRoll, built with React and Vite.

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/) for the app and dev server
- Plain CSS for styling
- ESLint for linting

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Other useful scripts:

```bash
npm run build   # production build
npm run lint     # run ESLint
npm run preview  # preview the production build locally
```

## Project Structure

- `src/components/` — shared sections (Header, Hero, Platforms, Solutions, Industries, Footer)
- `src/pages/` — routed pages (About Us, Contact Us, Privacy Policy, Terms of Use)
- `public/assets/` — static assets

## Contact Form

The contact form on the Contact Us page can post submissions as JSON to a webhook. Set the `VITE_CONTACT_SHEET_WEBHOOK_URL` environment variable (e.g. in a `.env` file) to enable this.

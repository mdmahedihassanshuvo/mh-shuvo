# Portfolio frontend (Vite + React)

This folder contains a Vite + React frontend for the `portfolio` app, replacing the Django template-based HTMX approach.

## Project Structure

```
src/
  components/
    pages/
      Home.jsx           # Hero section
      About.jsx          # Bio, education, experience
      Contact.jsx        # Contact form with validation
    common/
      Navigation.jsx     # App navbar with routing
      Footer.jsx         # App footer
    Portfolio.jsx        # Main app component with React Router
  services/
    api.js              # API calls to Django backend
  App.jsx               # React entry point
  main.jsx              # Vite/ReactDOM entry
  styles.css            # Global styles
```

## Quick start

Install dependencies:

```bash
cd portfolio/frontend
npm install
```

Development server (HMR on port 5173):

```bash
npm run dev
```

Then start Django:

```bash
python manage.py runserver
```

Open `http://localhost:8000` in your browser. The React app will load from the Vite dev server.

## Build for production

```bash
npm run build
```

This outputs static assets to `static/portfolio/` (configured in `vite.config.js`). After building, Django will serve the built React app from static files.

## Django integration

### Template Setup

The Vite scripts are included in `templates/base.html` via `templates/partials/portfolio/vite_scripts.html`:

- **Development (DEBUG=True)**: Loads Vite dev client from `http://localhost:5173`
- **Production (DEBUG=False)**: Loads built static JS from `static/portfolio/assets/index.js`

### API Endpoints

React components call Django API endpoints:

- **POST `/api/contact/`**: Submit contact form
  - Request: `{ name, email, subject, message }`
  - Response: `{ success: boolean, message: string }`

The API service is in `src/services/api.js` and automatically includes CSRF tokens.

### Vite Proxy

During development, Vite proxies `/api/*` to `http://localhost:8000` (see `vite.config.js`), so React can call `/api/...` without CORS issues.

## Routing

React Router handles client-side navigation:

- `/` → Home
- `/about` → About
- `/contact` → Contact

Navigation links use React Router's `<Link>` component.

## Styling

- Global styles: `src/styles.css`
- CSS classes from Django templates are preserved (Bootstrap 5, custom classes)
- Customize theme colors in `static/css/main.css` or add component-specific CSS modules

## Optional: django-vite

For advanced manifest-based asset management:

```bash
pip install django-vite
```

Then uncomment `'django_vite'` in `mh_shuvo/settings.py` and follow the django-vite documentation.

## Troubleshooting

**"Module not found" errors during build?**
- Run `npm install` to ensure all dependencies are installed.

**Vite dev server not connecting?**
- Ensure Vite is running on port 5173: `npm run dev`
- Check that `vite.config.js` has the correct dev server settings.

**API calls return CSRF token errors?**
- The `api.js` service automatically extracts and includes CSRF tokens from cookies.
- Ensure Django's CSRF middleware is enabled.

**Production build not loading?**
- Run `npm run build` and verify `static/portfolio/` contains built assets.
- Ensure `DEBUG=False` and `STATIC_URL` is configured correctly in Django settings.

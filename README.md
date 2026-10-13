# MH Shuvo Portfolio

Django backend and React/Vite frontend for the MH Shuvo portfolio.

## Requirements

Install these tools on the new machine:

- Python 3.10 or newer
- Node.js 20 or newer and npm
- Git

## Get the project

```bash
git clone <repository-url>
cd <project-folder>
```

The commands below should be run from the project root unless another folder is shown.

## Backend setup

Create and activate a Python virtual environment, then install the dependencies.

### Windows PowerShell

```powershell
cd backend
py -m venv venv
.\venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### macOS/Linux

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The Django server runs at `http://127.0.0.1:8000`.

Keep this terminal running. To stop the server, press `Ctrl+C`. To leave the virtual environment, run `deactivate`.

## Frontend setup

Open a second terminal at the project root:

```bash
cd frontend
npm install
npm run dev
```

The Vite development server runs at `http://localhost:5173`. The Vite configuration proxies frontend API requests to Django at `http://localhost:8000`, so both servers must be running during development.

## Environment variables

Optional local settings are listed in [.env.example](.env.example). Use it as a template for the environment variables your machine needs. The current Django settings read these values from the process environment; they do not automatically load a `.env` file.

```bash
cp .env.example .env
```

On Windows PowerShell, use:

```powershell
Copy-Item .env.example .env
```

Do not commit `.env` or real credentials. The contact form uses SMTP, so set `EMAIL_HOST_USER`, `EMAIL_HOST_PASSWORD`, `DEFAULT_FROM_EMAIL`, and `CONTACT_RECIPIENT_EMAIL` in the machine's environment before starting Django. The `EMAIL_BACKEND` value in `.env.example` is only a reference and is not currently applied automatically.

## Build the frontend

To create a production frontend bundle:

```bash
cd frontend
npm run build
```

The build output is written to `backend/static/portfolio/`. After building, run Django as usual. For a GitHub Pages build, use `npm run build:ghpages`.

## Useful commands

```bash
# Backend checks
cd backend
python manage.py check

# Create an admin user
python manage.py createsuperuser

# Frontend production preview
cd frontend
npm run build
npm run preview
```

The Django admin is available at `http://127.0.0.1:8000/manage/`, and the contact API endpoint is `http://127.0.0.1:8000/api/contact/`.

## Troubleshooting

- If `python` is not recognized on Windows, use `py` for the initial setup commands.
- If `npm run dev` reports that port 5173 is already in use, stop the other Vite process.
- If frontend API requests fail, confirm that Django is running on port 8000 and Vite is running on port 5173.
- If dependencies change, run `pip install -r backend/requirements.txt` and `npm install` again.

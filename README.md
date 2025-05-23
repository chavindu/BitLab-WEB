BitLab-WEB

## Deployment

This project uses GitHub Actions to automatically deploy to Netlify when changes are pushed to the `main` branch. The workflow is defined in `.github/workflows/deploy-netlify.yml`.

### Required GitHub Secrets

To enable the deployment workflow, you must configure the following secrets in your GitHub repository settings (Settings > Secrets and variables > Actions > New repository secret):

- **`NETLIFY_AUTH_TOKEN`**: Your Personal Access Token from Netlify. You can generate this from your User settings > Applications > Personal access tokens on Netlify.
- **`NETLIFY_SITE_ID`**: The API ID (also known as Site ID) of your site on Netlify. You can find this in your Site settings > General > Site details > Site information > API ID on Netlify.

- **`VITE_SUPABASE_URL`**: The URL of your Supabase project.
- **`VITE_SUPABASE_ANON_KEY`**: The public anonymous key for your Supabase project.
- **`VITE_DISABLE_SIGNUP`**: (e.g., `true` or `false`) Controls user sign-up.
- **`VITE_ENABLE_EMAIL_CONFIRM`**: (e.g., `true` or `false`) Controls email confirmation for sign-ups.
- **`VITE_SMTP_HOST`**: SMTP server host for email sending.
- **`VITE_SMTP_PORT`**: SMTP server port.
- **`VITE_SMTP_USER`**: Username for the SMTP server.
- **`VITE_SMTP_PASS`**: Password for the SMTP server.
- **`VITE_SMTP_SENDER`**: The sender email address for outgoing emails.
- **`VITE_GOOGLE_CLIENT_ID`**: Google Client ID for OAuth.
- **`VITE_GOOGLE_SECRET`**: Google Client Secret for OAuth.
- **`VITE_SITE_URL`**: The production URL of your site (e.g., `https://your-site.netlify.app`).

Ensure these secrets are added accurately for the deployment to succeed. The `VITE_` prefixed variables are used during the build process to bake in the necessary configurations for the application.

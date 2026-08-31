# Vishal Portfolio — Self Deployment

This project is a standalone React + Vite portfolio with an included Express server for production hosting.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Install and run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:3000`.

## Validate and build

```bash
npm run check
npm run build
```

The build creates the production client under `dist/public` and bundles the Express server to `dist/index.js`.

## Run the production server

```bash
npm start
```

The server uses the `PORT` environment variable when provided, otherwise it listens on port 3000.

## Deploy as a Node application

Upload the project to your server, then run:

```bash
npm install
npm run build
npm start
```

For a production server, place Nginx or another reverse proxy in front of the Node process and point your domain to the server.

## Static hosting

The portfolio can also be hosted as static files. Run:

```bash
npm run build
```

Then publish `dist/public` on a static host and configure SPA fallback so unknown routes serve `index.html`.

## Notes

- The portfolio does not require a platform-specific runtime.
- The analytics placeholder script has been removed.
- The page assets are stored locally under `client/public/assets/`.
- If you later add your own analytics, domain, contact form, or API, configure those separately with your own credentials.

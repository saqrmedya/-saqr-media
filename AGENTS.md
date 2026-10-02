# SAQR MEDIA — Base44 Dev Environment

## What this is
A standalone Vite + React 18 frontend (Arabic RTL) for a digital marketing services platform. All data (451 services, 24 products, 12 categories) is bundled locally from `src/data/backup.json` — no backend or database required to run.

## Running the app
```bash
docker compose -f docker-compose.base44.yml up -d
```
- Vite dev server on port 5173, mapped to host port 3000.
- `npm install` runs automatically on container start.
- Live reload is active; edits to `src/` appear in the preview immediately.

## Key fix applied
The original `src/lib/data.js` imported `backup.json` from `/data/backup.json` (inside `public/`), which Vite 5 disallows. The file was copied to `src/data/backup.json` and the import changed to a relative path. The original `public/data/backup.json` is kept for the `scripts/import-backup.mjs` script.

## Optional credentials (not required to boot)
- `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY` — enables Supabase-backed admin price editing at `/admin`.
- `VITE_AI_ENDPOINT` — external AI backend for the Saqr AI page. Never put provider API keys in frontend env.
- `VITE_WHATSAPP_NUMBER` — defaults to `9647710392539` (set in compose environment).

## Verification
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` should return 200.
- Preview should show the Arabic home page with hero, search, and bottom navigation.

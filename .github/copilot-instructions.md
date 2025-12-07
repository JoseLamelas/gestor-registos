This repository is a small Express + Mongoose web app scaffold for a "gestor-registos" (police record manager).

Quick facts
- **Runtime:** Node.js (ESM) — `package.json` contains `"type": "module"`.
- **Web framework:** `express` (v5.x)
- **DB:** `mongoose` (MongoDB)
- **Env:** `dotenv` + a `.env` file in the repo root
- **Static UI:** files under `public/` (notably `public/pages/`, `public/js/`, `public/css/`).
- **Run:** `npm run start` (production) or `npm run dev` (nodemon, development) — both reference `server.js`.

What to look for first
- `package.json` — scripts and top-level deps (useful for running & tests).
- `.env` — expected to contain `PORT`, `MONGO_URI` (or similar). Always read before making DB code changes.
- `server.js` — referenced by start/dev scripts; if missing, locate the app entry (e.g., `index.js`, `app.js`) or create `server.js` that:
  - imports `dotenv` and calls `dotenv.config()`
  - connects to MongoDB with `mongoose.connect(process.env.MONGO_URI)`
  - creates an Express app, mounts routes from `routes/`, and serves `public/` via `express.static()`

Repository layout and conventions (discoverable patterns)
- `routes/` — route modules should export an Express `Router` and be mounted from the main server file.
- `controllers/` — place request handlers here. Controller functions should be async, accept `(req, res, next)`, and avoid writing response HTML directly (use `res.render` or `res.sendFile` from routes when serving pages in `public/pages`).
- `models/` — put Mongoose schema definitions here; export Model objects (e.g., `export const User = mongoose.model('User', userSchema)`).
- `public/` — static front-end; keep API and server code out of `public/`.

Important code-style constraints for generated code
- Use ESM `import` / `export` syntax (the project sets `"type": "module"`).
- Use `async/await` with try/catch and forward errors with `next(err)` to Express error handlers.
- Prefer single-purpose modules: each model, route, or controller in its own file.

Run & debug (PowerShell examples)
```
npm install
npm run dev    # starts nodemon server.js
npm run start  # node server.js
```
If `server.js` is missing, run this minimal template (ESM) as `server.js`:
```js
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

await mongoose.connect(process.env.MONGO_URI);
app.use(express.json());
app.use(express.static('public'));
// Example: import routes from './routes/records.js' and app.use('/records', routes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
```

Repository-specific guidance for AI agents
- There are empty folders `controllers/`, `models/`, and `routes/` — follow conventional structure when adding files. Example skeletons:
  - `models/Record.js` exports a Mongoose model named `Record`.
  - `controllers/recordsController.js` exports functions `createRecord`, `getRecords`, `updateRecord`, `deleteRecord`.
  - `routes/records.js` mounts controller handlers on `POST /`, `GET /`, `PUT /:id`, `DELETE /:id`.
- Keep static views in `public/pages/` and client JS in `public/js/` — do not mix server-side logic into `public/`.
- When adding new environment keys, update `.env.example` (create it if missing) and document their purpose in `README.md`.

What I couldn't find (and what to confirm before edits)
- `server.js` is referenced in `package.json` but not present in the repository root. Confirm whether the entrypoint was removed or named differently before implementing changes.
- No existing models/routes/controllers were found; before scaffolding, check with the maintainer if any preferred naming or existing external services must be honored.

When generating code, include small unit tests or a smoke test script if possible and add entries to `package.json` scripts.

If anything here is unclear, tell me which area you want the AI to focus on (routes, models, a full server scaffold, or front-end integration) and I will iterate.

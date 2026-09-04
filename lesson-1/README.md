# Lesson 1 — Articles

A small articles site: a JSON API built with Express, and a browser UI that reads from it.

## Run it

```bash
cd server
npm install
npm start
```

Then open <http://localhost:4000>.

Use `npm run dev` instead of `npm start` while you work - it restarts the server
every time you save a file.

## What's inside

```
lesson-1/
  server/   the API (Node + Express)
  ui/       the pages the browser loads (plain HTML, CSS, JS)
```

The server also hands out the files in `ui/`, so the pages and the API live at the
same address. API live at `/api/articles`.

## Pages

- `/` — the list of articles
- `/article.html?id=1` — one article, with its comments and a form to add one

The `?id=1` part is how the page knows which article to show.

## API

| Method | Path | Does |
| --- | --- | --- |
| `GET` | `/api/articles` | every article |
| `GET` | `/api/articles/:id` | one article |
| `GET` | `/api/articles/:id/comments` | the comments on an article |
| `POST` | `/api/articles/:id/comments` | add a comment |

## How the server is organised

Every request travels down the same path, and each layer has one job:

```
request  ->  middleware  ->  controller  ->  service  ->  data-access
```

- **`middleware/`** — runs on every request: logs it, turns `:id` into a real
  article, answers unknown routes, and converts thrown errors into JSON.
- **`controllers/`** — the HTTP layer. Reads the request, picks the status code.
- **`services/`** — business logic.
- **`data-access/`** — where the mocked data actually lives.

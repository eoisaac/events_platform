# Events Platform

## Getting Started

1. Install dependencies

```bash
bun install
```

2. Create a `.env.local` file and update the environment variables

```bash
cp .env.example .env.local
```

3. Start the development server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Supabase

### Update Supabase DB types

```bash
npx supabase gen types typescript --project-id "$PROJECT_ID" --schema public > src/@types/supabase.ts
```

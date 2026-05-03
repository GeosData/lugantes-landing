# geosdata-app-landing-template

Template Astro reusable para landing pages de apps Geosdata. Una landing por app: marketing + privacy + terms en 3 páginas, deploy a Cloudflare Pages con custom subdomain `<app>.geosdata.com`.

## Forkear para nueva app

```bash
cd I:/Github/geosdata
git clone git@github.com:GeosData/geosdata-app-landing-template.git <app>-landing
cd <app>-landing
rm -rf .git && git init
```

### 1. Editar config

**Único archivo a tocar:** `src/data/config.ts`

```typescript
export const config: AppConfig = {
  name: 'MiApp',
  tagline: '...',
  description: '...',
  longDescription: '...',
  packageId: 'com.geosdata.miapp',
  domain: 'miapp.geosdata.com',
  primaryColor: '#10b981',
  accentColor: '#34d399',
  iconLetter: 'M',
  features: [...],
  playStoreUrl: '...',
  playStoreReady: false,
  contactEmail: 'contacto@geosdata.com',
  ...
};
```

### 2. Editar wrangler.jsonc

Cambiar `name` a `<app>-landing`.

### 3. Editar astro.config.mjs

Cambiar `site` a `https://<app>.geosdata.com`.

### 4. Favicon

`public/favicon.svg` — cambiar letra y color al brand.

## Dev local

```bash
npm install
npm run dev   # http://localhost:4321
```

## Deploy Cloudflare Pages

```bash
npm run build
wrangler pages deploy dist --project-name=<app>-landing
```

Primera deploy: Cloudflare crea proyecto. Sucesivas: actualiza.

### Custom domain

1. Cloudflare Dashboard → Pages → `<app>-landing` → Custom domains
2. Add `<app>.geosdata.com`
3. DNS auto-config si geosdata.com está en mismo Cloudflare

## Estructura

```
src/
  data/
    app-config.ts    interface tipos
    config.ts        ÚNICO archivo a editar al fork
  layouts/Base.astro  HTML base + tema
  components/
    Header.astro
    Hero.astro
    Features.astro
    Download.astro
    Footer.astro
  pages/
    index.astro      landing
    privacy.astro    política privacidad
    terms.astro      términos uso
public/
  favicon.svg        editar al fork
```

## Reglas

- **NO modificar layout/components** salvo features generalizables. Si necesitas custom UI, hazlo en fork sin upstream-merge.
- **Privacy y Terms son boilerplate** legales. Solo editar si la app tiene caso especial (ej. captura datos PII, payments, etc.).
- **Stack invariante:** Astro + Wrangler. NO agregar React/Vue/etc.
- **Deploy free** — Cloudflare Pages tier gratis hasta 500 builds/mo.

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ---------------------------------------------------------------------------
// Despliegue en GitHub Pages
//
// Ajusta estas dos constantes (o define las variables de entorno equivalentes
// en el workflow) segun como se llame el repositorio:
//
//   Repo "usuario.github.io"  ->  SITE = 'https://usuario.github.io', BASE = '/'
//   Repo "cv"                 ->  SITE = 'https://usuario.github.io', BASE = '/cv'
// ---------------------------------------------------------------------------
const SITE = process.env.SITE_URL ?? 'https://ruslan-dominguez.github.io';
const BASE = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    routing: {
      // Cada idioma tiene su propia URL indexable: /es/, /en/, /fr/
      prefixDefaultLocale: true,
      // La raiz la resuelve src/pages/index.astro (detecta el idioma del navegador)
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

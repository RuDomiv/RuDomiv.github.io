import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { LOCALES, type Locale } from './content';

/**
 * Comprueba, en tiempo de compilacion, si el PDF del CV existe en /public.
 *
 * El boton de descarga se muestra solo si el archivo esta: publicar un enlace
 * que devuelve 404 en un CV es peor que no ofrecerlo. En cuanto se deje el
 * archivo en su sitio, el boton vuelve solo, sin cambiar nada de codigo.
 *
 * Se ejecuta unicamente en el servidor (frontmatter de Astro), nunca en el
 * navegador, por lo que `node:fs` aqui es seguro.
 */
export function cvIsAvailable(file: string): boolean {
  return existsSync(join(process.cwd(), 'public', file));
}

/** Une un path con el `base` configurado (necesario para GitHub Pages en subcarpeta). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}

/** URL absoluta-relativa de la home de un idioma: /es/, /en/, /fr/ */
export function localePath(lang: Locale): string {
  return withBase(`${lang}/`);
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Codigo hreflang completo para las alternates del <head>. */
export const HREFLANG: Record<Locale, string> = {
  es: 'es',
  en: 'en',
  fr: 'fr',
};

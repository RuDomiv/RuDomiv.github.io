# CV en línea — Ruslán Domínguez Ivanova

Sitio de una sola página, trilingüe (ES / EN / FR), construido con **Astro +
Tailwind CSS**, con **Lenis** para el scroll suave y **GSAP + ScrollTrigger**
para las animaciones.

El contenido base está en [brief-cv-web.md](brief-cv-web.md). La dirección
visual del sitio ya **no** es la de la sección 4 de ese documento: se sustituyó
por un minimalismo tipo apple.com, casi monocromático, con tipografía del
sistema y capítulos de mucho aire.

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre <http://localhost:4321>. La raíz detecta el idioma del navegador y redirige
a `/es/`, `/en/` o `/fr/`.

| Comando           | Qué hace                              |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Servidor de desarrollo en el 4321     |
| `npm run build`   | Genera el sitio estático en `dist/`   |
| `npm run preview` | Sirve `dist/` para revisarlo en local |

## Archivos de `public/`

El sitio los toma automáticamente, sin configuración. Los dos ya están puestos:

1. **`foto.jpg`**, el retrato. Se muestra a color, sin filtros, dentro de un
   contenedor vertical de proporción 4:5 con `object-fit: cover`. La foto actual
   es apaisada (1280 × 960), así que el recorte centrado descarta fondo lateral y
   conserva el encuadre de la cara. Si la reemplazas por otra, ten en cuenta ese
   recorte: lo que quede lejos del centro horizontal se pierde.
2. **`cv-ruslan-dominguez.pdf`**, el CV descargable, destino del botón «Descargar
   CV». Hoy es el Europass en francés. **Mantén ese nombre de archivo** al
   reemplazarlo, o actualiza `CV_FILES` en `src/i18n/content.ts`. Evita espacios
   en el nombre: acaban como `%20` en una URL pública.

`foto-placeholder.svg` es la imagen de reserva por si `foto.jpg` fallara al
cargar. No hace falta tocarla.

## Editar el contenido

Todo el texto de los tres idiomas vive en un único archivo:
[`src/i18n/content.ts`](src/i18n/content.ts). No hay texto suelto en los
componentes, así que cualquier cambio de redacción se hace ahí.

Dos convenciones de redacción que conviene mantener:

- Registro profesional, sin fórmulas de autopromoción.
- Sin guiones ni rayas como separador. Solo comas, dos puntos y punto. Los
  rangos de fecha se escriben «2026 a 2027», nunca «2026 ‑ 2027».

Datos que **no** deben entrar al sitio (ver brief, sección 6): fecha de
nacimiento, dirección, teléfono, número de cédula o identificadores oficiales,
y nombres propios de terceros.

## Cómo funciona el movimiento

Todo vive en [`src/scripts/motion.ts`](src/scripts/motion.ts). Dos librerías:
**Lenis** para el scroll suave con inercia y **GSAP + ScrollTrigger** para los
revelados.

Lenis y GSAP comparten un único reloj (`gsap.ticker` alimenta `lenis.raf`). Es
el punto que suele hacerse mal: con dos bucles de animación independientes los
disparadores van medio fotograma por detrás de la posición real, y ese desfase
se nota. Los anclajes internos también pasan por `lenis.scrollTo`.

Para animar un elemento basta con marcarlo en el HTML:

| Atributo             | Efecto                                                     |
| -------------------- | ---------------------------------------------------------- |
| `data-hero`          | Entra en cascada al cargar la página                       |
| `data-reveal`        | Fade up al entrar en el viewport, una sola vez             |
| `data-stagger`       | Igual, pero escalonando los hijos directos del contenedor  |
| `data-milestone`     | Hito de la trayectoria: revela y enciende su punto         |

El estado oculto inicial se declara en CSS, no en JavaScript, para que no haya
parpadeo entre el pintado del HTML y la ejecución del script. Como
contrapartida, un temporizador en el `<head>` muestra todo el contenido si el
módulo no llega a inicializarse, de modo que un fallo de JS nunca deja la
página en blanco.

La línea de la trayectoria se dibuja con `scrub` ligado al scroll en lugar de
fijar la sección con `pin`. Se evaluó el pinning: secuestra el scroll durante
varios cientos de píxeles y rompe la inercia de Lenis justo donde más se nota.
El dibujado progresivo da la misma lectura de avance sin detener la página.

Todo se desactiva por completo con `prefers-reduced-motion`.

## Estructura

```
src/
  i18n/content.ts        Todo el contenido ES/EN/FR + constantes (email, foto, PDF)
  i18n/utils.ts          Helpers de rutas por idioma y `base`
  layouts/Base.astro     <head>, SEO, JSON-LD, barra, pie, arranque del motion
  components/            Un componente por sección
  scripts/motion.ts      Lenis + GSAP: scroll suave, revelados y timeline
  pages/[lang]/index.astro   Genera /es/, /en/ y /fr/
  pages/index.astro      Raíz: detecta idioma y redirige
  styles/global.css      Tokens de color y tipografía, y estilos propios
public/                  Archivos servidos tal cual (foto, PDF, robots.txt)
```

## Despliegue en GitHub Pages

`.github/workflows/deploy.yml` construye y publica en cada push a `main`.

1. Crea el repositorio en GitHub y sube el proyecto:

```bash
git init && git add -A && git commit -m "Sitio CV" && git branch -M main
```

2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push a `main`. El workflow calcula solo la URL y el `base`:
   - repo `usuario.github.io` → `https://usuario.github.io/`
   - repo `cv` → `https://usuario.github.io/cv/`

Para trabajar en local con un `base` distinto de `/`, define las variables antes
de compilar: `BASE_PATH=/cv SITE_URL=https://usuario.github.io npm run build`.
Los valores por defecto están en [astro.config.mjs](astro.config.mjs). Cambia
ahí `SITE` si usas un dominio propio.

## Pendientes

- LinkedIn / GitHub: por ahora el contacto es solo correo. Añadirlos es tocar
  `Contact.astro` y el `jsonLd` de `Base.astro`.
- Enlaces o fotografías por proyecto: la sección ya existe, pero cada entrada
  admitiría un enlace a repositorio o una imagen del montaje.
- PDF de una página con la identidad visual del sitio, en lugar del Europass
  en francés que se sirve hoy.

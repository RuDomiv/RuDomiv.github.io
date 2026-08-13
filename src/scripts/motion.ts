import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

declare global {
  interface Window {
    __motionFailsafe?: number;
  }
}

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;

// El modulo llego a ejecutarse: se cancela la red de seguridad declarada en el
// <head>, que de otro modo mostraria todo el contenido sin animar.
if (window.__motionFailsafe !== undefined) {
  clearTimeout(window.__motionFailsafe);
  delete window.__motionFailsafe;
}
root.classList.add('gsap-ready');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Curva de salida por defecto. Larga y sin rebote: la desaceleracion es lo que
// produce la sensacion de peso, no la duracion.
const EASE = 'expo.out';

// -----------------------------------------------------------------------------
// Barra de navegacion
//
// Va fuera de la condicion de movimiento reducido a proposito. No es decoracion:
// el fondo claro es lo que mantiene legible el texto oscuro de la barra cuando
// pasa por encima de los capitulos negros. Sin el, el rotulo desaparece.
// ScrollTrigger funciona igual sin Lenis, sobre el scroll nativo.
// -----------------------------------------------------------------------------
const nav = document.getElementById('site-nav');
if (nav) {
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      nav.dataset.stuck = self.scroll() > 12 ? 'true' : 'false';
    },
  });
}

if (!prefersReducedMotion) {
  // -------------------------------------------------------------------------
  // Scroll suave con inercia
  // -------------------------------------------------------------------------
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.8,
  });

  // Lenis y GSAP deben compartir un unico reloj. Con dos bucles de animacion
  // independientes, los disparadores de scroll van medio fotograma por detras
  // de la posicion real y el desfase se nota.
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Los anclajes internos tambien deben pasar por Lenis, o el salto seria seco.
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.3 });
    });
  });

  // -------------------------------------------------------------------------
  // Entrada del hero, al cargar
  // -------------------------------------------------------------------------
  const heroItems = gsap.utils.toArray<HTMLElement>('[data-hero]');
  if (heroItems.length) {
    gsap.to(heroItems, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: EASE,
      stagger: 0.08,
      delay: 0.15,
    });
  }

  // -------------------------------------------------------------------------
  // Revelado al entrar en el viewport
  // -------------------------------------------------------------------------
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: EASE,
      scrollTrigger: { trigger: element, start: 'top 88%', once: true },
    });
  });

  // Grupos con escalonado entre hermanos.
  gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) => {
    gsap.to(Array.from(group.children), {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: EASE,
      stagger: 0.07,
      scrollTrigger: { trigger: group, start: 'top 85%', once: true },
    });
  });

  // -------------------------------------------------------------------------
  // Trayectoria laboral
  //
  // La linea vertical se dibuja con `scrub`, ligada a la posicion de scroll,
  // en lugar de fijar la seccion con `pin`. Se evalúo el pinning: obliga a
  // reservar la altura de la seccion y secuestra el scroll durante varios
  // cientos de pixeles, lo que rompe la inercia de Lenis justo donde mas se
  // nota. El dibujado progresivo da la misma lectura de avance sin detener la
  // pagina, y los hitos siguen revelandose uno a uno.
  // -------------------------------------------------------------------------
  const timeline = document.querySelector<HTMLElement>('[data-timeline]');

  if (timeline) {
    const progress = timeline.querySelector<HTMLElement>('[data-timeline-progress]');

    if (progress) {
      gsap.to(progress, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: timeline,
          start: 'top 62%',
          end: 'bottom 78%',
          scrub: 0.6,
        },
      });
    }

    gsap.utils.toArray<HTMLElement>('[data-milestone]').forEach((item, index) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 1.15,
        ease: EASE,
        delay: index === 0 ? 0 : 0.05,
        scrollTrigger: { trigger: item, start: 'top 84%', once: true },
      });

      // El punto se rellena cuando la linea dibujada lo alcanza.
      ScrollTrigger.create({
        trigger: item,
        start: 'top 64%',
        onEnter: () => (item.dataset.passed = 'true'),
        onLeaveBack: () => (item.dataset.passed = 'false'),
      });
    });
  }

  // Las fuentes y las imagenes cambian la altura del documento despues del
  // primer calculo, asi que hay que recalcular las posiciones de disparo.
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh());

  // Solo en desarrollo: permite inspeccionar el estado del scroll desde la
  // consola. Vite elimina este bloque por completo en la compilacion.
  if (import.meta.env.DEV) {
    (window as unknown as Record<string, unknown>).__motion = { gsap, ScrollTrigger, lenis };
  }
}

export {};

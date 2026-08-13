/**
 * Contenido del sitio en los tres idiomas.
 *
 * Versiones alineadas en contenido y tono entre los tres idiomas.
 *
 * Convenciones de redaccion:
 *  - Registro profesional, sin formulas de autopromocion.
 *  - Sin guiones ni rayas como separador. Solo comas, dos puntos y punto.
 *    Los rangos de fecha se escriben "2026 a 2027", nunca "2026 - 2027".
 *
 * Privacidad: aqui no entran fecha de nacimiento, direccion, telefono,
 * documentos de identidad ni nombres propios de terceros. Ver brief, seccion 6.
 */

export const LOCALES = ['es', 'en', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_NAMES: Record<Locale, string> = {
  es: 'Espanol',
  en: 'English',
  fr: 'Francais',
};

export interface Job {
  role: string;
  period: string;
  detail: string;
}

export interface Org {
  name: string;
  city: string;
  jobs: Job[];
}

export interface Content {
  meta: { title: string; description: string };
  nav: {
    download: string;
    langLabel: string;
    skipToContent: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    lead: string;
    facts: { k: string; v: string }[];
    scrollCue: string;
    photoAlt: string;
  };
  highlight: {
    eyebrow: string;
    badge: string;
    school: string;
    city: string;
    rows: { k: string; v: string }[];
  };
  /** Deliberadamente breve: foco tecnico, herramientas y objetivo. Nada mas. */
  about: { eyebrow: string; title: string; text: string };
  experience: {
    eyebrow: string;
    title: string;
    lead: string;
    orgs: Org[];
  };
  /** Proyectos academicos y de laboratorio. Titulo corto y una sola frase. */
  projects: {
    eyebrow: string;
    title: string;
    lead: string;
    /** Rotulos del boton que despliega el resto de la lista. */
    showAll: string;
    showLess: string;
    items: { title: string; text: string }[];
  };
  education: {
    eyebrow: string;
    title: string;
    items: { title: string; org: string; period: string; detail?: string }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: { label: string; items: string[] }[];
  };
  /** Cada punto es un hecho verificable en una linea, no un relato. */
  soft: {
    eyebrow: string;
    title: string;
    items: { label: string; text: string }[];
  };
  languages: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { name: string; level: string; note: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    emailLabel: string;
    locationLabel: string;
    location: string;
    cta: string;
    ctaNote: string;
  };
  footer: { updated: string };
}

export const EMAIL = 'ru-dominguez@javeriana.edu.co';

/**
 * Retrato. Deja `foto.jpg` en /public y aparece automaticamente;
 * mientras no exista, el sitio cae en el marcador de posicion.
 */
export const PHOTO = 'foto.jpg';
export const PHOTO_FALLBACK = 'foto-placeholder.svg';

export interface ProjectMedia {
  /** Rutas dentro de /public. Recomendado: public/proyectos/nombre.jpg */
  images?: { src: string; alt?: string }[];
  links?: { label: string; url: string }[];
}

/**
 * Fotos y enlaces de cada proyecto.
 *
 * Van aparte del contenido traducido y se comparten entre los tres idiomas,
 * porque una URL o una foto no cambian con el idioma y repetirlas tres veces
 * seria una fuente segura de divergencias.
 *
 * La clave es la posicion del proyecto dentro de `projects.items`, empezando
 * en 0. Todo es opcional: un proyecto sin entrada aqui se ve exactamente igual
 * que si nunca se hubiera anadido esta funcion.
 *
 * Para anadir medios al primer proyecto:
 *
 *   export const PROJECT_MEDIA: Record<number, ProjectMedia> = {
 *     0: {
 *       images: [{ src: 'proyectos/lvdt.jpg', alt: 'Montaje del transductor' }],
 *       links: [{ label: 'Repositorio', url: 'https://github.com/RuDomiv/lvdt' }],
 *     },
 *   };
 *
 * Si se omite `alt`, se usa el titulo del proyecto en el idioma de la pagina.
 */
export const PROJECT_MEDIA: Record<number, ProjectMedia> = {};

/** Ruta del PDF dentro de /public. Cambiala si renombras el archivo. */
export const CV_FILES: Record<Locale, string> = {
  es: 'cv-ruslan-dominguez.pdf',
  en: 'cv-ruslan-dominguez.pdf',
  fr: 'cv-ruslan-dominguez.pdf',
};

// ---------------------------------------------------------------------------
// ESPANOL
// ---------------------------------------------------------------------------

const es: Content = {
  meta: {
    title: 'Ruslán Domínguez Ivanova, Ingeniería Electrónica',
    description:
      'Ingeniero electrónico de la Pontificia Universidad Javeriana. Admitido en doble titulación en el INP-ENSEEIHT de Toulouse para 2026 a 2027.',
  },
  nav: {
    download: 'Descargar CV',
    langLabel: 'Idioma',
    skipToContent: 'Ir al contenido',
    menu: 'Navegación principal',
  },
  hero: {
    eyebrow: 'Pontificia Universidad Javeriana, Bogotá',
    name: 'Ruslán Domínguez Ivanova',
    lead: 'Ingeniero electrónico, orientado al diseño de circuitos analógicos y sistemas embebidos. Admitido en doble titulación en el INP-ENSEEIHT de Toulouse para el año académico 2026 a 2027.',
    facts: [
      { k: 'Especialidad', v: 'Electrónica analógica y microelectrónica' },
      { k: 'Formación', v: 'Ingeniería Electrónica' },
      { k: 'Próximo destino', v: 'INP-ENSEEIHT, Toulouse' },
      { k: 'Idiomas', v: 'Español, inglés, francés y ruso' },
    ],
    scrollCue: 'Continuar',
    photoAlt: 'Retrato de Ruslán Domínguez Ivanova',
  },
  highlight: {
    eyebrow: 'Estudio actual',
    badge: 'Admisión confirmada',
    school: 'INP-ENSEEIHT',
    city: 'Toulouse, Francia',
    rows: [
      { k: 'Programa', v: 'Doble titulación, segundo año' },
      { k: 'Departamento', v: 'Electrónica, Energía Eléctrica y Automática' },
      { k: 'Itinerario', v: 'INSYS' },
      { k: 'Periodo', v: '2026 a 2027' },
      { k: 'Inicio', v: '7 de septiembre de 2026' },
    ],
  },
  about: {
    eyebrow: 'Perfil',
    title: 'Sobre mí',
    text: 'Mi trabajo se concentra en electrónica analógica, microelectrónica y telecomunicaciones. Diseño y analizo circuitos con MATLAB, Quartus II y MPLAB IDE, y programo en Python y en C. Mi objetivo es especializarme en integración de sistemas en el INP-ENSEEIHT.',
  },
  experience: {
    eyebrow: 'Trayectoria',
    title: 'Experiencia',
    lead: 'Tres asignaturas como asistente de docencia, la formación técnica del personal de una empresa externa e inductor voluntario en la Pontificia Universidad Javeriana, en simultáneo con mi propia carrera.',
    orgs: [
      {
        name: 'Pontificia Universidad Javeriana',
        city: 'Bogotá, Colombia',
        jobs: [
          {
            role: 'Asistente de docencia',
            period: 'Desde enero de 2025',
            detail:
              'Acompaño simultáneamente tres cursos: Electrónica analógica y aplicaciones, Análisis de sistemas dinámicos, y Diseño de sistemas con procesadores. Dirijo talleres, resuelvo consultas y participo en la evaluación continua.',
          },
          {
            role: 'Asistente administrativo',
            period: 'Junio de 2024',
            detail: 'Gestioné las inscripciones y la logística de la Escuela de Verano.',
          },
          {
            role: 'Coordinador del programa de inducción',
            period: 'Septiembre de 2023 a agosto de 2025',
            detail:
              'Ingresé como voluntario y asumí después la coordinación del grupo. Dirigí el comité de Clausura, encargado de planificar el cierre de la primera semana de los estudiantes nuevos.',
          },
        ],
      },
      {
        name: 'Centor & Cía S.A.S.',
        city: 'Colombia',
        jobs: [
          {
            role: 'Formador de personal',
            period: 'Desde diciembre de 2024',
            detail:
              'Formación externa en electrónica analógica y digital, aplicada al diagnóstico de fallas en circuitos de producción.',
          },
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Trabajo técnico',
    title: 'Proyectos',
    lead: 'Selección de proyectos académicos y de laboratorio en electrónica analógica, sistemas embebidos y procesamiento de señales.',
    showAll: 'Ver todos los proyectos',
    showLess: 'Ver menos',
    items: [
      {
        title: 'Sistema de acondicionamiento de señal mixta para transductores LVDT',
        text: 'Diseñé e implementé un sistema de instrumentación y acondicionamiento de señal mixta para transductores inductivos de variación lineal (LVDT), orientado a la caracterización y detección de microdesplazamientos y microfisuras en estructuras de concreto.',
      },
      {
        title: 'Plataforma educativa de hardware embebido y lógica digital',
        text: 'Diseñé y fabriqué una tarjeta de circuito impreso pedagógica basada en un microcontrolador ATmega en configuración Arduino Standalone, con registros de desplazamiento integrados. Desarrollé además las guías prácticas para la enseñanza de lógica digital, programación en C, arquitectura de máquinas de estados finitos (FSM) y control de periféricos.',
      },
      {
        title: 'Adquisición y acondicionamiento de biopotenciales, EOG y sEMG',
        text: 'Desarrollé la etapa analógica y digital de un sistema de instrumentación bioelectrónica con electrodos de superficie, integrando amplificación de instrumentación, filtrado activo de bajo ruido y conversión analógico digital para el procesamiento de señales electrooculográficas (EOG) y electromiográficas (sEMG).',
      },
      {
        title: 'Sistema de digitalización e instrumentación de temperatura de precisión',
        text: 'Diseñé e implementé la etapa de acondicionamiento analógico, filtrado de ruido y digitalización para sensores de temperatura, optimizando la precisión de la conversión lineal en circuitos de señal mixta.',
      },
      {
        title: 'Algoritmo DSP de detección de patrones por autocorrelación',
        text: 'Implementé algoritmos de procesamiento digital de señales basados en filtros de autocorrelación en tiempo discreto, para el reconocimiento de patrones, la extracción de características y la supresión de ruido en señales complejas.',
      },
      {
        title: 'Diseño de lógica digital y controladores de video en FPGA',
        text: 'Diseñé la arquitectura de hardware digital en VHDL para la renderización de gráficos en tiempo real, la gestión de controladores de entrada y salida y la temporización de sincronismo de video (VGA), implementada sobre tarjetas FPGA.',
      },
      {
        title: 'Sistema embebido e IoT para control de acceso',
        text: 'Desarrollé e implementé un prototipo embebido de casillero inteligente con conectividad IoT, integrando el control de actuadores electromecánicos de tipo solenoide, protocolos de comunicación inalámbrica y monitoreo de estado en tiempo real.',
      },
      {
        title: 'Display gráfico rotativo por persistencia de visión',
        text: 'Diseñé e implementé un sistema embebido de despliegue visual basado en el fenómeno de persistencia de visión (POV), sincronizando la conmutación de matrices LED mediante un sensor de posición angular y control de temporización con un microcontrolador AVR programado con Arduino.',
      },
      {
        title: 'Sistema mecatrónico automatizado de juego de bolos',
        text: 'Integré un sistema mecatrónico a escala compuesto por sensores de presencia, actuadores y lógica de control para la automatización del conteo de puntuación.',
      },
    ],
  },
  education: {
    eyebrow: 'Estudios',
    title: 'Formación',
    items: [
      {
        title: 'Ingeniería Electrónica',
        org: 'Pontificia Universidad Javeriana, Bogotá',
        period: 'Desde 2023',
        detail: 'Séptimo semestre en curso',
      },
      {
        title: 'Bachillerato',
        org: 'Colegio Refous, Cota, Cundinamarca',
        period: '2008 a 2022',
      },
      {
        title: 'Fundamentos de Programación y Tecnologías Digitales',
        org: 'MinTIC Colombia y Universidad Tecnológica de Pereira',
        period: '2022',
        detail: '320 horas',
      },
    ],
  },
  skills: {
    eyebrow: 'Herramientas',
    title: 'Competencias técnicas',
    groups: [
      {
        label: 'Diseño y análisis',
        items: [
          'Circuitos analógicos',
          'Microelectrónica',
          'Telecomunicaciones',
          'Sistemas dinámicos',
          'Diseño de sistemas con procesadores',
        ],
      },
      { label: 'Software y herramientas', items: ['MATLAB', 'Quartus II', 'MPLAB IDE'] },
      { label: 'Programación', items: ['Python', 'C'] },
    ],
  },
  soft: {
    eyebrow: 'Método',
    title: 'Cómo trabajo',
    items: [
      {
        label: 'Liderazgo',
        text: 'Coordinador del programa de inducción por un semestre, y dos años como voluntario.',
      },
      {
        label: 'Vocación docente',
        text: 'Asistente de docencia en tres asignaturas.',
      },
      {
        label: 'Disciplina',
        text: 'Cinco semestres organizados para cumplir los requisitos de la doble titulación.',
      },
      {
        label: 'Adaptabilidad',
        text: 'Cuatro idiomas y dos culturas.',
      },
      {
        label: 'Vocación de comunidad',
        text: 'Fomento activamente la inclusión, el respeto y la convivencia armónica en el campus.',
      },
    ],
  },
  languages: {
    eyebrow: 'Cuatro idiomas',
    title: 'Idiomas',
    lead: 'Dos lenguas de nivel nativo o equivalente, una tercera de nivel avanzado y una cuarta de uso familiar. Niveles según el Marco Común Europeo de Referencia.',
    items: [
      { name: 'Español', level: 'Nativo', note: 'Lengua materna' },
      { name: 'Inglés', level: 'C2', note: 'Uso académico y técnico' },
      { name: 'Francés', level: 'B2 / C1', note: 'Competencia profesional' },
      { name: 'Ruso', level: 'B1 / B2', note: 'Lengua familiar' },
    ],
  },
  contact: {
    eyebrow: 'Siguiente paso',
    title: 'Contacto',
    lead: 'Quedo atento a propuestas de prácticas, colaboración académica o cualquier conversación sobre electrónica.',
    emailLabel: 'Correo',
    locationLabel: 'Ubicación',
    location: 'Bogotá, Colombia',
    cta: 'Descargar CV',
    ctaNote: 'Documento en PDF, versión Europass completa',
  },
  footer: {
    updated: 'Actualizado en 2026',
  },
};

// ---------------------------------------------------------------------------
// ENGLISH
// ---------------------------------------------------------------------------

const en: Content = {
  meta: {
    title: 'Ruslán Domínguez Ivanova, Electronic Engineering',
    description:
      'Electronic Engineer from Pontificia Universidad Javeriana. Admitted to the double degree programme at INP-ENSEEIHT in Toulouse for 2026 to 2027.',
  },
  nav: {
    download: 'Download CV',
    langLabel: 'Language',
    skipToContent: 'Skip to content',
    menu: 'Main navigation',
  },
  hero: {
    eyebrow: 'Pontificia Universidad Javeriana, Bogotá',
    name: 'Ruslán Domínguez Ivanova',
    lead: 'Electronic Engineer, focused on analog circuit design and embedded systems. Admitted to the double degree programme at INP-ENSEEIHT in Toulouse for the 2026 to 2027 academic year.',
    facts: [
      { k: 'Specialty', v: 'Analog electronics and microelectronics' },
      { k: 'Education', v: 'Electronic Engineering' },
      { k: 'Next destination', v: 'INP-ENSEEIHT, Toulouse' },
      { k: 'Languages', v: 'Spanish, English, French and Russian' },
    ],
    scrollCue: 'Continue',
    photoAlt: 'Portrait of Ruslán Domínguez Ivanova',
  },
  highlight: {
    eyebrow: 'Current study',
    badge: 'Admission confirmed',
    school: 'INP-ENSEEIHT',
    city: 'Toulouse, France',
    rows: [
      { k: 'Programme', v: 'Double degree, second year' },
      { k: 'Department', v: 'Electronics, Electrical Energy and Automation' },
      { k: 'Track', v: 'INSYS' },
      { k: 'Period', v: '2026 to 2027' },
      { k: 'Start', v: '7 September 2026' },
    ],
  },
  about: {
    eyebrow: 'Profile',
    title: 'About me',
    text: 'My work focuses on analog electronics, microelectronics, and telecommunications. I design and analyse circuits using MATLAB, Quartus II, and MPLAB IDE, and program in Python and C. My goal is to specialise in systems integration at INP-ENSEEIHT.',
  },
  experience: {
    eyebrow: 'Track record',
    title: 'Experience',
    lead: 'Three courses as a teaching assistant, technical training for external company staff, and volunteer mentor at Pontificia Universidad Javeriana, alongside my own degree.',
    orgs: [
      {
        name: 'Pontificia Universidad Javeriana',
        city: 'Bogotá, Colombia',
        jobs: [
          {
            role: 'Teaching assistant',
            period: 'Since January 2025',
            detail:
              'I simultaneously support three courses: Analog Electronics and Applications, Dynamic Systems Analysis, and Processor-Based System Design. I lead workshops, resolve inquiries, and participate in continuous assessment.',
          },
          {
            role: 'Administrative assistant',
            period: 'June 2024',
            detail: 'I managed enrollment and logistics for the Summer School.',
          },
          {
            role: 'Coordinator of the induction programme',
            period: 'September 2023 to August 2025',
            detail:
              'I joined as a volunteer and later assumed the coordination of the group. I led the Closing Committee, responsible for planning the end of the new students first week.',
          },
        ],
      },
      {
        name: 'Centor & Cía S.A.S.',
        city: 'Colombia',
        jobs: [
          {
            role: 'Staff trainer',
            period: 'Since December 2024',
            detail:
              'External training in analog and digital electronics, applied to fault diagnosis in production circuits.',
          },
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Technical work',
    title: 'Projects',
    lead: 'Selection of academic and laboratory projects in analog electronics, embedded systems, and signal processing.',
    showAll: 'View all projects',
    showLess: 'View less',
    items: [
      {
        title: 'Mixed-signal conditioning system for LVDT transducers',
        text: 'I designed and implemented an instrumentation and mixed-signal conditioning system for linear variable differential transformers (LVDT), aimed at characterising and detecting micro-displacements and micro-cracks in concrete structures.',
      },
      {
        title: 'Educational platform for embedded hardware and digital logic',
        text: 'I designed and manufactured an educational printed circuit board based on an ATmega microcontroller in Arduino Standalone configuration, with integrated shift registers. I also developed practical guides for teaching digital logic, C programming, finite state machine (FSM) architecture, and peripheral control.',
      },
      {
        title: 'Acquisition and conditioning of biopotentials, EOG and sEMG',
        text: 'I developed the analog and digital stages of a bioelectronic instrumentation system with surface electrodes, integrating instrumentation amplification, active low-noise filtering, and analog-to-digital conversion for processing electrooculographic (EOG) and electromyographic (sEMG) signals.',
      },
      {
        title: 'Precision temperature instrumentation and digitisation system',
        text: 'I designed and implemented the analog conditioning, noise filtering, and digitisation stages for temperature sensors, optimizing linear conversion accuracy in mixed-signal circuits.',
      },
      {
        title: 'DSP pattern detection algorithm via autocorrelation',
        text: 'I implemented digital signal processing algorithms based on discrete-time autocorrelation filters for pattern recognition, feature extraction, and noise suppression in complex signals.',
      },
      {
        title: 'Digital logic design and video controllers on FPGA',
        text: 'I designed the digital hardware architecture in VHDL for real-time graphics rendering, input/output controller management, and video synchronization timing (VGA), implemented on FPGA boards.',
      },
      {
        title: 'Embedded IoT system for access control',
        text: 'I developed and implemented an embedded smart locker prototype with IoT connectivity, integrating solenoid electromechanical actuator control, wireless communication protocols, and real-time status monitoring.',
      },
      {
        title: 'Rotating graphic display using persistence of vision',
        text: 'I designed and implemented an embedded visual display system based on the persistence of vision (POV) phenomenon, synchronising LED matrix switching via an angular position sensor and timing control with an AVR microcontroller programmed in Arduino.',
      },
      {
        title: 'Automated mechatronic bowling system',
        text: 'I integrated a scale mechatronic system comprising presence sensors, actuators, and control logic to automate score counting.',
      },
    ],
  },
  education: {
    eyebrow: 'Studies',
    title: 'Education',
    items: [
      {
        title: 'Electronic Engineering',
        org: 'Pontificia Universidad Javeriana, Bogotá',
        period: 'Since 2023',
        detail: 'Seventh semester in progress',
      },
      {
        title: 'High School Diploma',
        org: 'Colegio Refous, Cota, Cundinamarca',
        period: '2008 to 2022',
      },
      {
        title: 'Fundamentals of Programming and Digital Technologies',
        org: 'MinTIC Colombia and Universidad Tecnológica de Pereira',
        period: '2022',
        detail: '320 hours',
      },
    ],
  },
  skills: {
    eyebrow: 'Toolkit',
    title: 'Technical skills',
    groups: [
      {
        label: 'Design and analysis',
        items: [
          'Analog circuits',
          'Microelectronics',
          'Telecommunications',
          'Dynamic systems',
          'Processor-based system design',
        ],
      },
      { label: 'Software and tools', items: ['MATLAB', 'Quartus II', 'MPLAB IDE'] },
      { label: 'Programming', items: ['Python', 'C'] },
    ],
  },
  soft: {
    eyebrow: 'Approach',
    title: 'How I work',
    items: [
      {
        label: 'Leadership',
        text: 'Induction programme coordinator for one semester, and two years as a volunteer.',
      },
      {
        label: 'Teaching vocation',
        text: 'Teaching assistant in three courses.',
      },
      {
        label: 'Discipline',
        text: 'Five semesters organised to fulfill double degree requirements.',
      },
      {
        label: 'Adaptability',
        text: 'Four languages and two cultures.',
      },
      {
        label: 'Community commitment',
        text: 'I actively promote inclusion, respect, and harmonious coexistence on campus.',
      },
    ],
  },
  languages: {
    eyebrow: 'Four languages',
    title: 'Languages',
    lead: 'Two languages at native or equivalent level, a third at advanced level, and a fourth in family use. Levels according to the Common European Framework of Reference.',
    items: [
      { name: 'Spanish', level: 'Native', note: 'Mother tongue' },
      { name: 'English', level: 'C2', note: 'Academic and technical use' },
      { name: 'French', level: 'B2 / C1', note: 'Professional competence' },
      { name: 'Russian', level: 'B1 / B2', note: 'Family language' },
    ],
  },
  contact: {
    eyebrow: 'Next step',
    title: 'Contact',
    lead: 'I am open to internship proposals, academic collaboration, or any discussion regarding electronics.',
    emailLabel: 'Email',
    locationLabel: 'Location',
    location: 'Bogotá, Colombia',
    cta: 'Download CV',
    ctaNote: 'PDF document, full Europass version',
  },
  footer: {
    updated: 'Updated in 2026',
  },
};

// ---------------------------------------------------------------------------
// FRANCAIS
// ---------------------------------------------------------------------------

const fr: Content = {
  meta: {
    title: 'Ruslán Domínguez Ivanova, Génie Électronique',
    description:
      'Ingénieur électronique de la Pontificia Universidad Javeriana. Admis en double diplôme à l’INP-ENSEEIHT de Toulouse pour 2026 à 2027.',
  },
  nav: {
    download: 'Télécharger le CV',
    langLabel: 'Langue',
    skipToContent: 'Aller au contenu',
    menu: 'Navigation principale',
  },
  hero: {
    eyebrow: 'Pontificia Universidad Javeriana, Bogotá',
    name: 'Ruslán Domínguez Ivanova',
    lead: 'Ingénieur électronique, orienté vers la conception de circuits analogiques et de systèmes embarqués. Admis en double diplôme à l’INP-ENSEEIHT de Toulouse pour l’année universitaire 2026 à 2027.',
    facts: [
      { k: 'Spécialité', v: 'Électronique analogique et microélectronique' },
      { k: 'Formation', v: 'Génie Électronique' },
      { k: 'Prochaine étape', v: 'INP-ENSEEIHT, Toulouse' },
      { k: 'Langues', v: 'Espagnol, anglais, français et russe' },
    ],
    scrollCue: 'Continuer',
    photoAlt: 'Portrait de Ruslán Domínguez Ivanova',
  },
  highlight: {
    eyebrow: 'Étude actuelle',
    badge: 'Admission confirmée',
    school: 'INP-ENSEEIHT',
    city: 'Toulouse, France',
    rows: [
      { k: 'Programme', v: 'Double diplôme, deuxième année' },
      { k: 'Département', v: 'Électronique, Énergie Électrique et Automatique' },
      { k: 'Parcours', v: 'INSYS' },
      { k: 'Période', v: '2026 à 2027' },
      { k: 'Rentrée', v: '7 septembre 2026' },
    ],
  },
  about: {
    eyebrow: 'Profil',
    title: 'À propos de moi',
    text: 'Mon travail se concentre sur l’électronique analogique, la microélectronique et les télécommunications. Je conçois et j’analyse des circuits avec MATLAB, Quartus II et MPLAB IDE, et je programme en Python et en C. Mon objectif est de me spécialiser en intégration de systèmes à l’INP-ENSEEIHT.',
  },
  experience: {
    eyebrow: 'Parcours',
    title: 'Expérience',
    lead: 'Trois matières comme assistant d’enseignement, la formation technique du personnel d’une entreprise externe et accompagnateur bénévole à la Pontificia Universidad Javeriana, en parallèle de mes propres études.',
    orgs: [
      {
        name: 'Pontificia Universidad Javeriana',
        city: 'Bogotá, Colombie',
        jobs: [
          {
            role: 'Assistant d’enseignement',
            period: 'Depuis janvier 2025',
            detail:
              'J’accompagne simultanément trois cours : Électronique analogique et applications, Analyse des systèmes dynamiques, et Conception de systèmes à processeurs. J’encadre des ateliers, réponds aux questions et participe à l’évaluation continue.',
          },
          {
            role: 'Assistant administratif',
            period: 'Juin 2024',
            detail: 'J’ai géré les inscriptions et la logistique de l’École d’été.',
          },
          {
            role: 'Coordinateur du programme d’intégration',
            period: 'Septembre 2023 à août 2025',
            detail:
              'Entré comme bénévole, j’ai ensuite assuré la coordination du groupe. J’ai dirigé le comité de clôture, chargé de planifier la fin de la première semaine des nouveaux étudiants.',
          },
        ],
      },
      {
        name: 'Centor & Cía S.A.S.',
        city: 'Colombie',
        jobs: [
          {
            role: 'Formateur du personnel',
            period: 'Depuis décembre 2024',
            detail:
              'Formation externe en électronique analogique et numérique, appliquée au diagnostic de pannes sur circuits de production.',
          },
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Travail technique',
    title: 'Projets',
    lead: 'Sélection de projets académiques et de laboratoire en électronique analogique, systèmes embarqués et traitement du signal.',
    showAll: 'Voir tous les projets',
    showLess: 'Voir moins',
    items: [
      {
        title: 'Système de conditionnement de signal mixte pour capteurs LVDT',
        text: 'J’ai conçu et réalisé un système d’instrumentation et de conditionnement de signal mixte pour capteurs inductifs à variation linéaire (LVDT), destiné à la caractérisation et à la détection de microdéplacements et de microfissures dans des structures en béton.',
      },
      {
        title: 'Plateforme pédagogique de matériel embarqué et de logique numérique',
        text: 'J’ai conçu et fabriqué une carte de circuit imprimé pédagogique basée sur un microcontrôleur ATmega en configuration Arduino Standalone, avec registres à décalage intégrés. J’ai également développé les guides pratiques pour l’enseignement de la logique numérique, de la programmation en C, de l’architecture des machines à états finis (FSM) et de la commande de périphériques.',
      },
      {
        title: 'Acquisition et conditionnement de biopotentiels, EOG et sEMG',
        text: 'J’ai développé l’étage analogique et numérique d’un système d’instrumentation bioélectronique avec électrodes de surface, intégrant l’amplification d’instrumentation, le filtrage actif à faible bruit et la conversion analogique-numérique pour le traitement des signaux électro-oculographiques (EOG) et électromyographiques (sEMG).',
      },
      {
        title: 'Système d’instrumentation et de numérisation de température de précision',
        text: 'J’ai conçu et réalisé les étages de conditionnement analogique, de filtrage du bruit et de numérisation pour capteurs de température, en optimisant la précision de la conversion linéaire dans des circuits à signal mixte.',
      },
      {
        title: 'Algorithme DSP de détection de motifs par autocorrélation',
        text: 'J’ai implémenté des algorithmes de traitement numérique du signal basés sur des filtres d’autocorrélation en temps discret, pour la reconnaissance de motifs, l’extraction de caractéristiques et la suppression du bruit dans des signaux complexes.',
      },
      {
        title: 'Conception de logique numérique et contrôleurs vidéo sur FPGA',
        text: 'J’ai conçu l’architecture matérielle numérique en VHDL pour le rendu graphique en temps réel, la gestion des contrôleurs d’entrée et de sortie et la temporisation de synchronisation vidéo (VGA), implémentée sur cartes FPGA.',
      },
      {
        title: 'Système embarqué et IoT pour le contrôle d’accès',
        text: 'J’ai développé et mis en œuvre un prototype embarqué de casier intelligent avec connectivité IoT, intégrant la commande d’actionneurs électromécaniques de type solénoïde, des protocoles de communication sans fil et la supervision d’état en temps réel.',
      },
      {
        title: 'Afficheur graphique rotatif par persistance rétinienne',
        text: 'J’ai conçu et réalisé un système embarqué d’affichage basé sur le phénomène de persistance rétinienne (POV), en synchronisant la commutation de matrices LED au moyen d’un capteur de position angulaire et d’une commande de temporisation avec un microcontrôleur AVR programmé sur Arduino.',
      },
      {
        title: 'Système mécatronique automatisé de jeu de quilles',
        text: 'J’ai intégré un système mécatronique à l’échelle composé de capteurs de présence, d’actionneurs et d’une logique de commande pour l’automatisation du comptage des points.',
      },
    ],
  },
  education: {
    eyebrow: 'Études',
    title: 'Formation',
    items: [
      {
        title: 'Génie Électronique',
        org: 'Pontificia Universidad Javeriana, Bogotá',
        period: 'Depuis 2023',
        detail: 'Septième semestre en cours',
      },
      {
        title: 'Baccalauréat',
        org: 'Colegio Refous, Cota, Cundinamarca',
        period: '2008 à 2022',
      },
      {
        title: 'Fondements de la Programmation et des Technologies Numériques',
        org: 'MinTIC Colombie et Universidad Tecnológica de Pereira',
        period: '2022',
        detail: '320 heures',
      },
    ],
  },
  skills: {
    eyebrow: 'Outils',
    title: 'Compétences techniques',
    groups: [
      {
        label: 'Conception et analyse',
        items: [
          'Circuits analogiques',
          'Microélectronique',
          'Télécommunications',
          'Systèmes dynamiques',
          'Conception de systèmes à processeurs',
        ],
      },
      { label: 'Logiciels et outils', items: ['MATLAB', 'Quartus II', 'MPLAB IDE'] },
      { label: 'Programmation', items: ['Python', 'C'] },
    ],
  },
  soft: {
    eyebrow: 'Méthode',
    title: 'Ma façon de travailler',
    items: [
      {
        label: 'Encadrement',
        text: 'Coordinateur du programme d’intégration pendant un semestre, et deux ans comme bénévole.',
      },
      {
        label: 'Vocation pédagogique',
        text: 'Assistant d’enseignement dans trois matières.',
      },
      {
        label: 'Rigueur',
        text: 'Cinq semestres organisés pour remplir les conditions du double diplôme.',
      },
      {
        label: 'Adaptabilité',
        text: 'Quatre langues et deux cultures.',
      },
      {
        label: 'Engagement communautaire',
        text: 'Je favorise activement l’inclusion, le respect et la cohabitation harmonieuse sur le campus.',
      },
    ],
  },
  languages: {
    eyebrow: 'Quatre langues',
    title: 'Langues',
    lead: 'Deux langues de niveau natif ou équivalent, une troisième de niveau avancé et une quatrième d’usage familial. Niveaux selon le Cadre européen commun de référence.',
    items: [
      { name: 'Espagnol', level: 'Natif', note: 'Langue maternelle' },
      { name: 'Anglais', level: 'C2', note: 'Usage académique et technique' },
      { name: 'Français', level: 'B2 / C1', note: 'Compétence professionnelle' },
      { name: 'Russe', level: 'B1 / B2', note: 'Langue familiale' },
    ],
  },
  contact: {
    eyebrow: 'Prochaine étape',
    title: 'Contact',
    lead: 'Je reste attentif à toute proposition de stage, de collaboration académique ou à toute discussion autour de l’électronique.',
    emailLabel: 'Courriel',
    locationLabel: 'Localisation',
    location: 'Bogotá, Colombie',
    cta: 'Télécharger le CV',
    ctaNote: 'Document PDF, version Europass complète',
  },
  footer: {
    updated: 'Mis à jour en 2026',
  },
};

export const CONTENT: Record<Locale, Content> = { es, en, fr };
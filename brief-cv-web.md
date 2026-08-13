# Brief de proyecto — Sitio web CV de Ruslán Domínguez Ivanova

> Documento de contexto del proyecto. Describe el sitio **tal como está construido**,
> no como se planteó al principio. La dirección de diseño de la sección 4 se
> reemplazó por completo (antes proponía una estética de "hoja de datos técnica";
> ahora es un minimalismo tipo apple.com). Los puntos marcados como `PENDIENTE`
> siguen abiertos.

## 0. Convenciones de redacción

Aplican a todo el texto del sitio, en los tres idiomas:

- Registro profesional y factual. Nada de fórmulas de autopromoción tipo
  "apasionado por la innovación" o "team player".
- **Sin guiones ni rayas como separador.** Solo comas, dos puntos y punto.
  Los rangos de fecha se escriben "2026 a 2027" o "Desde diciembre de 2025",
  nunca con guion. Los niveles de idioma se escriben "B2 / C1".
- Tampoco se usan flechas ni puntos medios como separadores.
- No se nombra a terceros. Ver sección 6.

Todo el texto vive en un único archivo, `src/i18n/content.ts`. No hay cadenas
sueltas en los componentes.

## 1. Objetivo del sitio

Sitio de una sola página que funciona como CV digital. Debe transmitir en los
primeros segundos: quién es, cuál es su especialidad (electrónica analógica y
diseño de circuitos), y que va camino a una doble titulación en Francia.
Audiencia: reclutadores técnicos, profesores y coordinadores académicos,
comunidad INP-ENSEEIHT, contactos profesionales.

No es un blog ni un portafolio extenso de proyectos. Es una tarjeta de
presentación profesional, densa en credibilidad y ligera en adornos.

## 2. Perfil (resumen ejecutivo)

- **Nombre:** Ruslán Domínguez Ivanova
- **Perfil:** Estudiante de 4º año (7º semestre) de Ingeniería Electrónica,
  Pontificia Universidad Javeriana (Bogotá). Admitido a doble titulación en
  INP-ENSEEIHT (Toulouse, Francia), año académico 2026 a 2027, Departamento de
  Electrónica, Energía Eléctrica y Automática, itinerario INSYS.
- **Especialidad:** electrónica analógica, microelectrónica, telecomunicaciones,
  diseño de circuitos. Objetivo de especialización: **integración de sistemas**.
- **Herramientas:** MATLAB, Quartus II, MPLAB IDE, Python, C.
- **Identidad:** nacido en San Petersburgo, radicado en Bogotá. Políglota, cuatro
  idiomas: español nativo, inglés C2, francés B2 / C1, ruso B1 / B2.
- **Contacto:** ru-dominguez@javeriana.edu.co, Bogotá, Colombia

## 3. Contenido del sitio

El sitio es trilingüe (ES / EN / FR), con una URL indexable por idioma. El
español es la base; inglés y francés están **adaptados en tono, no traducidos
literalmente**. El francés usa un registro algo más formal.

### 3.1 Hero

Abre con el nombre a gran escala, sin eslogan. La fórmula "De Bogotá a Toulouse"
que se probó en una versión anterior **se descartó**: sonaba poco profesional y
algo presuntuosa.

Estructura: etiqueta con la universidad, nombre como título principal, un párrafo
de posicionamiento, una tabla de cuatro datos, y el retrato.

**ES:**
> Pontificia Universidad Javeriana, Bogotá
> **Ruslán Domínguez Ivanova**
> Estudiante de séptimo semestre de Ingeniería Electrónica, orientado al diseño
> de circuitos analógicos y sistemas embebidos. Admitido en doble titulación en
> el INP-ENSEEIHT de Toulouse para el año académico 2026 a 2027.

Los cuatro datos de la tabla: Especialidad, Formación, Próximo destino, Idiomas.

### 3.2 Bloque de logro, admisión INP-ENSEEIHT

Tiene módulo propio y es la sección visualmente más marcada del sitio: es la
prueba social más fuerte del perfil.

- Institución: INP-ENSEEIHT (Toulouse, Francia)
- Programa: doble titulación, segundo año, Departamento Electrónica, Energía
  Eléctrica y Automática, itinerario INSYS
- Periodo: 2026 a 2027, inicio el 7 de septiembre de 2026
- Nota narrativa breve: conoció la oportunidad en su segundo semestre y organizó
  cinco semestres de carrera en torno a ella. Se comunica la constancia, no solo
  el resultado.

### 3.3 Sobre mí

**Deliberadamente corta, tres o cuatro líneas.** Solo foco técnico, herramientas
y objetivo de especialización. Nada más.

Las cartas de motivación **no** se convierten en biografía. Quedaron fuera del
sitio: el origen del interés por Francia, el profesor formado en el N7, y el
trasfondo familiar. Ese material pertenece a una carta de motivación, no a un CV.
Se conserva en el archivo original de las cartas por si hiciera falta.

Texto actual:

> Mi trabajo se concentra en electrónica analógica, microelectrónica y
> telecomunicaciones. Diseño y analizo circuitos con MATLAB, Quartus II y MPLAB
> IDE, y programo en Python y en C. Mi objetivo es especializarme en integración
> de sistemas en el INP-ENSEEIHT.

### 3.4 Experiencia

En formato de logro (verbo activo, qué hizo, para qué), no como descripción de
funciones. Se presenta como una línea de tiempo que se dibuja con el scroll.

**Pontificia Universidad Javeriana, Bogotá**

- *Formador de personal* (desde diciembre de 2025): forma al personal de una
  empresa en electrónica analógica y digital, con énfasis en resolución de fallas
  sobre circuitos de producción reales.
- *Asistente de docencia* (desde enero de 2025): acompaña simultáneamente tres
  cursos: Electrónica analógica y aplicaciones, Análisis de sistemas dinámicos, y
  Diseño de sistemas con procesadores.
- *Asistente administrativo* (junio de 2024): inscripciones y logística de la
  Escuela de Verano.
- *Coordinador del programa de inducción* (septiembre de 2023 a agosto de 2025):
  ingresó como voluntario y asumió después la coordinación del grupo. Dirigió el
  comité de Clausura.

**Centor & Cía S.A.S.**

- *Formador de personal* (desde diciembre de 2024): formación externa en
  electrónica analógica y digital aplicada al diagnóstico de fallas.

Nota de posicionamiento: la combinación de dar clase de tres materias, capacitar
personal de una empresa externa y coordinar un equipo de voluntarios, todo en
simultáneo con sus propios estudios, es el dato más fuerte del perfil. El diseño
lo destaca con un párrafo de entrada a la sección.

### 3.5 Proyectos

Va justo después de la experiencia, antes de la formación: agrupa la evidencia
de "lo que ha hecho" y deja después las credenciales. Es uno de los dos
capítulos sobre fondo gris.

Nueve proyectos académicos y de laboratorio. Cada uno lleva un número, un título
corto y una sola descripción. Sin etiquetas de tecnología: el peso lo lleva la
redacción.

**Se muestran los cuatro primeros** y el resto queda tras un botón que despliega
la lista. Los nueve viajan siempre en el HTML, de modo que buscadores y lectores
de pantalla los ven completos; lo que se evita es obligar a recorrerlos a quien
solo quiere hacerse una idea. Al plegar, la página devuelve el scroll al inicio
de la sección para no dejar al lector flotando.

Cada proyecto admite **fotos y enlaces opcionales**, declarados en
`PROJECT_MEDIA` (ver README). Van aparte del texto traducido porque no cambian
con el idioma. Un proyecto sin medios se ve exactamente igual que uno con ellos
quitados: no hay huecos ni marcadores de posición.

Redactados en **primera persona y en pasado** ("Diseñé e implementé"), igual que
las entradas de experiencia. El material de origen venía en tercera persona, que
es la convención de un CV en papel, pero mezclarla con el resto del sitio
resultaba incoherente. Los títulos van en mayúscula solo inicial.

1. Sistema de acondicionamiento de señal mixta para transductores LVDT
2. Plataforma educativa de hardware embebido y lógica digital
3. Adquisición y acondicionamiento de biopotenciales, EOG y sEMG
4. Sistema de digitalización e instrumentación de temperatura de precisión
5. Algoritmo DSP de detección de patrones por autocorrelación
6. Diseño de lógica digital y controladores de video en FPGA
7. Sistema embebido e IoT para control de acceso
8. Display gráfico rotativo por persistencia de visión
9. Sistema mecatrónico automatizado de juego de bolos

`PENDIENTE`: el banco de contenido anterior registraba también "circuitos de
señal mixta con microcontroladores de la familia PIC, con distintos periféricos y
protocolos", que no aparece en la selección de nueve. Queda anotado aquí por si
la omisión no fue intencional.

### 3.6 Educación

- Ingeniería Electrónica, séptimo semestre en curso, Pontificia Universidad
  Javeriana, Bogotá (desde 2023)
- Bachillerato, Colegio Refous, Cota, Cundinamarca (2008 a 2022)
- Fundamentos de Programación y Tecnologías Digitales, 320 horas, MinTIC Colombia
  y Universidad Tecnológica de Pereira (2022)

La admisión al INP-ENSEEIHT se destaca aparte, en 3.2.

### 3.7 Habilidades técnicas

Agrupadas en tres columnas, como listas tipográficas limpias:

- **Diseño y análisis:** circuitos analógicos, microelectrónica,
  telecomunicaciones, sistemas dinámicos, diseño de sistemas con procesadores
- **Software y herramientas:** MATLAB, Quartus II, MPLAB IDE
- **Programación:** Python, C

Sin barras de progreso ni porcentajes de dominio.

### 3.8 Habilidades blandas

Extraídas de las cartas de motivación, pero presentadas como **datos
evidenciados de una sola línea**, no como narrativa:

- **Liderazgo:** coordinador del programa de inducción, tras dos años como voluntario.
- **Vocación docente:** asistente de docencia en tres asignaturas simultáneas.
- **Disciplina:** cinco semestres organizados para cumplir los requisitos de la
  doble titulación.
- **Adaptabilidad:** cuatro idiomas y dos culturas, con francés desde los diez años.
- **Vida universitaria:** piano interfacultades y fútbol sala, en paralelo a lo académico.

El vocabulario de la tradición ignaciana ("magis", "Cura Personalis") que aparece
en sus cartas no se usa en el sitio.

### 3.9 Idiomas

Cuatro idiomas activos. Es una fortaleza y aparece ya en la tabla de datos del
hero, no solo en su propia sección.

| Idioma  | Nivel   | Nota                          |
| ------- | ------- | ----------------------------- |
| Español | Nativo  | Lengua materna                |
| Inglés  | C2      | Uso académico y técnico       |
| Francés | B2 / C1 | En estudio desde los diez años |
| Ruso    | B1 / B2 | Lengua familiar               |

Sin banderas y sin barras de nivel. Cada idioma es una fila tipográfica con el
nivel alineado a la derecha.

### 3.10 Contacto

Capítulo de cierre, en negro. El correo es la acción principal y se presenta a
gran escala.

- Email: ru-dominguez@javeriana.edu.co
- Ubicación: Bogotá, Colombia (solo ciudad, ver sección 6)
- Botón "Descargar CV", enlaza a `public/cv-ruslan-dominguez.pdf`, que hoy es el
  Europass en francés.
- `PENDIENTE`: ¿LinkedIn? ¿GitHub? Hoy el contacto es solo correo.

## 4. Dirección de diseño

> Esta sección reemplaza por completo la dirección anterior, que proponía una
> estética de hoja de datos técnica con paleta fría, tipografías IBM Plex y Space
> Grotesk, y una traza de señal como elemento firma. Nada de eso está en el sitio.

Idea rectora: **minimalismo premium tipo apple.com**. No debe parecer una
plantilla de CV ni la versión web de un PDF. La credibilidad la aporta el aire,
la escala tipográfica y la calidad del movimiento, no los adornos gráficos.

**Paleta**, casi monocromática:

- Blanco `#FFFFFF` como lienzo principal
- Gris de superficie `#F5F5F7` para alternar capítulos
- Negro puro `#000000` para los dos capítulos oscuros (admisión y contacto)
- Tinta `#1D1D1F`, secundario `#6E6E73`, terciario `#86868B`
- Líneas `#D2D2D7` y `#E8E8ED`
- **Un solo acento**, azul `#0066CC`, reservado a enlaces y botones de acción

**Tipografía:** pila del sistema, `-apple-system, BlinkMacSystemFont, "SF Pro
Display", "SF Pro Text"`, con **Inter** autoalojada como respaldo real en
Windows, Linux y Android. Títulos grandes con `clamp()` fluido y tracking
cerrado. Cuerpo con interlineado amplio (1.7).

**Layout:** secciones tipo capítulo, con mucho espacio en blanco vertical. Nada
de muros de texto. Barra de navegación fija que se comprime de 5rem a 3.25rem al
hacer scroll, con `backdrop-filter: blur()`, igual que la de apple.com.

**Retrato:** foto a color, sin tratamientos de duotono ni filtros. Contenedor
vertical 4:5 con esquinas redondeadas.

**Qué evitar explícitamente:**

- Fondo crema con acento terracota. Es el default genérico de IA.
- Estética de placa de circuito, chips, engranajes, iconos de bombilla.
- Retículas de plano técnico, anotaciones tipo datasheet, tipografía monoespaciada
  como recurso decorativo.
- Barras de progreso de habilidades en porcentaje.
- Banderas de países para representar idiomas.
- Más de un color de acento.

## 5. Movimiento

Es una parte central de la identidad del sitio, no un añadido. Dos librerías:

- **Lenis** para scroll suave con inercia, en reemplazo del scroll nativo.
- **GSAP + ScrollTrigger** para los revelados al entrar en el viewport: fade up
  con `translateY` leve, easing `expo.out`, y stagger sutil entre elementos de una
  misma sección. Nunca lineal ni brusco.

Ambas comparten un único reloj: `gsap.ticker` alimenta `lenis.raf`, y el evento
de scroll de Lenis dispara `ScrollTrigger.update`. Con dos bucles de animación
independientes los disparadores van medio fotograma por detrás de la posición
real, y ese desfase se percibe.

**Timeline de experiencia:** la línea vertical se dibuja con `scrub` ligado a la
posición de scroll, y cada hito se revela y enciende su punto al ser alcanzado.
Se evaluó fijar la sección con `pin` y se descartó: secuestra el scroll durante
varios cientos de píxeles y rompe la inercia de Lenis justo donde más se nota.

**Micro interacciones:** botones y enlaces responden con escala y opacidad sutil
en hover. La escala se mantiene por debajo del 3%; por encima deja de leerse como
respuesta del material y empieza a leerse como animación.

Todo el sistema se desactiva por completo con `prefers-reduced-motion`, con una
excepción deliberada: el fondo de la barra de navegación, que no es decoración
sino lo que mantiene legible su texto oscuro sobre los capítulos negros.

## 6. Privacidad, qué NO publicar

El CV Europass y las cartas incluyen datos que tienen sentido en un proceso de
admisión pero no en un sitio público:

- Fecha de nacimiento completa. No se incluye.
- Dirección de domicilio. Solo "Bogotá, Colombia".
- Teléfono directo. Solo correo.
- **Número de cédula, ID estudiantil u otro identificador oficial.** Aparecen en
  la firma de la carta al rector. No deben llegar al sitio bajo ninguna
  circunstancia.
- Detalle legal de doble nacionalidad. El trasfondo multicultural se transmite
  como fortaleza sin el dato legal.
- **No se nombra a terceros.** Ni el profesor que lo inspiró ni sus padres. En el
  sitio actual esos pasajes ya no aparecen en absoluto.

## 7. Estado del proyecto

**Resuelto:**

- Stack: Astro y Tailwind CSS, con Lenis y GSAP.
- Trilingüe ES / EN / FR, con URL propia por idioma.
- Hosting: GitHub Pages, con workflow de despliegue automático en cada push a
  `main`. El workflow calcula solo la URL y el `base` según el nombre del repo.
- Foto de perfil: subida (`public/foto.jpg`).
- CV descargable: subido (`public/cv-ruslan-dominguez.pdf`), Europass en francés.
- Dirección visual: reemplazada, ver sección 4.
- "Sobre mí": acortada a foco técnico, ver 3.3.
- Habilidades blandas: convertidas a datos de una línea, ver 3.7.

**Sigue abierto:**

1. **LinkedIn / GitHub.** ¿Hay enlaces para incluir en contacto? Añadirlos
   implica tocar `Contact.astro` y el bloque JSON-LD de `Base.astro`.
2. **Dominio propio.** Hoy sería un subdominio `github.io`.
3. **PDF con la identidad del sitio.** Hoy se sirve el Europass en francés tal
   cual. Más adelante puede rediseñarse una versión de una página que combine con
   el sitio.
4. **Material gráfico de los proyectos.** El soporte para fotos y enlaces ya
   está construido y probado (3.5), pero `PROJECT_MEDIA` está vacío: faltan las
   fotografías de los montajes y los enlaces a repositorios.

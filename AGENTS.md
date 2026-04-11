# CONECTADOS — Contexto del proyecto para agentes IA

## Qué es este proyecto

Landing page de **CONECTADOS**, una ONG española que impulsa la inclusión social a través de la inteligencia artificial. Formamos a personas en situación de vulnerabilidad en el uso de IA para mejorar su empleabilidad, autonomía y calidad de vida.

**Stack:** Next.js 14 (App Router) + React 18 + Tailwind CSS 3
**Deploy:** Vercel
**Tipografía:** Montserrat (Google Fonts, cargada en globals.css)
**Idioma:** Español de España (tuteo, sin "vos")

---

## Identidad de marca

### Colores (definidos en tailwind.config.js)
- **Violeta principal:** #7A2EB5 → `violeta-400` (marca, títulos, CTAs principales)
- **Turquesa:** #55BED9 → `turquesa-400` (acento, tecnología, optimismo)
- **Amarillo:** #F4E10D → `amarillo-400` (acento puntual, alertas positivas)
- **Oscuro:** #0F0A1A / violeta-800 (#180924) para fondos oscuros
- **Claro:** #F8F6FB para fondos claros

### Variaciones de color disponibles
Cada color tiene escalas de 50 a 800 en tailwind.config.js. Ejemplo: `violeta-50`, `violeta-100`... `violeta-800`.

### Logo
- `/public/logo-square.png` → Isotipo (círculo morado con perfil humano + circuitos turquesa)
- `/public/logo-text.png` → Imagotipo horizontal (isotipo + texto "CONECTADOS")
- En el header el nombre se escribe: CONECTA**DOS** (las dos últimas letras en color diferente)

### Tipografía
- **Montserrat** para todo (display y body)
- Pesos usados: 300, 400, 500, 600, 700, 800, 900
- Clases Tailwind: `font-display` y `font-body` (ambas mapean a Montserrat)

---

## Tono y voz

### SÍ hacer:
- Tono claro, inspirador, cercano, profesional, contemporáneo
- Tutear al usuario ("tú puedes", "tu futuro")
- Hablar de oportunidades, dignidad, comunidad, futuro
- Usar datos reales cuando sea posible (citar fuentes)
- Ser honesto sobre la etapa temprana del proyecto
- Lenguaje accesible, sin jerga técnica innecesaria

### NO hacer:
- Frases vacías tipo "conectando el futuro con tecnología y propósito"
- Lenguaje burocrático o de ONG clásica
- Inventar cifras, testimonios o historias de usuarios
- Tono de startup tecnológica fría
- Tono de academia comercial
- Usar "usted" (salvo textos legales)
- Tono partidista o político

### Posicionamiento narrativo
- La IA ya está cambiando el mundo
- Ese cambio puede ampliar desigualdades si no se democratiza
- CONECTADOS interviene creando acceso, aprendizaje y comunidad
- No es solo enseñar herramientas: es abrir oportunidades reales

---

## Estructura de archivos

```
app/
├── layout.js              # Layout raíz, metadata SEO, favicon
├── page.js                # Página principal (ensambla componentes)
├── globals.css            # Estilos globales, animaciones, variables CSS
├── aviso-legal/page.js    # Aviso legal (LSSI-CE)
├── privacidad/page.js     # Política de privacidad (RGPD/LOPDGDD)
├── cookies/page.js        # Política de cookies (AEPD)
└── terminos/page.js       # Términos y condiciones

components/
├── Header.js              # Nav sticky con logo, enlaces, menú móvil
├── Hero.js                # Hero principal + ChatBot integrado
├── PorQueExistimos.js     # Problema social + estadísticas INE
├── QueHacemos.js          # 3 pilares: formación, comunidad, oportunidades
├── AQuienNosDirigimos.js  # 4 públicos objetivo
├── ComoLoHacemos.js       # 4 pasos del proceso (fondo oscuro)
├── Impacto.js             # Visión de impacto aspiracional
├── SumaTuEnergia.js       # Triple CTA + formulario de contacto
├── Credibilidad.js        # Partners: Google, Microsoft, La Caixa, Red.es
├── Ideas.js               # Sección editorial (3 artículos)
├── Footer.js              # Footer con navegación, contacto, legal
└── CookieBanner.js        # Banner de cookies AEPD-compliant

hooks/
└── useReveal.js           # Hook para animaciones al hacer scroll
```

---

## Secciones y su contenido

### 1. Header (`components/Header.js`)
- Logo + nombre CONECTADOS a la izquierda
- Links de navegación al centro (desktop)
- Botón "Únete" turquesa a la derecha
- Menú hamburguesa en móvil
- Se vuelve blanco con blur al hacer scroll

### 2. Hero (`components/Hero.js`)
- Fondo: gradiente violeta oscuro con orbes de luz
- Título: "La IA puede cambiar vidas. Hagamos que cambie todas."
- Subtítulo descriptivo de la misión
- Dos CTAs: "Quiero participar" (turquesa) + "Conocer más" (transparente)
- **ChatBot interactivo** a la derecha (3 opciones: aprender, colaborar, saber más)
- Badge "Asociación sin fines de lucro"

### 3. Por qué existimos (`components/PorQueExistimos.js`)
- Sección ID: `#por-que`
- Explica el problema: brecha digital + IA
- 4 tarjetas con estadísticas reales:
  - 75,6% jóvenes vs 7,4% mayores usan IA (INE 2025)
  - 15M personas sin competencias digitales
  - 40% nunca ha usado IA (OCU/Euroconsumers)
  - 65% empleos se transformarán (Randstad Research)

### 4. Qué hacemos (`components/QueHacemos.js`)
- Sección ID: `#que-hacemos`
- 3 tarjetas con pilares:
  1. Formación accesible en IA
  2. Comunidades de aprendizaje
  3. Activación de oportunidades
- Cada tarjeta tiene icono, título, descripción, línea de color superior

### 5. A quién nos dirigimos (`components/AQuienNosDirigimos.js`)
- Sin ID de ancla (no tiene enlace directo en nav)
- 4 bloques: vulnerabilidad, jóvenes, entidades, colaboradores
- Cada uno con emoji, título, descripción

### 6. Cómo lo hacemos (`components/ComoLoHacemos.js`)
- Sección ID: `#como`
- Fondo oscuro (gradiente violeta)
- 4 pasos numerados: acercar → aprender → conectar → construir
- Cada paso con número, icono, título, descripción

### 7. Impacto (`components/Impacto.js`)
- Sección ID: `#impacto`
- Fondo blanco
- Badge amarillo "Impacto en construcción — primeros pasos 2025"
- 4 visiones de cambio (comunidades, autonomía, empleo, justicia)
- Cita final

### 8. Suma tu energía (`components/SumaTuEnergia.js`)
- Sección ID: `#suma`
- Triple CTA: Aprender / Colaborar / Apoyar
- Al hacer clic se abre formulario con: nombre, email, mensaje, checkbox privacidad
- Formulario simulado (sin backend)

### 9. Credibilidad (`components/Credibilidad.js`)
- Sin ID de ancla
- 4 partners: Google for Nonprofits, Microsoft Nonprofits, Fundación "la Caixa", Red.es
- IMPORTANTE: Google y Microsoft solo permiten referencia textual, no logos oficiales
- Texto: "Parte de un ecosistema de cambio"

### 10. Ideas / Pensar el futuro (`components/Ideas.js`)
- Sección ID: `#ideas`
- 3 artículos editoriales (placeholder, no enlazan a nada):
  1. "La IA no va a esperar" (reflexión)
  2. "¿Qué es la IA?" (guía práctica)
  3. "Empleos que cambian" (futuro del trabajo)

### 11. Footer (`components/Footer.js`)
- Gradiente superior violeta → turquesa
- 4 columnas: marca, navegación, contacto, legal
- Links a las 4 páginas legales
- Redes sociales: Instagram, LinkedIn, X
- CIF placeholder

### 12. Cookie Banner (`components/CookieBanner.js`)
- AEPD-compliant: 3 botones de igual peso visual (Aceptar / Rechazar / Configurar)
- Panel configurable con cookies técnicas y analíticas
- Botón flotante "🍪 Cookies" cuando el banner está cerrado
- Usa localStorage para recordar preferencia

---

## Animaciones y efectos

### Sistema de scroll reveal
- Hook `useReveal()` en `hooks/useReveal.js`
- Usa IntersectionObserver
- Clases CSS en globals.css: `.reveal`, `.reveal-left`, `.reveal-right`, `.stagger-children`

### Animaciones CSS definidas en globals.css
- `float` — movimiento suave arriba/abajo
- `fadeInUp` — aparición desde abajo
- `pulse-glow` — resplandor pulsante
- `typingDot` — indicador de escritura del chatbot

### Efectos de hover
- `.card-hover` — elevación y sombra
- `.btn-primary` — efecto ripple + elevación
- `.btn-secondary` — elevación suave
- `.gradient-text` — texto con gradiente violeta→turquesa

---

## Páginas legales

Las 4 páginas legales tienen placeholders marcados con `[PLACEHOLDER: ...]`.
Antes de publicar hay que completar:
- CIF de la asociación (formato G-XXXXXXXX)
- Dirección postal completa
- Teléfono
- Emails (hola@conectados.org, privacidad@conectados.org)
- Registro de asociaciones (nacional o autonómico, número, sección, grupo)
- Proveedor de hosting (Vercel Inc.)
- Cookies analíticas si se implementan
- Fechas de última actualización

### Marco legal aplicable
- **LSSI-CE** (Ley 34/2002) → Aviso legal
- **RGPD** (Reglamento UE 2016/679) + **LOPDGDD** (LO 3/2018) → Privacidad
- **Directrices AEPD 2024** → Cookies
- **Ley 19/2013** de Transparencia → si aplica por subvenciones públicas

---

## Datos reales usados en la web

| Dato | Fuente | Uso |
|------|--------|-----|
| 75,6% jóvenes usan IA generativa | INE 2025 (Encuesta TIC Hogares) | Sección "Por qué existimos" |
| 7,4% mayores de 65 usan IA | INE 2025 | Sección "Por qué existimos" |
| 15M sin competencias digitales | INE 2025 | Sección "Por qué existimos" |
| 40% nunca usó IA | OCU/Euroconsumers | Sección "Por qué existimos" |
| 65% empleos transformados por IA | Randstad Research | Sección "Por qué existimos" |

---

## Instrucciones para modificar

### Cambiar textos de una sección
Cada sección tiene su componente en `components/`. Los textos están directamente en el JSX, no en un archivo de contenido separado. Editar el texto inline.

### Añadir una nueva sección
1. Crear componente en `components/NuevaSección.js`
2. Importar y añadir en `app/page.js` en el orden deseado
3. Si necesita ancla de navegación, añadir link en `components/Header.js`

### Cambiar colores
Modificar `tailwind.config.js` → `theme.extend.colors`

### Cambiar tipografía
Modificar el `@import url()` en `globals.css` y las clases `fontFamily` en `tailwind.config.js`

### Añadir imágenes
Colocar en `/public/` y referenciar con `/nombre-archivo.ext`

### Conectar formulario a backend
El formulario en `SumaTuEnergia.js` tiene `handleSubmit` simulado. Reemplazar con llamada a API (Formspree, Netlify Forms, o API propia).

### Añadir Google Analytics
1. Añadir script en `app/layout.js` dentro de `<head>`
2. Actualizar `app/cookies/page.js` con nombre de cookie y duración
3. Condicionar carga al consentimiento de cookies en `CookieBanner.js`

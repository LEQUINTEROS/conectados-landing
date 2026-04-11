# CONECTADOS — Landing Page

Landing page de **CONECTADOS**, una ONG española que impulsa la inclusión social a través de la inteligencia artificial.

## Tecnologías

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- Optimizada para **Vercel**

## Despliegue en Vercel

### Opción 1: Desde GitHub

1. Sube este proyecto a un repositorio en GitHub
2. Ve a [vercel.com](https://vercel.com) e inicia sesión
3. Haz clic en **"Add New Project"**
4. Importa tu repositorio
5. Vercel detectará automáticamente que es un proyecto Next.js
6. Haz clic en **"Deploy"**

### Opción 2: Desde la línea de comandos

```bash
npm install -g vercel
cd conectados-landing
vercel
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura

```
├── app/
│   ├── layout.js          # Layout raíz con metadata SEO
│   ├── page.js            # Landing page principal
│   ├── globals.css         # Estilos globales, animaciones
│   ├── aviso-legal/        # Página de aviso legal
│   ├── privacidad/         # Política de privacidad (RGPD)
│   ├── cookies/            # Política de cookies (AEPD)
│   └── terminos/           # Términos y condiciones
├── components/
│   ├── Header.js           # Navegación sticky
│   ├── Hero.js             # Hero + chatbot interactivo
│   ├── PorQueExistimos.js  # Problema y estadísticas
│   ├── QueHacemos.js       # 3 líneas de acción
│   ├── AQuienNosDirigimos.js # Públicos objetivo
│   ├── ComoLoHacemos.js    # Proceso en 4 pasos
│   ├── Impacto.js          # Visión de impacto
│   ├── SumaTuEnergia.js    # Triple CTA + formulario
│   ├── Credibilidad.js     # Partners y confianza
│   ├── Ideas.js            # Sección editorial
│   ├── Footer.js           # Footer completo
│   └── CookieBanner.js     # Banner AEPD compliant
├── hooks/
│   └── useReveal.js        # Scroll animation hook
└── public/
    ├── logo-square.png     # Isotipo
    └── logo-text.png       # Imagotipo
```

## Placeholders

Busca `[PLACEHOLDER:` en el código para encontrar todos los datos que necesitan ser completados antes de publicar:

- CIF de la asociación
- Dirección postal
- Teléfono
- Email de contacto / privacidad
- Datos del registro de asociaciones
- Proveedor de hosting
- Cookies analíticas (si se implementan)
- Fechas de última actualización de textos legales

## Personalización

### Colores de marca
Definidos en `tailwind.config.js`:
- **Violeta**: #7A2EB5
- **Turquesa**: #55BED9
- **Amarillo**: #F4E10D

### Tipografía
**Montserrat** — cargada desde Google Fonts en `globals.css`.

## Licencia

Proyecto de CONECTADOS — Asociación sin fines de lucro.

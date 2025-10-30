# Casa del Bosque de Nubes - Sitio Web

Un sitio web para el alojamiento Casa del Bosque de Nubes en Gocta, Amazonas, Perú.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias (si aún no lo has hecho)
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

El sitio estará disponible en `http://localhost:4321`

## 📁 Estructura del Proyecto

```
casa-nubes/
├── public/
│   └── images/           # Imágenes del sitio
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── sections/     # Secciones de la página
│   ├── data/            # Datos estructurados
│   │   ├── rooms.js
│   │   └── nearbyPlaces.js
│   ├── layouts/         # Layouts de página
│   │   └── Layout.astro
│   ├── lib/             # Utilidades
│   │   └── translations.js
│   ├── pages/           # Rutas del sitio
│   │   ├── index.astro
│   │   └── habitacion/[id].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## 🌐 Páginas

- **/** - Página principal con todas las secciones
- **/habitacion/gatmalap** - Detalle habitación Gatmalap
- **/habitacion/pirka** - Detalle habitación Pirka

## 🎨 Tecnologías

- **Astro 5.14** - Framework web estático
- **React 19** - Componentes interactivos
- **Tailwind CSS 4** - Framework de estilos
- **JavaScript** - Lógica del sitio

## 📝 Personalización

### Modificar Textos

Edita `/src/lib/translations.js` para cambiar cualquier texto del sitio en español o inglés.

### Modificar Habitaciones

Edita `/src/data/rooms.js` para actualizar información de las habitaciones.

### Modificar Lugares Cercanos

Edita `/src/data/nearbyPlaces.js` para actualizar los lugares turísticos.

### Agregar Imágenes

Coloca tus imágenes en `/public/images/`. Ver `/public/images/README.md` para la lista completa.

## 🌍 Soporte Multiidioma

El sitio incluye soporte para español e inglés. Para crear páginas en inglés:

```astro
---
// src/pages/en/index.astro
const lang = 'en';
---

<Layout lang={lang}>
  <Header lang={lang} />
  <!-- componentes -->
</Layout>
```

## 📦 Comandos Disponibles

| Comando                | Acción                                      |
|:-----------------------|:--------------------------------------------|
| `npm install`          | Instala dependencias                        |
| `npm run dev`          | Inicia servidor local en `localhost:4321`   |
| `npm run build`        | Construye el sitio para producción en `./dist/` |
| `npm run preview`      | Previsualiza el build localmente            |
| `npm run astro ...`    | Ejecuta comandos de Astro CLI               |

## 🚢 Deploy

El sitio se puede desplegar fácilmente en:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- [GitHub Pages](https://pages.github.com)

## 📚 Documentación

- [Documentación Astro](https://docs.astro.build)
- [Documentación Tailwind CSS](https://tailwindcss.com/docs)
- [MIGRATION.md](./MIGRATION.md) - Detalles de la migración desde React

## 📧 Contacto

- Email: info@casanubegocta.com
- Teléfono: +51 942 242 232
- Ubicación: Camino a Gocta, Cocachimba, Amazonas, Perú

---

Hecho con ❤️ para Casa del Bosque de Nubes
# Casa-nubes

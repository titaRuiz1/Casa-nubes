# Migración de Casa del Bosque de Nubes

## ✅ Completado

Se ha migrado exitosamente el proyecto desde React/TypeScript/Emotion a **Astro + Tailwind CSS**.

### Estructura Creada

```
casa-nubes/
├── src/
│   ├── components/
│   │   ├── Header.astro           # Navegación principal
│   │   ├── Footer.astro           # Pie de página
│   │   └── sections/
│   │       ├── Hero.astro         # Sección hero
│   │       ├── About.astro        # Sobre nosotros
│   │       ├── Rooms.astro        # Habitaciones
│   │       ├── Services.astro     # Servicios
│   │       ├── NearbyPlaces.astro # Lugares cercanos
│   │       └── Contact.astro      # Contacto
│   ├── data/
│   │   ├── rooms.js               # Datos de habitaciones
│   │   └── nearbyPlaces.js        # Datos de lugares cercanos
│   ├── layouts/
│   │   └── Layout.astro           # Layout principal
│   ├── lib/
│   │   └── translations.js        # Sistema de traducciones ES/EN
│   ├── pages/
│   │   ├── index.astro            # Página principal
│   │   └── habitacion/
│   │       └── [id].astro         # Página dinámica de habitaciones
│   └── styles/
│       └── global.css             # Estilos globales
└── public/
    └── images/                    # Directorio para imágenes
```

### Características Implementadas

#### ✅ Sistema de Traducciones
- Soporte para Español e Inglés
- Función helper `getTranslation(lang)` para obtener textos
- Almacenamiento de preferencia de idioma en localStorage
- Todas las traducciones centralizadas en `/src/lib/translations.js`

#### ✅ Componentes Astro
Todos los componentes migrados a Astro con **Tailwind CSS**:
- **Header**: Navegación responsive con menú móvil
- **Footer**: Información de contacto y redes sociales
- **Hero**: Sección principal con imagen de fondo
- **About**: Información sobre la casa
- **Rooms**: Listado de habitaciones
- **Services**: Grid de servicios con íconos
- **NearbyPlaces**: Lugares turísticos cercanos
- **Contact**: Formulario de contacto e información

#### ✅ Páginas
- **/** (index): Página principal con todas las secciones
- **/habitacion/[id]**: Páginas dinámicas para cada habitación
  - `/habitacion/gatmalap`
  - `/habitacion/pirka`

#### ✅ Datos Estructurados
- Habitaciones: Descripción, características, imágenes
- Lugares cercanos: Información, distancia, dificultad
- Fácil de mantener y actualizar

### Diferencias con el Original

#### ❌ Removido (No compatible con Astro simple)
- ~~Emotion styled-components~~ → Reemplazado con **Tailwind CSS**
- ~~Framer Motion animaciones~~ → Reemplazado con **CSS animations**
- ~~React Router~~ → Reemplazado con **routing nativo de Astro**
- ~~React Slick carousel~~ → Simplificado con **grid estático**
- ~~react-scroll~~ → Reemplazado con **smooth scroll nativo**
- ~~react-intersection-observer~~ → No necesario (Astro es estático)

#### ✅ Agregado/Mejorado
- **Tailwind CSS** para estilos utilitarios
- **Mejor SEO** (Astro genera HTML estático)
- **Mejor rendimiento** (menos JavaScript)
- **Smooth scrolling** nativo del navegador
- **Rutas dinámicas** con getStaticPaths
- Diseño completamente **responsive**

### Próximos Pasos

#### 1. Agregar Imágenes
Coloca las imágenes en `/public/images/`:
- `hero-bg.jpg`
- `house-exterior.jpg`
- `room-gatmalap.jpg`
- `room-pirka.jpg`
- `gocta-waterfall.jpg`
- `karajia.jpg`
- `kuellap.jpg`
- `yumbilla.jpg`

Ver `/public/images/README.md` para más detalles.

#### 2. Probar el Sitio
```bash
cd ~/casa-nubes
npm run dev
```

Abre tu navegador en `http://localhost:4321`

#### 3. Personalizar
- Edita `/src/data/rooms.js` para actualizar información de habitaciones
- Edita `/src/data/nearbyPlaces.js` para lugares cercanos
- Edita `/src/lib/translations.js` para modificar textos
- Personaliza colores en componentes (busca clases de Tailwind)

#### 4. Agregar Funcionalidades Opcionales

##### Galería de Imágenes
Si quieres un carousel/slider, puedes:
- Usar librerías como [Swiper](https://swiperjs.com/)
- Implementar con componentes React dentro de Astro

##### Animaciones
Para animaciones más avanzadas:
- Considera [View Transitions API](https://docs.astro.build/en/guides/view-transitions/)
- O integra Framer Motion en componentes React específicos

##### Formulario de Contacto
El formulario actual es estático. Para hacerlo funcional:
- Integra con [Formspree](https://formspree.io/)
- Usa [Web3Forms](https://web3forms.com/)
- O crea un endpoint API con Astro Server Endpoints

#### 5. Deploy
```bash
npm run build
```

El sitio se puede desplegar en:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

### Código de Ejemplo

#### Cambiar idioma
El idioma se gestiona por página. Para crear versión en inglés:

```astro
<!-- src/pages/en/index.astro -->
---
import Layout from '../../layouts/Layout.astro';
// ... imports

const lang = 'en';
---

<Layout lang={lang}>
  <Header lang={lang} />
  <!-- resto de componentes -->
</Layout>
```

#### Agregar nueva habitación
Edita `/src/data/rooms.js`:

```javascript
export const rooms = {
  es: [
    // ... habitaciones existentes
    {
      id: 'nueva-habitacion',
      name: 'Nueva Habitación',
      description: 'Descripción...',
      image: '/images/nueva-habitacion.jpg',
      features: ['Feature 1', 'Feature 2'],
      capacity: '2 personas',
      price: 'Consultar'
    }
  ],
  // ... versión en inglés
}
```

### Stack Tecnológico Final

- **Astro 5.14** - Framework principal
- **React 19** - Para componentes interactivos (si se necesitan)
- **Tailwind CSS 4** - Estilos utilitarios
- **JavaScript** - Lógica y datos

### Compatibilidad

✅ Compatible con navegadores modernos
✅ Responsive (mobile, tablet, desktop)
✅ SEO optimizado
✅ Rendimiento excelente (HTML estático)
✅ Accesibilidad básica implementada

---

## Soporte

Si necesitas agregar funcionalidades específicas del proyecto original que usaban:
- **Framer Motion**: Se pueden crear componentes React `.tsx` e importarlos en Astro
- **Slick Carousel**: Similar, crear componente React
- **Intersection Observer**: Usar Web APIs directamente o componentes React

¡La migración está completa y lista para personalizar! 🎉

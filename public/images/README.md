# Guía de Imágenes para Casa del Bosque de Nubes

Este documento describe las imágenes necesarias para el sitio web y dónde colocarlas.

## Estructura de Directorios

```
public/images/
├── hero-main.jpg           # Imagen principal del Hero (sala con ventanas)
├── welcome-default.jpg     # Imagen de bienvenida (por defecto)
├── gallery/
│   ├── gallery-1.jpg       # Desayuno con vista a las montañas
│   ├── gallery-2.jpg       # Mesa con frutas y alimentos frescos
│   ├── gallery-3.jpg       # Comedor exterior con vista panorámica
│   ├── gallery-4.jpg       # Sala circular con vista al valle
│   ├── gallery-5.jpg       # Cocina de piedra y bambú
│   └── gallery-6.jpg       # Interior amplio de la casa
└── places/
    ├── gocta.jpg           # Catarata de Gocta
    ├── karajia.jpg         # Sarcófagos de Karajía
    ├── kuellap.jpg         # Fortaleza de Kuélap
    └── yumbilla.jpg        # Catarata Yumbilla
```

## Detalles de las Imágenes

### Hero Section
- **Archivo**: `hero-main.jpg`
- **Descripción**: Imagen de la sala principal con grandes ventanas mostrando la vista a las montañas
- **Dimensiones recomendadas**: 1920x1080px (ratio 16:9)
- **Ubicación en el código**: `src/components/sections/Hero.astro`

### Welcome Section
- **Archivo**: `welcome-default.jpg`
- **Descripción**: Imagen representativa de la casa para la sección de bienvenida
- **Dimensiones recomendadas**: 800x600px (ratio 4:3)
- **Ubicación en el código**: `src/components/sections/Welcome.astro`

### Gallery Section
Seis imágenes que muestran diferentes aspectos de la casa y la experiencia:

1. **gallery-1.jpg**: Desayuno con vista a las montañas
2. **gallery-2.jpg**: Mesa con frutas y alimentos frescos
3. **gallery-3.jpg**: Comedor exterior con vista panorámica
4. **gallery-4.jpg**: Sala circular con vista al valle
5. **gallery-5.jpg**: Cocina de piedra y bambú
6. **gallery-6.jpg**: Interior amplio de la casa

- **Dimensiones recomendadas**: 800x600px (ratio 4:3)
- **Ubicación en el código**: `src/components/sections/Gallery.astro`

### Nearby Places Section
Cuatro imágenes de destinos turísticos cercanos:

1. **gocta.jpg**: Catarata de Gocta
2. **karajia.jpg**: Sarcófagos de Karajía
3. **kuellap.jpg**: Fortaleza de Kuélap
4. **yumbilla.jpg**: Catarata Yumbilla

- **Dimensiones recomendadas**: 1200x800px (ratio 3:2)
- **Ubicación en el código**: `src/data/nearbyPlaces.js`

## Habitaciones (para otras páginas)
- `room-gatmalap.jpg` - Habitación Gatmalap (800x600px)
- `room-pirka.jpg` - Habitación Pirka (800x600px)

## Notas de Implementación

- El BookingWidget ha sido comentado temporalmente en la página de inicio
- Si no tienes alguna imagen específica, puedes usar una imagen por defecto con el mismo nombre
- Todas las rutas de imágenes son relativas a `/public/images/`
- Las imágenes deben estar optimizadas para web (formato JPEG con compresión adecuada)
- Considera usar WebP para mejor compresión

## Cambios Realizados

1. ✅ Actualizado Hero.astro para usar `hero-main.jpg`
2. ✅ Actualizado Welcome.astro para usar `welcome-default.jpg`
3. ✅ Actualizado Gallery.astro con 6 imágenes de galería
4. ✅ Actualizado nearbyPlaces.js con rutas a `/images/places/`
5. ✅ Comentado BookingWidget en index.astro

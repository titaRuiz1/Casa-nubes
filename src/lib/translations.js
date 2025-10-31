export const translations = {
  es: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.about': 'Nuestra Casa',
    'nav.rooms': 'Habitaciones',
    'nav.services': 'Servicios',
    'nav.gallery': 'Galería',
    'nav.nearby': 'Lugares Cercanos',
    'nav.contact': 'Contacto',

    // Hero
    'hero.title': 'Casa del Bosque de Nubes',
    'hero.subtitle': 'Un refugio único en el corazón de la naturaleza',
    'hero.description': 'Un refugio custodiado por la catarata de Gocta en medio del bosque nuboso. Despierta en esta montaña Chachapoya, tierra de aventuras y misticismo ancestrales.',
    'hero.cta': 'Descubrir',

    // About
    'about.title': 'Nuestra Casa',
    'about.subtitle': 'Un refugio inspirado en la cultura Chachapoya',
    'about.description': 'Casa del Bosque de Nubes es un alojamiento único que combina la arquitectura tradicional Chachapoya con comodidades modernas. Ubicada estratégicamente, ofrece vistas panorámicas al valle y acceso directo a las maravillas naturales de la región.',

    // Rooms
    'rooms.title': 'Nuestras Habitaciones',
    'rooms.subtitle': 'Espacios únicos con vistas espectaculares',
    'rooms.view': 'Ver Detalles',

    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Comodidades para una estadía perfecta',
    'services.wifi': 'Wi-Fi Satelital',
    'services.parking': 'Estacionamiento Privado',
    'services.fireplace': 'Área de Fogatas',
    'services.observatory': 'Observatorio Panorámico',
    'services.grill': 'Parrilla Móvil',
    'services.laundry': 'Lavadora',
    'services.coffee': 'Máquina de Café',
    'services.kitchen': 'Cocina Equipada',
    'services.garden': 'Jardín',
    'services.relaxation': 'Espacios de Relajación',

    // Gallery
    'gallery.title': 'Galería',
    'gallery.subtitle': 'Descubre la belleza de Casa Nubes Gocta a través de nuestras imágenes',

    // Nearby Places
    'nearby.title': 'Lugares Cercanos',
    'nearby.subtitle': 'Descubre las maravillas naturales y arqueológicas que rodean Casa Nubes Gocta',
    'nearby.distance': 'Distancia',
    'nearby.duration': 'Duración',
    'nearby.difficulty': 'Dificultad',
    'nearby.easy': 'Fácil',
    'nearby.moderate': 'Moderado',
    'nearby.difficult': 'Difícil',

    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Reserva tu estadía en Casa del Bosque de Nubes',
    'contact.address': 'Camino a Gocta, Cocachimba, Amazonas, Perú',
    'contact.phone': '+51 942 242 232',
    'contact.email': 'info@casanubegocta.com',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Teléfono',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',

    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.follow': 'Síguenos',

    // Common
    'common.back': 'Volver',
    'common.learn_more': 'Saber más',
    'common.view_details': 'Ver detalles'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Our House',
    'nav.rooms': 'Rooms',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.nearby': 'Nearby Places',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Cloud Forest House',
    'hero.subtitle': 'A unique refuge in the heart of nature',
    'hero.description': 'A refuge guarded by the Gocta waterfall in the middle of the cloud forest. Wake up in this Chachapoya mountain, land of adventures and ancestral mysticism.',
    'hero.cta': 'Explore',

    // About
    'about.title': 'Our House',
    'about.subtitle': 'A refuge inspired by Chachapoya culture',
    'about.description': 'Cloud Forest House is a unique accommodation that combines traditional Chachapoya architecture with modern amenities. Strategically located, it offers panoramic views of the valley and direct access to the natural wonders of the region.',

    // Rooms
    'rooms.title': 'Our Rooms',
    'rooms.subtitle': 'Unique spaces with spectacular views',
    'rooms.view': 'View Details',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Amenities for a perfect stay',
    'services.wifi': 'Satellite Wi-Fi',
    'services.parking': 'Private Parking',
    'services.fireplace': 'Fireplace Area',
    'services.observatory': 'Panoramic Observatory',
    'services.grill': 'Mobile Grill',
    'services.laundry': 'Washing Machine',
    'services.coffee': 'Coffee Machine',
    'services.kitchen': 'Equipped Kitchen',
    'services.garden': 'Garden',
    'services.relaxation': 'Relaxation Spaces',

    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Discover the beauty of Casa Nubes Gocta through our images',

    // Nearby Places
    'nearby.title': 'Nearby Places',
    'nearby.subtitle': 'Discover the natural and archaeological wonders that surround Casa Nubes Gocta',
    'nearby.distance': 'Distance',
    'nearby.duration': 'Duration',
    'nearby.difficulty': 'Difficulty',
    'nearby.easy': 'Easy',
    'nearby.moderate': 'Moderate',
    'nearby.difficult': 'Difficult',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Book your stay at Cloud Forest House',
    'contact.address': 'Camino a Gocta, Cocachimba, Amazonas, Peru',
    'contact.phone': '+51 942 242 232',
    'contact.email': 'info@casanubegocta.com',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',

    // Footer
    'footer.rights': 'All rights reserved',
    'footer.follow': 'Follow us',

    // Common
    'common.back': 'Back',
    'common.learn_more': 'Learn more',
    'common.view_details': 'View details'
  }
};

export function getTranslation(lang = 'es') {
  return (key) => {
    return translations[lang]?.[key] || key;
  };
}

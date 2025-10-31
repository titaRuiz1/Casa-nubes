import { images } from "./images";

export const nearbyPlaces = {
  es: [
    {
      id: 'gocta',
      name: 'Catarata de Gocta',
      description: 'Una de las cataratas más altas del mundo con 771 metros de altura. Un espectáculo natural impresionante rodeado de vegetación exuberante.',
      image: images.nearby.gocta,
      distance: '2.5 km',
      duration: '45 minutos',
      difficulty: 'Fácil'
    },
    {
      id: 'karajia',
      name: 'Sarcófagos de Karajía',
      description: 'Misteriosos sarcófagos de la cultura Chachapoya ubicados en un acantilado. Una experiencia arqueológica única en el mundo.',
      image: images.nearby.karajia,
      distance: '45 km',
      duration: '1.5 horas',
      difficulty: 'Moderado'
    },
    {
      id: 'kuellap',
      name: 'Fortaleza de Kuélap',
      description: 'La "Machu Picchu del Norte", una impresionante fortaleza prehispánica de la cultura Chachapoya con muros de 20 metros de altura.',
      image: images.nearby.kuellap,
      distance: '80 km',
      duration: '2 horas',
      difficulty: 'Moderado'
    },
    {
      id: 'yumbilla',
      name: 'Catarata Yumbilla',
      description: 'La cuarta catarata más alta del mundo con 896 metros. Una caminata desafiante que recompensa con vistas espectaculares.',
      image: images.nearby.yumbilla,
      distance: '35 km',
      duration: '3 horas',
      difficulty: 'Difícil'
    }
  ],
  en: [
    {
      id: 'gocta',
      name: 'Gocta Waterfall',
      description: 'One of the highest waterfalls in the world with 771 meters in height. An impressive natural spectacle surrounded by lush vegetation.',
      image: images.nearby.gocta,
      distance: '2.5 km',
      duration: '45 minutes',
      difficulty: 'Easy'
    },
    {
      id: 'karajia',
      name: 'Karajía Sarcophagi',
      description: 'Mysterious sarcophagi of the Chachapoya culture located on a cliff. A unique archaeological experience in the world.',
      image: images.nearby.karajia,
      distance: '45 km',
      duration: '1.5 hours',
      difficulty: 'Moderate'
    },
    {
      id: 'kuellap',
      name: 'Kuélap Fortress',
      description: 'The "Machu Picchu of the North", an impressive pre-Hispanic fortress of the Chachapoya culture with walls 20 meters high.',
      image: images.nearby.kuellap,
      distance: '80 km',
      duration: '2 hours',
      difficulty: 'Moderate'
    },
    {
      id: 'yumbilla',
      name: 'Yumbilla Waterfall',
      description: 'The fourth highest waterfall in the world with 896 meters. A challenging hike that rewards with spectacular views.',
      image: images.nearby.yumbilla,
      distance: '35 km',
      duration: '3 hours',
      difficulty: 'Difficult'
    }
  ]
};

export function getNearbyPlaces(lang = 'es') {
  return nearbyPlaces[lang] || nearbyPlaces.es;
}

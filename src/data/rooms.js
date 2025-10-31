export const rooms = {
  es: [
    {
      id: 'gatmalap',
      name: 'Habitación Gatmalap',
      description: 'La habitación Gatmalap mira hacia el imponente valle de las cataratas. Cuenta con cama queen, ropero, escritorio, baño propio, salida directa al jardín y vistas panorámicas.',
      image: '/images/room-gatmalap.jpg',
      features: [
        'Cama Queen',
        'Baño Privado',
        'Escritorio',
        'Ropero',
        'Vista Panorámica',
        'Acceso al Jardín'
      ],
      capacity: '2 personas',
      price: 'Consultar'
    },
    {
      id: 'pirka',
      name: 'Habitación Pirka',
      description: 'Habitación con balcón privado y vistas al valle. Decorada con textiles tradicionales y arte local.',
      image: '/images/room-pirka.jpg',
      features: [
        'Cama Queen',
        'Baño Privado',
        'Balcón Privado',
        'Vista al Valle',
        'Decoración Tradicional'
      ],
      capacity: '2 personas',
      price: 'Consultar'
    }
  ],
  en: [
    {
      id: 'gatmalap',
      name: 'Gatmalap Room',
      description: 'The Gatmalap room looks towards the imposing valley of waterfalls. It has a queen bed, wardrobe, desk, private bathroom, direct access to the garden and panoramic views.',
      image: '/images/room-gatmalap.jpg',
      features: [
        'Queen Bed',
        'Private Bathroom',
        'Desk',
        'Wardrobe',
        'Panoramic View',
        'Garden Access'
      ],
      capacity: '2 people',
      price: 'Contact us'
    },
    {
      id: 'pirka',
      name: 'Pirka Room',
      description: 'Room with private balcony and valley views. Decorated with traditional textiles and local art.',
      image: '/images/room-pirka.jpg',
      features: [
        'Queen Bed',
        'Private Bathroom',
        'Private Balcony',
        'Valley View',
        'Traditional Decoration'
      ],
      capacity: '2 people',
      price: 'Contact us'
    }
  ]
};

export function getRooms(lang = 'es') {
  return rooms[lang] || rooms.es;
}

export function getRoomById(id, lang = 'es') {
  const roomList = getRooms(lang);
  return roomList.find(room => room.id === id);
}

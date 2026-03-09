const base = import.meta.env.BASE_URL; // "/portfolio/" in prod, "/" in dev

export type ImageItem = {
  id: string;
  src: string;
  alt: string;
};

export type ImageGroup = {
  id: string;
  title: { en: string; de: string };
  description: { en: string; de: string };
  items: ImageItem[];
};

// To add new images:
// 1) Drop files in public/works/ (kebab-case filename)
// 2) Append to a group below with src + alt (en/de alt optional; use EN here)
// 3) Done – /images renders automatically
export const imageGroups: ImageGroup[] = [
  {
    id: 'gym',
    title: { en: 'Gym & Ring', de: 'Gym & Ring' },
    description: {
      en: 'Sweat, ropes, and focus inside the gym.',
      de: 'Schweiß, Seile und Fokus im Gym.',
    },
    items: [
      { id: 'boxing-gym', src: `${base}works/work-1.png`, alt: 'Boxer in a gym, dramatic light and shadow between the ropes' },
      { id: 'sitting-in-the-gym', src: `${base}works/work-2.png`, alt: 'Athlete sitting in a gym, quiet moment after training' },
      { id: 'ufc-gym-punching-bags', src: `${base}works/work-7.png`, alt: 'Row of UFC-branded punching bags in a gym under muted light' },
      { id: 'back-view-in-the-ring', src: `${base}works/work-15.png`, alt: 'Boxer seen from behind in the ring, warm light illuminating the scene' },
    ],
  },
  {
    id: 'street-night',
    title: { en: 'Street & Night', de: 'Straße & Nacht' },
    description: {
      en: 'Urban light, motion, and late city energy.',
      de: 'Städtisches Licht, Bewegung und späte Stadtenergie.',
    },
    items: [
      { id: 'man-in-the-car', src: `${base}works/work-4.jpg`, alt: 'Man photographed in a car in urban Berlin traffic' },
      { id: 'savigny-world-at-night', src: `${base}works/work-6.jpg`, alt: 'Savigny neighbourhood at night with neon lights and dark streets' },
      { id: 'motorcycles', src: `${base}works/work-9.jpeg`, alt: 'Two motorcycles parked on empty asphalt under a dramatic sky' },
      { id: 'lamborghini', src: `${base}works/work-10.jpeg`, alt: 'Neon-green Lamborghini photographed in an urban concrete setting' },
      { id: 'spati-portrait', src: `${base}works/work-13.jpeg`, alt: 'Portrait taken at a Berlin Späti at night with authentic ambient light' },
      { id: 'street-motion', src: `${base}works/work-14.jpeg`, alt: 'Motion blur street photography capturing the flow of urban life' },
    ],
  },
  {
    id: 'product-food',
    title: { en: 'Product & Food', de: 'Produkt & Food' },
    description: {
      en: 'Texture, detail, and controlled light for objects and food.',
      de: 'Textur, Details und kontrolliertes Licht für Produkte und Food.',
    },
    items: [
      { id: 'sandwich', src: `${base}works/work-8.jpg`, alt: 'Close-up food photography of a sandwich with warm tones on rustic paper' },
      { id: 'pastry-display', src: `${base}works/work-11.jpeg`, alt: 'Pastries displayed behind glass with shallow depth of field' },
      { id: 'gold-bottle', src: `${base}works/work-12.jpeg`, alt: 'Gold bottle of premium spirits with tattooed hands and rings in foreground' },
    ],
  },
];

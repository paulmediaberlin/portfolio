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
    id: 'savigny-neon-nights',
    title: {
      en: 'Neon Nights at Savignyplatz',
      de: 'Neon Nights am Savignyplatz'
    },
    description: {
      en: 'Nighttime urban documentation in front of the Späti Savigny World. Contrasts of neon light, shadows, and neighborhood street life form a raw, authentic snapshot of the Berlin night.',
      de: 'Nächtliche Urban Documentation vor dem Späti Savigny World. Kontraste aus Neonlicht, Schatten und Kiezleben formen eine rohe, authentische Momentaufnahme der Berliner Nacht.'
    },
    items: [
      { id: 'savigny-1', src: `${base}works/group-Savigny-1.jpeg`, alt: 'Neon-lit street scene at Savignyplatz outside Späti Savigny World at night' },
      { id: 'savigny-2', src: `${base}works/group-Savigny-2.jpeg`, alt: 'Night street atmosphere near Savignyplatz with neon reflections and shadows' },
      { id: 'savigny-3', src: `${base}works/group-Savigny-3.jpeg`, alt: 'Urban nightlife moment around Savignyplatz captured under neon light' },
      { id: 'savigny-4', src: `${base}works/group-Savigny-4.jpeg`, alt: 'People and street life illuminated by neon lights at Savignyplatz at night' },
      { id: 'savigny-5', src: `${base}works/group-Savigny-5.jpeg`, alt: 'Late-night urban scene outside a Späti at Savignyplatz with strong light contrast' },
      { id: 'savigny-6', src: `${base}works/group-Savigny-6.jpeg`, alt: 'Raw Berlin nightlife moment near Savignyplatz with neon glow and shadows' },
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

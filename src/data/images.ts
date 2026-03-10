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
    id: 'urban-fragments',
    title: {
      en: 'Urban Fragments',
      de: 'Urban Fragments',
    },
    description: {
      en: 'Snapshots from different scenes of urban life - from streets and encounters to details of nightlife, movement, and everyday moments. Visual fragments capturing the atmosphere and spontaneous situations of the city.',
      de: 'Momentaufnahmen aus verschiedenen Szenen des urbanen Lebens - von Straßen und Begegnungen bis zu Details aus Nachtleben, Bewegung und Alltag. Visuelle Fragmente, die Atmosphäre und spontane Situationen der Stadt einfangen.',
    },
    items: [
      { id: 'urban-1', src: `${base}works/group-urban-1.jpeg`, alt: 'Urban street scene capturing a spontaneous moment of city life' },
      { id: 'urban-2', src: `${base}works/group-urban-2.jpeg`, alt: 'Encounter in an urban environment with strong city atmosphere' },
      { id: 'urban-3', src: `${base}works/group-urban-3.jpeg`, alt: 'Detail from urban nightlife showing light, motion, and city textures' },
      { id: 'urban-4', src: `${base}works/group-urban-4.jpeg`, alt: 'Street moment reflecting everyday movement and interaction in the city' },
      { id: 'urban-5', src: `${base}works/group-urban-5.jpeg`, alt: 'Fragment of city life focusing on atmosphere and urban structure' },
      { id: 'urban-6', src: `${base}works/group-urban-6.jpeg`, alt: 'Spontaneous urban scene capturing the rhythm of the city' },
    ],
  },
  {
    id: 'ufc-gym-training',
    title: {
      en: 'UFC Gym - Training in the Shadows',
      de: 'UFC Gym - Training im Schatten',
    },
    description: {
      en: 'Documentary snapshots from a training session at the UFC Gym. Contrasts of harsh light, darkness, and movement reveal the raw atmosphere and intensity of combat sports.',
      de: 'Dokumentarische Momentaufnahmen aus einer Trainingseinheit im UFC Gym. Kontraste aus hartem Licht, Dunkelheit und Bewegung zeigen die rohe Atmosphäre und Intensität des Kampfsports.',
    },
    items: [
      { id: 'ufc-gym-1', src: `${base}works/group-ufc-gym-1.jpeg`, alt: 'Fighter training in the UFC Gym under strong contrast lighting' },
      { id: 'ufc-gym-2', src: `${base}works/group-ufc-gym-2.jpeg`, alt: 'Moment from a UFC Gym training session with shadow and motion' },
      { id: 'ufc-gym-3', src: `${base}works/group-ufc-gym-3.jpeg`, alt: 'Combat sport training captured in dramatic gym lighting' },
      { id: 'ufc-gym-4', src: `${base}works/group-ufc-gym-4.jpeg`, alt: 'Athlete movement during training inside a dimly lit UFC Gym' },
      { id: 'ufc-gym-5', src: `${base}works/group-ufc-gym-5.jpeg`, alt: 'Training intensity and shadow contrast inside the UFC Gym' },
      { id: 'ufc-gym-6', src: `${base}works/group-ufc-gym-6.jpeg`, alt: 'Raw moment from combat sports training at the UFC Gym' },
    ],
  },
  {
    id: 'culinary-atmosphere',
    title: {
      en: 'Culinary Atmosphere',
      de: 'Culinary Atmosphere',
    },
    description: {
      en: 'Visual impressions from gastronomy and bar culture. Close-up moments of food, drinks, and scenes capturing mood, craftsmanship, and atmosphere.',
      de: 'Visuelle Eindrücke aus Gastronomie und Bar-Kultur. Detailaufnahmen von Food, Drinks und Momenten, die Stimmung, Handwerk und Atmosphäre einfangen.',
    },
    items: [
      { id: 'culinary-1', src: `${base}works/group-culinary-1.jpeg`, alt: 'Close-up of a plated dish capturing texture and culinary detail' },
      { id: 'culinary-2', src: `${base}works/group-culinary-2.jpeg`, alt: 'Bar culture moment featuring drinks and ambient lighting' },
      { id: 'culinary-3', src: `${base}works/group-culinary-3.jpeg`, alt: 'Food detail highlighting ingredients and preparation' },
      { id: 'culinary-4', src: `${base}works/group-culinary-4.jpeg`, alt: 'Atmospheric scene from a restaurant or bar setting' },
      { id: 'culinary-5', src: `${base}works/group-culinary-5.jpeg`, alt: 'Drink and table composition capturing gastronomy atmosphere' },
    ],
  },
];

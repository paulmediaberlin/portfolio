const base = import.meta.env.BASE_URL; // "/portfolio/" in prod, "/" in dev

export type BTSItem = {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
};

export type BTSGroup = {
  id: string;
  title: { en: string; de: string };
  description: { en: string; de: string };
  items: BTSItem[];
};

// To add new BTS content:
// 1) Drop files into public/bts/ (kebab-case filenames). Add posters for videos.
// 2) Append a group below with title/description and item list pointing to the files.
// 3) Done – /bts will render automatically with grouped media.
export const btsGroups: BTSGroup[] = [
  {
    id: 'studio-editing',
    title: {
      en: 'Studio Editing',
      de: 'Studio-Schnitt',
    },
    description: {
      en: 'Behind the desk: cutting, grading, and sound in a dark room.',
      de: 'Am Schnittplatz: Schnitt, Grading und Sound im dunklen Studio.',
    },
    items: [
      { id: 'studio-1', type: 'video', src: `${base}bts/work-3.mp4` },
      { id: 'studio-2', type: 'video', src: `${base}bts/work-5.mp4` },
    ],
  },
  {
    id: 'gym-shoot',
    title: {
      en: 'Gym Shoot',
      de: 'Gym-Shooting',
    },
    description: {
      en: 'On set among ropes, bags, and sweat — capturing movement.',
      de: 'Am Set zwischen Seilen, Säcken und Schweiß – Bewegung einfangen.',
    },
    items: [
      { id: 'gym-1', type: 'image', src: `${base}bts/work-1.png` },
      { id: 'gym-2', type: 'image', src: `${base}bts/work-2.png` },
    ],
  },
  {
    id: 'street-night',
    title: {
      en: 'Street at Night',
      de: 'Straße bei Nacht',
    },
    description: {
      en: 'Late city light, handheld grit, and quick setups.',
      de: 'Spätes Stadtlicht, Handkamera und schnelle Setups.',
    },
    items: [
      { id: 'street-1', type: 'image', src: `${base}bts/work-8.jpg` },
      { id: 'street-2', type: 'image', src: `${base}bts/work-10.jpeg` },
    ],
  },
];

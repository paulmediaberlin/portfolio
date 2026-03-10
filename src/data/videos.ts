const base = import.meta.env.BASE_URL; // "/portfolio/" in prod, "/" in dev

export type VideoItem = {
  id: string;
  src: string;
  alt: string;
  poster?: string;
};

export type VideoGroup = {
  id: string;
  title: { en: string; de: string };
  description: { en: string; de: string };
  items: VideoItem[]; // expect one item per group
};

// To add a video:
// 1) Drop file into public/works/
// 2) Add a group below with title/description and one item pointing to the file
// 3) (Optional) add a poster for better UX
export const videoGroups: VideoGroup[] = [
  {
    id: 'neon-messages',
    title: { en: 'Messages in Neon Light', de: 'Tiefe Botschaften im Neonlicht' },
    description: {
      en: 'Excerpt from a short film with The Voice Man (Abdu) — calm, reflective bar scene.',
      de: 'Ausschnitt aus einem Kurzfilm mit The Voice Man (Abdu) – ruhige, nachdenkliche Barszene.',
    },
    items: [
      {
        id: 'neon-messages',
        src: `${base}works/timeline-1.mp4`,
        alt: 'Bar scene from a short film with neon lighting and a reflective atmosphere',
        poster: `${base}works/timeline-1-poster.jpg`,
      },
    ],
  },
  {
    id: 'strength-and-reality',
    title: { en: 'Between Strength and Reality', de: 'Zwischen Stärke und Realität' },
    description: {
      en: 'Excerpt from a YouTube video with Michael Smolik where he speaks openly about his athletic career and his experience with a tumor. Filmed as a calm, personal conversation focused on authenticity.',
      de: 'Ausschnitt aus einem YouTube-Video mit Michael Smolik, in dem er offen über seine sportliche Karriere und seine Erfahrungen mit einem Tumor spricht. Gefilmt als ruhiges, persönliches Gespräch mit Fokus auf Authentizität.',
    },
    items: [
      {
        id: 'michi',
        src: `${base}works/michi.mp4`,
        alt: 'Video of Michael Smolik speaking in a calm personal interview about his career and life experiences',
        poster: `${base}works/michi-poster.jpg`,
      },
    ],
  },
  {
    id: 'studio-editing',
    title: { en: 'Studio Editing', de: 'Studio-Schnitt' },
    description: {
      en: 'Cutting, grading, and sound shaping in the dark.',
      de: 'Schnitt, Grading und Sound im dunklen Studio.',
    },
    items: [
      {
        id: 'ex-football-player',
        src: `${base}works/work-3.mp4`,
        alt: 'Behind-the-scenes video of a production featuring an ex-football player',
      },
    ],
  },
  {
    id: 'fight-preparation',
    title: { en: 'Fight Preparation', de: 'Kampfvorbereitung' },
    description: {
      en: 'Raw footage turning into a story on screen.',
      de: 'Rohmaterial, das zur Story auf dem Screen wird.',
    },
    items: [
      {
        id: 'fight-preparation',
        src: `${base}works/work-5.mp4`,
        alt: 'Video showing fight preparation and editing process in a dark room',
      },
    ],
  }];

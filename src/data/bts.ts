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
    id: '88club-rooftop-pop-event',
    title: {
      en: '88 Club Rooftop - Pop Event | Ku’damm Berlin',
      de: '88 Club Rooftop - Pop Event | Ku’damm Berlin',
    },
    description: {
      en: 'Moment from a pop event at 88 Club Berlin on Kurfürstendamm, captured from above the dancefloor. The footage shows the setup and atmosphere of an urban rooftop event in the center of the city.',
      de: 'Momentaufnahme eines Pop Events im 88 Club Berlin am Kurfürstendamm, eingefangen aus der Perspektive über dem Dancefloor. Die Aufnahmen zeigen das Setup und die Atmosphäre eines urbanen Rooftop-Events mitten in der City.',
    },
    items: [
      { id: 'club-1', type: 'video', src: `${base}works/group-88club-1.mp4` },
    ],
  },
  {
    id: 'bikehub-shoot-olympiastadion-berlin',
    title: {
      en: 'Bikehub Shoot | Olympiastadion Berlin',
      de: 'Bikehub Shoot | Olympiastadion Berlin',
    },
    description: {
      en: 'Behind-the-scenes insights from a video shoot with Bikehub around the Olympiastadion Berlin. The footage shows moments on set during production including stunt bikes, urban locations, and the use of legal pyrotechnics for cinematic effects.',
      de: 'Behind-the-Scenes Einblicke eines Videodrehs mit Bikehub rund um das Olympiastadion Berlin. Die Aufnahmen zeigen Set-Momente während der Produktion - inklusive Stunt-Bikes, urbanen Locations und dem Einsatz von legaler Pyrotechnik für cineastische Effekte.',
    },
    items: [
      { id: 'bikehub-1', type: 'video', src: `${base}works/group-bikehub-1.mp4` },
      { id: 'bikehub-2', type: 'video', src: `${base}works/group-bikehub-2.mp4` },
      { id: 'bikehub-3', type: 'video', src: `${base}works/group-bikehub-3.mp4` },
      { id: 'bikehub-4', type: 'video', src: `${base}works/group-bikehub-4.mp4` },
    ],
  },
  {
    id: 'production-day-smolik-heidelberg',
    title: {
      en: 'Production Day with Michael Smolik | Heidelberg',
      de: 'Production Day with Michael Smolik | Heidelberg',
    },
    description: {
      en: 'Behind-the-scenes insights from a video production with Michael Smolik in Heidelberg. Moments from the set showing preparation and camera setup during the shoot.',
      de: 'Behind-the-Scenes Einblicke einer Videoproduktion mit Michael Smolik in Heidelberg. Momentaufnahmen vom Set – von Vorbereitung und Kamera-Setup.',
    },
    items: [
      { id: 'smolik-1', type: 'video', src: `${base}works/group-smolik-1.mp4` },
      { id: 'smolik-2', type: 'video', src: `${base}works/group-smolik-2.mp4` },
    ],
  },
  {
    id: 'purize-pop-up-charlottenburg',
    title: {
      en: 'Purize Pop-Up Event - Charlottenburg',
      de: 'Purize Pop-Up Event - Charlottenburg',
    },
    description: {
      en: 'Behind-the-scenes impressions from the Purize pop-up event in the heart of Charlottenburg. The footage shows moments from the event, encounters on site, and artists and creators, including Kasimir, in an urban and spontaneous atmosphere.',
      de: 'Behind-the-Scenes Eindrücke vom Purize Pop-Up Event im Herzen von Charlottenburg. Die Aufnahmen zeigen Momente des Events, Begegnungen vor Ort sowie Künstler und Creator - unter anderem Kasimir - in einer urbanen, spontanen Atmosphäre.',
    },
    items: [
      { id: 'purize-1', type: 'video', src: `${base}works/group-purize-1.mp4` },
      { id: 'purize-2', type: 'video', src: `${base}works/group-purize-2.mp4` },
    ],
  },
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

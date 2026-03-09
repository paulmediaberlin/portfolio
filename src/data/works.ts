const base = import.meta.env.BASE_URL; // "/portfolio/" in prod, "/" in dev

export type WorkText = {
  title: string;
  description: string;
  alt: string;
};

export type WorkItem = {
  id: string;
  type: "image" | "video";
  /** Path resolved against Vite base – files live in public/works/ */
  src: string;
  /** Optional poster image for videos */
  poster?: string;
  year: string;
  text: {
    en: WorkText;
    de: WorkText;
  };
};

export type MediaGroupItem = {
  id: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  alt?: string;
};

export type MediaGroup = {
  id: string;
  title: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  items: MediaGroupItem[];
};

// ─────────────────────────────────────────────────────────────────────────────
// WORKS CATALOGUE
// To add new content:
//   1. Drop the file into public/works/  (kebab-case filename)
//   2. Append an entry below with src, year, and both text locales
//   3. Done – the /images or /videos page will render it automatically
// ─────────────────────────────────────────────────────────────────────────────
export const works: WorkItem[] = [
  // ── IMAGES ─────────────────────────────────────────────────────────────────
  {
    id: "boxing-gym",
    type: "image",
    src: `${base}works/work-1.png`,
    year: "2025",
    text: {
      en: {
        title: "Boxing Gym",
        description: "Intensity in the ring. Light and shadow shape movement between the ropes.",
        alt: "Boxer in a gym, dramatic light and shadow between the ropes",
      },
      de: {
        title: "Boxing Gym",
        description: "Intensität im Ring. Licht und Schatten formen die Bewegung zwischen den Seilen.",
        alt: "Boxer in einem Gym, dramatisches Licht und Schatten zwischen den Seilen",
      },
    },
  },
  {
    id: "sitting-in-the-gym",
    type: "image",
    src: `${base}works/work-2.png`,
    year: "2025",
    text: {
      en: {
        title: "Sitting in the Gym",
        description: "Silence after the storm. Raw moments between tension and exhaustion.",
        alt: "Athlete sitting in a gym, quiet moment after training",
      },
      de: {
        title: "Sitzend im Gym",
        description: "Stille nach dem Sturm. Rohe Momente zwischen Anspannung und Erschöpfung.",
        alt: "Athlet sitzt im Gym, stiller Moment nach dem Training",
      },
    },
  },
  {
    id: "man-in-the-car",
    type: "image",
    src: `${base}works/work-4.jpg`,
    year: "2025",
    text: {
      en: {
        title: "Man in the Car",
        description: "Cinematic street photography in an urban setting. Natural light and authentic moments in Berlin traffic.",
        alt: "Man photographed in a car in urban Berlin traffic",
      },
      de: {
        title: "Mann im Auto",
        description: "Cinematic Street Photography im urbanen Kontext. Natürliches Licht und authentische Momente im Berliner Stadtverkehr.",
        alt: "Mann fotografiert in einem Auto im Berliner Stadtverkehr",
      },
    },
  },
  {
    id: "savigny-world-at-night",
    type: "image",
    src: `${base}works/work-6.jpg`,
    year: "2025",
    text: {
      en: {
        title: "Savigny World at Night",
        description: "Nocturnal urban documentation. High-contrast interplay of neon light and darkness in the neighborhood.",
        alt: "Savigny neighbourhood at night with neon lights and dark streets",
      },
      de: {
        title: "Savigny World nachts",
        description: "Nächtliche Urban Documentation. Kontrastreiches Spiel zwischen Neonlicht und Dunkelheit im Kiez.",
        alt: "Savigny-Viertel bei Nacht mit Neonlichtern und dunklen Straßen",
      },
    },
  },
  {
    id: "ufc-gym-punching-bags",
    type: "image",
    src: `${base}works/work-7.png`,
    year: "2025",
    text: {
      en: {
        title: "UFC Gym Punching Bags",
        description: "Symmetry and branding inside the UFC Gym. Red logos on black leather under muted light.",
        alt: "Row of UFC-branded punching bags in a gym under muted light",
      },
      de: {
        title: "UFC Gym Boxsäcke",
        description: "Symmetrie und Branding im UFC Gym. Rote Logos auf schwarzem Leder unter gedämpftem Licht.",
        alt: "Reihe von UFC-gebrandeten Boxsäcken in einem Gym unter gedämpftem Licht",
      },
    },
  },
  {
    id: "sandwich",
    type: "image",
    src: `${base}works/work-8.jpg`,
    year: "2025",
    text: {
      en: {
        title: "Sandwich",
        description: "Depth of field meets food details. Warm tones on rustic paper.",
        alt: "Close-up food photography of a sandwich with warm tones on rustic paper",
      },
      de: {
        title: "Sandwich",
        description: "Tiefenschärfe trifft auf Food-Details. Warme Töne auf rustikalem Papier.",
        alt: "Nahaufnahme Food-Fotografie eines Sandwichs mit warmen Tönen auf rustikalem Papier",
      },
    },
  },
  {
    id: "motorcycles",
    type: "image",
    src: `${base}works/work-9.jpeg`,
    year: "2025",
    text: {
      en: {
        title: "Motorcycles",
        description: "Silence before the start. Dramatic sky above two machines on empty asphalt.",
        alt: "Two motorcycles parked on empty asphalt under a dramatic sky",
      },
      de: {
        title: "Motorräder",
        description: "Stille vor dem Start. Dramatischer Himmel über zwei Maschinen auf leerem Asphalt.",
        alt: "Zwei Motorräder auf leerem Asphalt unter dramatischem Himmel",
      },
    },
  },
  {
    id: "lamborghini",
    type: "image",
    src: `${base}works/work-10.jpeg`,
    year: "2025",
    text: {
      en: {
        title: "Lamborghini",
        description: "Neon-green aggression in an urban environment. Chrome and concrete in contrast.",
        alt: "Neon-green Lamborghini photographed in an urban concrete setting",
      },
      de: {
        title: "Lamborghini",
        description: "Neon-grüne Aggression in urbaner Kulisse. Chrome und Beton im Kontrast.",
        alt: "Neon-grüner Lamborghini in urbaner Betonkulisse",
      },
    },
  },
  {
    id: "pastry-display",
    type: "image",
    src: `${base}works/work-11.jpeg`,
    year: "2025",
    text: {
      en: {
        title: "Pastry Display",
        description: "Sweet temptation behind glass. Depth of field plays with colors and textures.",
        alt: "Pastries displayed behind glass with shallow depth of field",
      },
      de: {
        title: "Gebäck-Auslage",
        description: "Süße Versuchung in der Vitrine. Tiefenschärfe spielt mit Farben und Texturen.",
        alt: "Gebäck hinter Glas mit flacher Tiefenschärfe",
      },
    },
  },
  {
    id: "gold-bottle",
    type: "image",
    src: `${base}works/work-12.jpeg`,
    year: "2025",
    text: {
      en: {
        title: "Gold Bottle",
        description: "Golden details in focus. Tattoos, rings, and premium spirits in harmony.",
        alt: "Gold bottle of premium spirits with tattooed hands and rings in foreground",
      },
      de: {
        title: "Gold-Flasche",
        description: "Goldene Details im Fokus. Tattoos, Ringe und Premium-Spirits im Zusammenspiel.",
        alt: "Goldflasche mit tätowierten Händen und Ringen im Vordergrund",
      },
    },
  },
  {
    id: "spati-portrait",
    type: "image",
    src: `${base}works/work-13.jpeg`,
    year: "2025",
    text: {
      en: {
        title: "Späti Portrait",
        description: "Late-night Späti moment in Berlin. Authentic light between cigarette machines and storefronts.",
        alt: "Portrait taken at a Berlin Späti at night with authentic ambient light",
      },
      de: {
        title: "Späti Portrait",
        description: "Nächtlicher Späti-Moment in Berlin. Authentisches Licht zwischen Zigarettenautomaten und Schaufenstern.",
        alt: "Portrait an einem Berliner Späti bei Nacht mit authentischem Umgebungslicht",
      },
    },
  },
  {
    id: "street-motion",
    type: "image",
    src: `${base}works/work-14.jpeg`,
    year: "2025",
    text: {
      en: {
        title: "Street Motion",
        description: "Urban life in motion. Motion blur captures the flow of the city.",
        alt: "Motion blur street photography capturing the flow of urban life",
      },
      de: {
        title: "Street-Bewegung",
        description: "Urbanes Leben in Bewegung. Motion Blur fängt den Fluss der Stadt ein.",
        alt: "Motion-Blur-Straßenfotografie die den Fluss des urbanen Lebens einfängt",
      },
    },
  },
  {
    id: "back-view-in-the-ring",
    type: "image",
    src: `${base}works/work-15.png`,
    year: "2025",
    text: {
      en: {
        title: "Back View in the Ring",
        description: "Focus before the next move. Warm light meets cool determination.",
        alt: "Boxer seen from behind in the ring, warm light illuminating the scene",
      },
      de: {
        title: "Rückenansicht im Ring",
        description: "Fokus vor dem nächsten Move. Warmes Licht trifft auf kühle Entschlossenheit.",
        alt: "Boxer von hinten im Ring, warmes Licht beleuchtet die Szene",
      },
    },
  },

  // ── VIDEOS ─────────────────────────────────────────────────────────────────
  {
    id: "ex-football-player",
    type: "video",
    src: `${base}works/work-3.mp4`,
    year: "2025",
    text: {
      en: {
        title: "Ex-Football Player",
        description: "Behind the scenes of a video production. The creative process between editing and final vision.",
        alt: "Behind-the-scenes video of a production featuring an ex-football player",
      },
      de: {
        title: "Ex-Football Player",
        description: "Behind the Scenes einer Videoproduktion. Der kreative Prozess zwischen Schnitt und finaler Vision.",
        alt: "Behind-the-Scenes-Video einer Produktion mit einem ehemaligen Footballspieler",
      },
    },
  },
  {
    id: "fight-preparation",
    type: "video",
    src: `${base}works/work-5.mp4`,
    year: "2025",
    text: {
      en: {
        title: "Fight Preparation",
        description: "Video editing in darkness. Raw footage transforms into a finished story on screen.",
        alt: "Video showing fight preparation and editing process in a dark room",
      },
      de: {
        title: "Kampfvorbereitung",
        description: "Videoschnitt in der Dunkelheit. Raw Footage wird zu fertiger Story auf dem Screen.",
        alt: "Video zur Kampfvorbereitung und Schnittarbeit in einem dunklen Raum",
      },
    },
  },
];

export const images = works.filter((w) => w.type === "image");
export const videos = works.filter((w) => w.type === "video");

const workById = Object.fromEntries(works.map((w) => [w.id, w]));

export const imageGroups: MediaGroup[] = [
  {
    id: "gym",
    title: { en: "Gym & Ring", de: "Gym & Ring" },
    description: {
      en: "Sweat, ropes, and focus inside the gym.",
      de: "Schweiß, Seile und Fokus im Gym.",
    },
    items: ["boxing-gym", "sitting-in-the-gym", "ufc-gym-punching-bags", "back-view-in-the-ring"].map((id) => {
      const w = workById[id];
      return {
        id,
        type: "image" as const,
        src: w.src,
        alt: w.text.en.alt,
      };
    }),
  },
  {
    id: "street-night",
    title: { en: "Street & Night", de: "Straße & Nacht" },
    description: {
      en: "Urban light, motion, and late city energy.",
      de: "Städtisches Licht, Bewegung und späte Stadtenergie.",
    },
    items: [
      "man-in-the-car",
      "savigny-world-at-night",
      "motorcycles",
      "lamborghini",
      "spati-portrait",
      "street-motion",
    ].map((id) => {
      const w = workById[id];
      return {
        id,
        type: "image" as const,
        src: w.src,
        alt: w.text.en.alt,
      };
    }),
  },
  {
    id: "product-food",
    title: { en: "Product & Food", de: "Produkt & Food" },
    description: {
      en: "Texture, detail, and controlled light for objects and food.",
      de: "Textur, Details und kontrolliertes Licht für Produkte und Food.",
    },
    items: ["sandwich", "pastry-display", "gold-bottle"].map((id) => {
      const w = workById[id];
      return {
        id,
        type: "image" as const,
        src: w.src,
        alt: w.text.en.alt,
      };
    }),
  },
];

export const videoGroups: MediaGroup[] = [
  {
    id: "studio-editing",
    title: { en: "Studio Editing", de: "Studio-Schnitt" },
    description: {
      en: "Cutting, grading, and sound shaping in the dark.",
      de: "Schnitt, Grading und Sound im dunklen Studio.",
    },
    items: [
      {
        id: "ex-football-player",
        type: "video",
        src: workById["ex-football-player"].src,
        alt: workById["ex-football-player"].text.en.alt,
      },
    ],
  },
  {
    id: "fight-preparation",
    title: { en: "Fight Preparation", de: "Kampfvorbereitung" },
    description: {
      en: "Raw footage turning into a story on screen.",
      de: "Rohmaterial, das zur Story auf dem Screen wird.",
    },
    items: [
      {
        id: "fight-preparation",
        type: "video",
        src: workById["fight-preparation"].src,
        alt: workById["fight-preparation"].text.en.alt,
      },
    ],
  },
];

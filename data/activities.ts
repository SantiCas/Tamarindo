export interface Activity {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  infoLink: string;   // → sitio web o Instagram del operador
  mapLink?: string;    // → Google Maps de la ubicación exacta
  contact: {
    type: "phone" | "email" | "whatsapp" | "instagram" | "web";
    value: string;
    label?: string;
  };
  location: string;
  distance: string;
  category: "aventura" | "naturaleza" | "fauna" | "panorámicas" | "gastronomía";
  tags?: string[];
}

export const ACTIVITIES: Activity[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // AVENTURA, ADRENALINA Y ACTIVIDADES INTENSAS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "atv-quads",
    title: "ATV / Quads por senderos y colinas",
    description:
      "Recorrido guiado en vehículos de cuatro ruedas por caminos de tierra, fincas rurales, cruces de ríos y puntos panorámicos elevados de la región de Guanacaste.",
    coverImage:
      "https://nativeswaycostarica.com/wp-content/uploads/2024/05/Guachipelin-Volcano-Adventure-Combo-1100x1100.jpg",
    infoLink:
      "https://nativeswaycostarica.com",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Natives+Way+ATV+Tamarindo+Costa+Rica",
    contact: {
      type: "instagram",
      value: "https://instagram.com/nativeswaycr",
      label: "@nativeswaycr · +506 2653 2265",
    },
    location: "Tamarindo, Guanacaste",
    distance: "10 min desde la casa",
    category: "aventura",
    tags: ["ATV", "quads", "adrenalina", "offroad"],
  },
  {
    id: "canopy-tirolinas",
    title: "Canopy / Tirolinas en la selva",
    description:
      "Desplazamiento por cables de acero suspendidos sobre las copas de los árboles y cañones boscosos en parques de aventura especializados.",
    coverImage:
      "https://www.skylinecanopytour.com/home/cover.webp",
    infoLink:
      "https://www.skylinecanopytour.com",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Canopy+Tour+Tamarindo+Costa+Rica",
    contact: {
      type: "instagram",
      value: "https://instagram.com/tamarindocanopy",
      label: "@tamarindocanopy",
    },
    location: "Alrededores de Tamarindo",
    distance: "20 min desde la casa",
    category: "aventura",
    tags: ["canopy", "zipline", "adrenalina", "selva"],
  },
  {
    id: "tubing-rio-negro",
    title: "Tubing por los rápidos del Río Negro",
    description:
      "Navegación fluvial individual a bordo de flotadores especiales a través de tramos de rápidos y corrientes en cañones volcánicos. Operado por Hacienda Guachipelín.",
    coverImage:
      "https://www.guachipelin.com/wp-content/uploads/sites/2085/2018/12/Rio-Negro-Tubing-Adventure-image-1.jpg",
    infoLink:
      "https://www.guachipelin.com",
    mapLink:
      "https://www.google.com/maps/place/Hacienda+Guachipel%C3%ADn/@10.7779,-85.3508,15z",
    contact: {
      type: "instagram",
      value: "https://instagram.com/haciendaguachipelin",
      label: "@haciendaguachipelin · +506 2690 2900",
    },
    location: "Hacienda Guachipelín, Rincón de la Vieja",
    distance: "1h 30min desde la casa",
    category: "aventura",
    tags: ["tubing", "rápidos", "río", "adrenalina"],
  },
  {
    id: "kayak-manglares",
    title: "Kayak por los manglares de Tamarindo",
    description:
      "Recorrido activo remando a través de esteros protegidos para observar de cerca la vegetación de manglar y la fauna local.",
    coverImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    infoLink:
      "https://nativeswaycostarica.com",
    mapLink:
      "https://www.google.com/maps/place/Estero+Tamarindo/@10.299,-85.841,14z",
    contact: {
      type: "web",
      value: "https://www.google.com/maps/search/?api=1&query=Kayak+Tamarindo+Costa+Rica",
      label: "Operadores locales en playa Tamarindo",
    },
    location: "Estero Tamarindo",
    distance: "10 min desde la casa",
    category: "aventura",
    tags: ["kayak", "manglares", "naturaleza", "remo"],
  },
  {
    id: "paddle-surf-sup",
    title: "Paddle Surf (SUP) en la desembocadura",
    description:
      "Navegación de pie sobre tabla de remo en las aguas de la ría durante las horas de marea alta.",
    coverImage:
      "https://iguanasurf.net/wp-content/uploads/2026/08/ocean-wide.webp",
    infoLink:
      "https://iguanasurf.net",
    mapLink:
      "https://www.google.com/maps/place/Playa+Tamarindo/@10.2993,-85.8449,14z",
    contact: {
      type: "web",
      value: "https://www.google.com/maps/search/?api=1&query=SUP+rental+Tamarindo",
      label: "Escuelas y alquileres en la costa de Tamarindo",
    },
    location: "Playa Tamarindo",
    distance: "5 min desde la casa",
    category: "aventura",
    tags: ["SUP", "paddle surf", "tabla", "mar"],
  },
  {
    id: "surf-tamarindo",
    title: "Surf en Playa Tamarindo",
    description:
      "Sesiones de práctica de surf en las rompientes estables de la costa local, guiadas por instructores especializados de Iguana Surf.",
    coverImage:
      "https://iguanasurf.net/wp-content/uploads/2026/08/surf-camp-v18-c88af435.jpg",
    infoLink:
      "https://iguanasurf.net",
    mapLink:
      "https://www.google.com/maps/place/Playa+Tamarindo/@10.2993,-85.8449,14z",
    contact: {
      type: "instagram",
      value: "https://instagram.com/iguanasurf",
      label: "@iguanasurf · +506 2653 0148",
    },
    location: "Playa Tamarindo",
    distance: "5 min desde la casa",
    category: "aventura",
    tags: ["surf", "olas", "playa", "deporte"],
  },
  {
    id: "buceo-islas-catalinas",
    title: "Buceo / Esnórquel en las Islas Catalinas",
    description:
      "Salida náutica hacia un archipiélago volcánico marino para la observación de fauna submarina, incluyendo rayas gigante y tiburones de arrecife.",
    coverImage:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&q=80",
    infoLink:
      "https://www.scuba-dive-costa-rica.com",
    mapLink:
      "https://www.google.com/maps/place/Islas+Catalinas/@10.5674,-85.9067,13z",
    contact: {
      type: "instagram",
      value: "https://instagram.com/rocketfrogdivers",
      label: "@rocketfrogdivers · +506 2653 0134",
    },
    location: "Islas Catalinas, Guanacaste",
    distance: "40 min en lancha desde Tamarindo",
    category: "aventura",
    tags: ["buceo", "snorkel", "rayas", "tiburones", "mar"],
  },
  {
    id: "pesca-deportiva",
    title: "Pesca deportiva en mar abierto",
    description:
      "Jornada en embarcaciones equipadas para la captura y liberación de especies pelágicas y de pico en el Pacífico norte.",
    coverImage:
      "https://marlindelrey.com/wp-content/uploads/2025/05/I7A9550.webp",
    infoLink:
      "https://instagram.com/marinaflamingocr",
    mapLink:
      "https://www.google.com/maps/place/Marina+Flamingo/@10.4339,-85.7913,15z",
    contact: {
      type: "instagram",
      value: "https://instagram.com/marinaflamingocr",
      label: "@marinaflamingocr",
    },
    location: "Marina Flamingo, Guanacaste",
    distance: "30 min desde la casa",
    category: "aventura",
    tags: ["pesca", "mar abierto", "Pacífico", "embarcación"],
  },
  {
    id: "cuatrimotos-miradores",
    title: "Cuatrimotos hacia miradores del interior",
    description:
      "Recorrido extendido en vehículos todoterreno por rutas de montaña secundarias para acceder a perspectivas elevadas del paisaje guanacasteco.",
    coverImage:
      "https://nativeswaycostarica.com/wp-content/uploads/2021/07/2021-04-24_La_Leona_@JavierMereb_178-scaled-e1625598215684.jpg",
    infoLink:
      "https://nativeswaycostarica.com",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=ATV+Mirador+Tamarindo+Guanacaste",
    contact: {
      type: "instagram",
      value: "https://instagram.com/nativeswaycr",
      label: "@nativeswaycr",
    },
    location: "Colinas de Guanacaste",
    distance: "15 min desde la casa",
    category: "aventura",
    tags: ["cuatrimotos", "miradores", "montaña", "panorámica"],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // VOLCANES, NATURALEZA PROFUNDA Y EXCURSIONES DE DÍA
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "rio-celeste-tenorio",
    title: "Volcán Tenorio y Río Celeste",
    description:
      "Desplazamiento hacia la zona norte para realizar una caminata por los senderos del volcán y observar el fenómeno de tonalidad turquesa en el río y su cascada principal.",
    coverImage:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
    infoLink:
      "https://www.sinac.go.cr",
    mapLink:
      "https://www.google.com/maps/place/Tenorio+Volcano+National+Park/@10.7,-84.9833,13z",
    contact: {
      type: "web",
      value: "https://sinac.go.cr",
      label: "SINAC – Sistema Nacional de Áreas de Conservación",
    },
    location: "Parque Nacional Volcán Tenorio, Guanacaste",
    distance: "2h 30min desde la casa",
    category: "naturaleza",
    tags: ["río celeste", "volcán", "senderismo", "cascada", "turquesa"],
  },
  {
    id: "rincon-vieja-las-pailas",
    title: "Senderismo en Rincón de la Vieja – Las Pailas",
    description:
      "Recorrido a pie por rutas volcánicas para observar manifestaciones geotérmicas activas: fumarolas, pozas de lodo hirviendo y cráteres.",
    coverImage:
      "https://nativeswaycostarica.com/wp-content/uploads/2018/08/Steam-Pot-Rincon-de-la-Vieja-National-Park-Natives-Way-Costa-Rica-Tamarindo-Tours-550x550.jpg",
    infoLink:
      "https://www.guachipelin.com",
    mapLink:
      "https://www.google.com/maps/place/Rincon+de+la+Vieja+National+Park/@10.78,-85.35,13z",
    contact: {
      type: "web",
      value: "https://sinac.go.cr",
      label: "SINAC – Parque Nacional Rincón de la Vieja",
    },
    location: "Parque Nacional Rincón de la Vieja",
    distance: "1h 30min desde la casa",
    category: "naturaleza",
    tags: ["volcán", "senderismo", "géisers", "fumarolas", "lodo"],
  },
  {
    id: "termales-rincon-vieja",
    title: "Baños termales volcánicos – Rincón de la Vieja",
    description:
      "Inmersión en complejos de piscinas naturales de aguas geotérmicas y aplicación de lodo volcánico mineral en las faldas del Rincón de la Vieja.",
    coverImage:
      "https://www.rioperdido.com/thumb/sizeW1920/uploads/2s/cms_image/001/535/060/1535060019_5b7f28334c2a6-thumb.jpg",
    infoLink:
      "https://www.rioperdido.com",
    mapLink:
      "https://www.google.com/maps/place/Hacienda+Guachipel%C3%ADn/@10.7779,-85.3508,15z",
    contact: {
      type: "instagram",
      value: "https://instagram.com/haciendaguachipelin",
      label: "@haciendaguachipelin",
    },
    location: "Hacienda Guachipelín, Rincón de la Vieja",
    distance: "1h 30min desde la casa",
    category: "naturaleza",
    tags: ["termales", "lodo volcánico", "geotérmico", "relax"],
  },
  {
    id: "cascada-llanos-cortes",
    title: "Cascada Llanos de Cortés",
    description:
      "Recorrido corto hasta una amplia caída de agua rodeada de vegetación tropical con un área habilitada para nado en poza natural.",
    coverImage:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
    infoLink:
      "https://visitcostarica.com",
    mapLink:
      "https://www.google.com/maps/place/Llanos+de+Cortez+Waterfall/@10.5261,-85.3581,15z",
    contact: {
      type: "web",
      value: "https://www.google.com/maps/search/?api=1&query=Cascada+Llanos+de+Cortes",
      label: "Sitio recreativo público – Bagaces",
    },
    location: "Bagaces, Guanacaste",
    distance: "1h 10min desde la casa",
    category: "naturaleza",
    tags: ["cascada", "poza", "nado", "naturaleza"],
  },
  {
    id: "ruta-costera-nicoya",
    title: "Ruta costera – Sámara y San Juanillo",
    description:
      "Viaje por carretera explorando pueblos costeros, calas de arena blanca y formaciones geográficas de doble media luna en la Península de Nicoya.",
    coverImage:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    infoLink:
      "https://visitcostarica.com",
    mapLink:
      "https://www.google.com/maps/place/Playa+Samara/@9.8832,-85.5279,13z",
    contact: {
      type: "web",
      value: "https://www.google.com/maps/search/?api=1&query=San+Juanillo+Nicoya+Costa+Rica",
      label: "Acceso libre por vías públicas costeras",
    },
    location: "Sámara y San Juanillo, Nicoya",
    distance: "1h 40min desde la casa",
    category: "naturaleza",
    tags: ["ruta costera", "Nicoya", "calas", "paisaje"],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // VIDA SILVESTRE, REFUGIOS Y ANIMALES
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "rescate-las-pumas",
    title: "Centro de Rescate Las Pumas",
    description:
      "Recorrido por las instalaciones de un centro enfocado en la protección, rehabilitación y resguardo de felinos silvestres y especies autóctonas de Costa Rica.",
    coverImage:
      "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800&q=80",
    infoLink:
      "https://www.laspumascr.org",
    mapLink:
      "https://www.google.com/maps/place/Centro+de+Rescate+Las+Pumas/@10.4249,-85.0927,15z",
    contact: {
      type: "instagram",
      value: "https://instagram.com/centroderescatelaspumas",
      label: "@centroderescatelaspumas · +506 2669 6039",
    },
    location: "Cañas, Guanacaste",
    distance: "1h 15min desde la casa",
    category: "fauna",
    tags: ["felinos", "pumas", "rescate animal", "jaguar"],
  },
  {
    id: "safari-tempisque",
    title: "Safari en lancha – Río Tempisque / Palo Verde",
    description:
      "Navegación fluvial por humedales protegidos con alta concentración de aves acuáticas, iguanas y poblaciones de cocodrilos de gran tamaño.",
    coverImage:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    infoLink:
      "https://nativeswaycostarica.com",
    mapLink:
      "https://www.google.com/maps/place/Palo+Verde+National+Park/@10.35,-85.35,13z",
    contact: {
      type: "web",
      value: "https://www.google.com/maps/search/?api=1&query=Bolson+embarcadero+Tempisque",
      label: "Operadores autorizados – Embarcadero de Bolsón",
    },
    location: "Parque Nacional Palo Verde, río Tempisque",
    distance: "1h 20min desde la casa",
    category: "fauna",
    tags: ["cocodrilos", "aves", "safari", "río", "humedales"],
  },
  {
    id: "tour-estuario-las-baulas",
    title: "Tour en bote – Estuario Parque Las Baulas",
    description:
      "Recorrido en embarcación por los manglares de Tamarindo para el avistamiento de aves, reptiles y monos aulladores en su entorno natural.",
    coverImage:
      "https://www.tamarindoestuary.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-23-at-6.23.31-PM-2.jpeg",
    infoLink:
      "https://www.tamarindoestuary.com",
    mapLink:
      "https://www.google.com/maps/place/Parque+Nacional+Las+Baulas/@10.3213,-85.8375,14z",
    contact: {
      type: "web",
      value: "https://sinac.go.cr",
      label: "SINAC – Parque Nacional Las Baulas",
    },
    location: "Estero Tamarindo – Parque Las Baulas",
    distance: "10 min desde la casa",
    category: "fauna",
    tags: ["manglares", "monos", "aves", "bote", "estuario"],
  },
  {
    id: "tortugas-playa-grande",
    title: "Tortugas en Playa Grande (nocturno)",
    description:
      "Recorrido guiado por personal autorizado en el Parque Nacional Las Baulas para presenciar los procesos de anidación de tortugas marinas leatherback.",
    coverImage:
      "https://cdn.zyrosite.com/cdn-ecommerce/store_01M23N35Q8T61X2TBJ4221YWFE/assets/3501e9d6-ca82-463d-8923-233469a81176.jpg",
    infoLink:
      "https://sosgrande.org",
    mapLink:
      "https://www.google.com/maps/place/Playa+Grande/@10.3281,-85.8538,14z",
    contact: {
      type: "web",
      value: "https://sinac.go.cr",
      label: "Guías oficiales acreditados del parque nacional",
    },
    location: "Playa Grande, Parque Nacional Las Baulas",
    distance: "15 min desde la casa",
    category: "fauna",
    tags: ["tortugas", "nocturno", "anidación", "playa grande"],
  },
  {
    id: "refugio-ostional",
    title: "Tortugas en Refugio Nacional de Ostional",
    description:
      "Visita a la reserva costera para observar el fenómeno biológico de las arribadas masivas de tortugas marinas en la costa pacífica.",
    coverImage:
      "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=800&q=80",
    infoLink:
      "https://www.sinac.go.cr",
    mapLink:
      "https://www.google.com/maps/place/Ostional+Wildlife+Refuge/@9.9742,-85.6893,14z",
    contact: {
      type: "web",
      value: "https://www.google.com/maps/search/?api=1&query=AGUICO+Ostional",
      label: "AGUICO – Asociación de Guías Locales de Ostional",
    },
    location: "Refugio Nacional Ostional, Nicoya",
    distance: "1h 20min desde la casa",
    category: "fauna",
    tags: ["tortugas", "arribadas masivas", "reserva", "Ostional"],
  },
  {
    id: "avistamiento-aves",
    title: "Observación de aves y fauna con guías",
    description:
      "Recorrido enfocado en la localización y registro fotográfico de especies aviares y mamíferos tropicales en reservas naturales locales.",
    coverImage:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80",
    infoLink:
      "https://nativeswaycostarica.com",
    mapLink:
      "https://www.google.com/maps/place/Tamarindo/@10.2993,-85.8449,13z",
    contact: {
      type: "web",
      value: "https://www.google.com/maps/search/?api=1&query=Guia+naturalista+Tamarindo",
      label: "Guías naturalistas locales certificados",
    },
    location: "Reservas naturales de Tamarindo",
    distance: "10 min desde la casa",
    category: "fauna",
    tags: ["aves", "fauna", "fotografía", "naturaleza", "guía"],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // VISTAS PANORÁMICAS, MARÍTIMAS Y EXPLORACIÓN COSTERA
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "catamaran-atardecer",
    title: "Catamarán con esnórquel y atardecer",
    description:
      "Navegación a vela por la costa de Guanacaste con paradas para baños en mar abierto, avistamiento de fauna marina y servicio de alimentación a bordo.",
    coverImage:
      "https://marlindelrey.com/wp-content/uploads/2025/05/Catamaran-Tours-Playa-Tamarindo-image-1.webp",
    infoLink:
      "https://marlindelrey.com",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Marlin+del+Rey+Catamaran+Tamarindo",
    contact: {
      type: "instagram",
      value: "https://instagram.com/marlindelreycatamaran",
      label: "@marlindelreycatamaran · +506 2653 2555",
    },
    location: "Costa de Guanacaste (salida desde Tamarindo)",
    distance: "10 min al embarcadero",
    category: "panorámicas",
    tags: ["catamarán", "atardecer", "snorkel", "vela", "open bar"],
  },
  {
    id: "navegacion-privada",
    title: "Navegación privada – Calas remotas",
    description:
      "Alquiler de embarcación privada para diseñar una ruta náutica extendida hacia calas aisladas con paradas para baños y exploración.",
    coverImage:
      "https://marlindelrey.com/wp-content/uploads/2025/05/ml5.webp",
    infoLink:
      "https://marlindelrey.com/private-tours/",
    mapLink:
      "https://www.google.com/maps/place/Marina+Flamingo/@10.4339,-85.7913,15z",
    contact: {
      type: "instagram",
      value: "https://instagram.com/marinaflamingocr",
      label: "Servicios de chárter náutico – Marina Flamingo",
    },
    location: "Marina Flamingo, Guanacaste",
    distance: "30 min desde la casa",
    category: "panorámicas",
    tags: ["barco privado", "calas", "chárter", "mar"],
  },
  {
    id: "miradores-atardecer",
    title: "Miradores para el atardecer",
    description:
      "Desplazamiento hacia puntos altos en las colinas de la región para observar la puesta de sol sobre el Océano Pacífico con vistas panorámicas.",
    coverImage:
      "https://marlindelrey.com/wp-content/uploads/2025/05/people-swimming-beside-a-boat.webp",
    infoLink:
      "https://instagram.com/tamarindocostarica",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Mirador+Tamarindo+atardecer",
    contact: {
      type: "web",
      value: "https://www.google.com/maps/search/?api=1&query=Mirador+colinas+Tamarindo",
      label: "Acceso público – Colinas de Tamarindo y Langosta",
    },
    location: "Colinas de Tamarindo y Langosta",
    distance: "10 min desde la casa",
    category: "panorámicas",
    tags: ["atardecer", "mirador", "vistas", "Pacífico"],
  },
  {
    id: "playa-conchal",
    title: "Día en Playa Conchal",
    description:
      "Visita a una playa de aguas transparentes y orilla compuesta por fragmentos de conchas trituradas, con opciones de esnórquel y descanso.",
    coverImage:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    infoLink:
      "https://visitcostarica.com",
    mapLink:
      "https://www.google.com/maps/place/Playa+Conchal/@10.3666,-85.7803,14z",
    contact: {
      type: "web",
      value: "https://www.google.com/maps/search/?api=1&query=Playa+Conchal+acceso+Brasilito",
      label: "Acceso público – por Puerto Viejo / Brasilito",
    },
    location: "Playa Conchal, Guanacaste",
    distance: "25 min desde la casa",
    category: "panorámicas",
    tags: ["playa", "conchas", "aguas cristalinas", "snorkel"],
  },
  {
    id: "pozos-de-marea-langosta",
    title: "Pozos de marea en Playa Langosta",
    description:
      "Caminata costera durante la marea baja para observar formaciones rocosas volcánicas y la vida marina en las piscinas naturales de la orilla.",
    coverImage:
      "https://images.unsplash.com/photo-1580019542155-247062e19ce4?w=800&q=80",
    infoLink:
      "https://visitcostarica.com",
    mapLink:
      "https://www.google.com/maps/place/Playa+Langosta/@10.277,-85.8588,14z",
    contact: {
      type: "web",
      value: "https://www.google.com/maps/search/?api=1&query=Playa+Langosta+tide+pools",
      label: "Acceso público costero",
    },
    location: "Playa Langosta, Tamarindo",
    distance: "15 min a pie desde la casa",
    category: "panorámicas",
    tags: ["pozos de marea", "rocas volcánicas", "fauna marina", "caminata"],
  },
  {
    id: "paseo-caballos",
    title: "Paseo a caballo – bosque seco y costa",
    description:
      "Cabalgata guiada a través de caminos rurales, colinas con vistas al mar y tramos de playa en los alrededores de Tamarindo.",
    coverImage:
      "https://nativeswaycostarica.com/wp-content/uploads/2018/09/image-1.jpg",
    infoLink:
      "https://nativeswaycostarica.com",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Horseback+Riding+Tamarindo+Costa+Rica",
    contact: {
      type: "instagram",
      value: "https://instagram.com/nativeswaycr",
      label: "@nativeswaycr",
    },
    location: "Senderos rurales de Tamarindo",
    distance: "10 min desde la casa",
    category: "panorámicas",
    tags: ["caballos", "cabalgata", "playa", "bosque"],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // GASTRONOMÍA, MERCADOS Y EXPERIENCIAS CULINARIAS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "marina-flamingo-gastro",
    title: "Visita y gastronomía en Marina Flamingo",
    description:
      "Recorrido por las instalaciones del puerto deportivo moderno, observación de embarcaciones y opciones de restauración con vistas al mar.",
    coverImage:
      "https://images.unsplash.com/photo-1570126646281-5ec88111777f?w=800&q=80",
    infoLink:
      "https://instagram.com/marinaflamingocr",
    mapLink:
      "https://www.google.com/maps/place/Marina+Flamingo/@10.4339,-85.7913,15z",
    contact: {
      type: "instagram",
      value: "https://instagram.com/marinaflamingocr",
      label: "@marinaflamingocr",
    },
    location: "Marina Flamingo, Guanacaste",
    distance: "30 min desde la casa",
    category: "gastronomía",
    tags: ["marina", "restaurante", "vistas al mar", "embarcaciones"],
  },
  {
    id: "lolas-avellanas",
    title: "Tarde en Playa Avellanas – Lola's",
    description:
      "Jornada en una playa vecina reconocida por sus olas, su entorno natural virgen y su oferta de restauración costera emblemática.",
    coverImage:
      "https://static.wixstatic.com/media/77f562_7cf5dd64a9054964a071c40c1c7f4812~mv2.jpeg/v1/fill/w_2500,h_1187,al_c/77f562_7cf5dd64a9054964a071c40c1c7f4812~mv2.jpeg",
    infoLink:
      "https://lolascostarica.com",
    mapLink:
      "https://www.google.com/maps/place/Lola%27s+on+the+Beach/@9.9158,-85.7893,15z",
    contact: {
      type: "instagram",
      value: "https://instagram.com/lolas_avellanas",
      label: "@lolas_avellanas",
    },
    location: "Playa Avellanas, Guanacaste",
    distance: "30 min desde la casa",
    category: "gastronomía",
    tags: ["restaurante", "playa", "surf", "comida costera"],
  },
  {
    id: "night-market-tamarindo",
    title: "Mercado Nocturno de Tamarindo",
    description:
      "Espacio nocturno al aire libre con oferta de gastronomía internacional, puestos de artesanía y música en vivo.",
    coverImage:
      "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&q=80",
    infoLink:
      "https://instagram.com/tamarindonightmarket",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Tamarindo+Night+Market",
    contact: {
      type: "instagram",
      value: "https://instagram.com/tamarindonightmarket",
      label: "@tamarindonightmarket",
    },
    location: "Centro de Tamarindo",
    distance: "5 min desde la casa",
    category: "gastronomía",
    tags: ["mercado nocturno", "gastronomía", "artesanía", "música"],
  },
  {
    id: "taller-cocina-cr",
    title: "Taller de cocina costarricense",
    description:
      "Experiencia culinaria guiada por chefs locales para la elaboración de platos típicos de la gastronomía del país.",
    coverImage:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    infoLink:
      "https://instagram.com/tamarindocookingclass",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Cooking+class+Tamarindo+Costa+Rica",
    contact: {
      type: "web",
      value: "https://www.google.com/maps/search/?api=1&query=Escuela+cocina+Tamarindo",
      label: "Restaurantes y escuelas de cocina locales",
    },
    location: "Centro de Tamarindo",
    distance: "10 min desde la casa",
    category: "gastronomía",
    tags: ["cocina", "taller", "gallo pinto", "gastronomía típica"],
  },
  {
    id: "tour-cafe-cacao",
    title: "Tour de café y cacao de origen",
    description:
      "Actividad sensorial para conocer el proceso de cultivo, tostado y elaboración artesanal del café y el chocolate costarricense.",
    coverImage:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80",
    infoLink:
      "https://instagram.com/cafeguanacastecr",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Coffee+Tour+Guanacaste+Costa+Rica",
    contact: {
      type: "web",
      value: "https://www.google.com/maps/search/?api=1&query=Tour+cafe+cacao+Guanacaste",
      label: "Proveedores de experiencias culturales – Guanacaste",
    },
    location: "Finca local, Guanacaste",
    distance: "30 min desde la casa",
    category: "gastronomía",
    tags: ["café", "cacao", "chocolate", "finca", "artesanal"],
  },
  {
    id: "pangas-beach-club",
    title: "Cena en Pangas Beach Club",
    description:
      "Restaurante panorámico frente al mar especializado en cocina fusión y mariscos frescos. Uno de los más reconocidos de Tamarindo.",
    coverImage:
      "https://pangasbeach.com/wp-content/uploads/2025/10/Photo-by-Raw-Shoots-5-1024x683.jpg",
    infoLink:
      "https://pangasbeach.com",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Pangas+Beach+Club+Tamarindo",
    contact: {
      type: "instagram",
      value: "https://instagram.com/pangasbeachclub",
      label: "@pangasbeachclub · +506 2653 0024",
    },
    location: "Tamarindo, frente al mar",
    distance: "8 min desde la casa",
    category: "gastronomía",
    tags: ["restaurante", "mariscos", "fusión", "vista al mar", "cena"],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // AVENTURA EXTRA
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "pinilla-paintball",
    title: "Paintball en la selva – Pinilla",
    description:
      "Arena de paintball multiterreno de 25×50 m en plena selva de Guanacaste. Jugá entre obstáculos naturales con modos de juego como Captura la Bandera o Terminator (1 vs todos). Equipo profesional incluido: marcadoras Tippmann Stormer, tanques de aire y máscaras certificadas. Duración ~1h 30min. Ideal para grupos.",
    coverImage:
      "/paintball-pinilla.png",
    infoLink:
      "https://instagram.com/pinillapaintball",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Pinilla+Paintball+Tamarindo+Costa+Rica",
    contact: {
      type: "instagram",
      value: "https://instagram.com/pinillapaintball",
      label: "@pinillapaintball",
    },
    location: "Pinilla, Guanacaste",
    distance: "25 min en carro",
    category: "aventura",
    tags: ["paintball", "adrenalina", "grupos", "selva", "equipo"],
  },
];

export const CATEGORIES = [
  { id: "all", label: "Todas", emoji: "🌟" },
  { id: "aventura", label: "Aventura", emoji: "🏄" },
  { id: "naturaleza", label: "Naturaleza", emoji: "🌋" },
  { id: "fauna", label: "Fauna", emoji: "🐢" },
  { id: "panorámicas", label: "Panorámicas", emoji: "⛵" },
  { id: "gastronomía", label: "Gastronomía", emoji: "🍽️" },
] as const;

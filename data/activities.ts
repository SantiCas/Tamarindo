export interface Activity {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  infoLink: string;
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
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    infoLink:
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
      "https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=Tamarindo+Canopy+Tour+Costa+Rica",
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
      "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=Hacienda+Guachipelin+Rincon+de+la+Vieja",
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
      "https://www.google.com/maps/search/?api=1&query=Estero+Tamarindo+Costa+Rica",
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
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=Stand+Up+Paddle+Tamarindo+Costa+Rica",
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
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=Iguana+Surf+Tamarindo+Costa+Rica",
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
      "https://www.google.com/maps/search/?api=1&query=Islas+Catalinas+Guanacaste+Costa+Rica",
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
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=Marina+Flamingo+Costa+Rica",
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
      "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=ATV+tour+Tamarindo+mirador+Guanacaste",
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
      "https://images.unsplash.com/photo-1594166245695-1729cc2be3c7?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=Rio+Celeste+Parque+Nacional+Volcan+Tenorio",
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
      "https://images.unsplash.com/photo-1601604561784-fcc9a8adb5db?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=Sector+Las+Pailas+Rincon+de+la+Vieja",
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
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=Hacienda+Guachipelin+Rincon+de+la+Vieja",
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
      "https://www.google.com/maps/search/?api=1&query=Catarata+Llanos+de+Cortes+Bagaces",
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
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=Playa+Samara+Nicoya+Costa+Rica",
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
      "https://www.google.com/maps/search/?api=1&query=Centro+de+Rescate+Las+Pumas+Canas+Costa+Rica",
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
      "https://www.google.com/maps/search/?api=1&query=Parque+Nacional+Palo+Verde+Tempisque",
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
      "https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=Parque+Nacional+Las+Baulas+Tamarindo",
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
      "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=Playa+Grande+Parque+Las+Baulas+Costa+Rica",
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
      "https://www.google.com/maps/search/?api=1&query=Refugio+Nacional+Ostional+Costa+Rica",
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
      "https://www.google.com/maps/search/?api=1&query=Bird+Watching+Tour+Tamarindo+Guanacaste",
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
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    infoLink:
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
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=Marina+Flamingo+Charter+Costa+Rica",
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
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=Mirador+Tamarindo+Langosta+Costa+Rica",
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
      "https://www.google.com/maps/search/?api=1&query=Playa+Conchal+Guanacaste+Costa+Rica",
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
      "https://www.google.com/maps/search/?api=1&query=Playa+Langosta+Tamarindo+Costa+Rica",
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
      "https://images.unsplash.com/photo-1553284966-19b8815c7817?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=Horseback+Riding+Tamarindo+Guanacaste",
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
      "https://www.google.com/maps/search/?api=1&query=Marina+Flamingo+Restaurante+Costa+Rica",
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
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    infoLink:
      "https://www.google.com/maps/search/?api=1&query=Lolas+Restaurant+Playa+Avellanas+Costa+Rica",
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
      "https://www.google.com/maps/search/?api=1&query=Tamarindo+Night+Market+Costa+Rica",
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
      "https://www.google.com/maps/search/?api=1&query=Cooking+Class+Tamarindo+Costa+Rica",
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
      "https://www.google.com/maps/search/?api=1&query=Coffee+Cacao+Tour+Guanacaste+Costa+Rica",
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
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    infoLink:
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
];

export const CATEGORIES = [
  { id: "all", label: "Todas", emoji: "🌟" },
  { id: "aventura", label: "Aventura", emoji: "🏄" },
  { id: "naturaleza", label: "Naturaleza", emoji: "🌋" },
  { id: "fauna", label: "Fauna", emoji: "🐢" },
  { id: "panorámicas", label: "Panorámicas", emoji: "⛵" },
  { id: "gastronomía", label: "Gastronomía", emoji: "🍽️" },
] as const;

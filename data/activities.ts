export interface Activity {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  infoLink: string;
  contact: {
    type: "phone" | "email" | "whatsapp";
    value: string;
    label?: string;
  };
  location: string;
  distance: string;
  category: "aventura" | "playa" | "gastronomía" | "cultura" | "relax";
  tags?: string[];
}

export const ACTIVITIES: Activity[] = [
  {
    id: "surf-lesson",
    title: "Clase de Surf en Tamarindo",
    description:
      "Aprende a surfear con instructores certificados en las olas perfectas de Tamarindo. Clases para todos los niveles, desde principiantes hasta intermedios. Tablas y equipamiento incluido.",
    coverImage:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
    infoLink: "https://tamarindosurf.com",
    contact: {
      type: "whatsapp",
      value: "+50688001234",
      label: "WhatsApp Tamarindo Surf",
    },
    location: "Playa Tamarindo",
    distance: "5 min a pie desde la casa",
    category: "aventura",
    tags: ["surf", "playa", "deporte"],
  },
  {
    id: "mangrove-kayak",
    title: "Kayak en los Manglares",
    description:
      "Explora los manglares del Estero Tamarindo en kayak. Un tour de 2 horas rodeado de naturaleza, donde podrás ver monos, iguanas y aves tropicales en su hábitat natural.",
    coverImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    infoLink: "https://tamarindoadventures.com/kayak",
    contact: {
      type: "phone",
      value: "+50688005678",
      label: "Tamarindo Adventures",
    },
    location: "Estero Tamarindo",
    distance: "10 min en auto",
    category: "aventura",
    tags: ["kayak", "naturaleza", "manglares"],
  },
  {
    id: "sunset-catamaran",
    title: "Catamaran al Atardecer",
    description:
      "Disfruta de un atardecer mágico en el Pacífico a bordo de un catamarán. Snorkel, open bar, cena incluida y delfines si tenemos suerte. La excursión más popular de la zona.",
    coverImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    infoLink: "https://bluedreamcatamaran.com",
    contact: {
      type: "email",
      value: "reservas@bluedreamcatamaran.com",
      label: "Blue Dream Catamaran",
    },
    location: "Marina Tamarindo",
    distance: "8 min en auto",
    category: "relax",
    tags: ["catamaran", "atardecer", "snorkel", "open bar"],
  },
  {
    id: "zip-line",
    title: "Canopy / Zip-Line en la Selva",
    description:
      "Vuela entre los árboles en uno de los mejores canopys de Guanacaste. 12 líneas de zip-line, puentes colgantes y una tirolesa sobre el cañón. Adrenalina pura para toda la familia.",
    coverImage:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    infoLink: "https://guanacastecanopy.com",
    contact: {
      type: "whatsapp",
      value: "+50688009012",
      label: "Guanacaste Canopy Tours",
    },
    location: "Hacienda Pinilla, Santa Cruz",
    distance: "25 min en auto",
    category: "aventura",
    tags: ["canopy", "zipline", "adrenalina", "selva"],
  },
  {
    id: "local-market",
    title: "Mercado Local y Desayuno Típico",
    description:
      "Visita el mercado local de Tamarindo al amanecer. Frutas tropicales, artesanías, y el mejor desayuno típico costarricense: gallo pinto, huevos y café recién colado.",
    coverImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    infoLink: "https://maps.google.com/?q=Mercado+Tamarindo",
    contact: {
      type: "phone",
      value: "+50688003456",
      label: "Info Turismo Local",
    },
    location: "Centro de Tamarindo",
    distance: "3 min a pie desde la casa",
    category: "cultura",
    tags: ["mercado", "gastronomía", "cultura", "artesanías"],
  },
  {
    id: "playa-grande",
    title: "Día en Playa Grande (Tortugas)",
    description:
      "Playa Grande es una de las playas más vírgenes de Costa Rica y santuario de tortugas leatherback. Aguas cristalinas, olas perfectas para bodysurf y casi sin turistas. ¡Un must!",
    coverImage:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    infoLink: "https://sinac.go.cr/ES-CR/ac/acto/pg/Paginas/default.aspx",
    contact: {
      type: "phone",
      value: "+50626531351",
      label: "Parque Nacional Marino Las Baulas",
    },
    location: "Playa Grande, Guanacaste",
    distance: "15 min en auto o lancha",
    category: "playa",
    tags: ["playa", "tortugas", "naturaleza", "snorkel"],
  },
  {
    id: "yoga-sunrise",
    title: "Yoga al Amanecer en la Playa",
    description:
      "Clase de yoga y meditación al amanecer frente al mar. Instructora certificada, esterillas incluidas. Una experiencia única para comenzar el día en paz y energía.",
    coverImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    infoLink: "https://tamarindoyoga.com",
    contact: {
      type: "whatsapp",
      value: "+50688007890",
      label: "Luna Yoga Tamarindo",
    },
    location: "Playa Tamarindo (sector norte)",
    distance: "7 min a pie desde la casa",
    category: "relax",
    tags: ["yoga", "meditación", "playa", "amanecer", "relax"],
  },
  {
    id: "cena-mariscos",
    title: "Cena de Mariscos en el Puerto",
    description:
      "El mejor restaurante de mariscos de Tamarindo. Langosta, camarones al ajillo, ceviche de atún y pescado fresco del día. Vista al mar y música en vivo los fines de semana.",
    coverImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    infoLink: "https://elcocodrilo.com",
    contact: {
      type: "phone",
      value: "+50626531234",
      label: "El Cocodrilo Restaurant",
    },
    location: "Frente a la playa, Tamarindo",
    distance: "5 min a pie desde la casa",
    category: "gastronomía",
    tags: ["mariscos", "cena", "restaurante", "vista al mar"],
  },
];

export const CATEGORIES = [
  { id: "all", label: "Todas", emoji: "🌟" },
  { id: "aventura", label: "Aventura", emoji: "🏄" },
  { id: "playa", label: "Playa", emoji: "🏖️" },
  { id: "gastronomía", label: "Gastronomía", emoji: "🍽️" },
  { id: "cultura", label: "Cultura", emoji: "🎭" },
  { id: "relax", label: "Relax", emoji: "🧘" },
] as const;

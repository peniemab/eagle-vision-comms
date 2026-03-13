// Eagle Vision Comms DRC - Constants & Data

export const COMPANY = {
  name: "Eagle Vision Comms",
  tagline: "Bien faire et faire savoir - Démarquez-vous",
  phone: "+243 825 784 931",
  whatsapp: "243825784931",
  email: "contact@eaglevisioncomms.com",
  address: "Kinshasa, République Démocratique du Congo",
  hours: "Lun - Ven: 8h00 - 18h00 | Sam: 9h00 - 14h00",
  year: 2020,
};

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/academy", label: "Evic Academy" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/blog", label: "Blog" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    id: "photographie",
    title: "Photographie & Visuels",
    description: "Capturer l'essence de votre marque à travers des photos professionnelles qui racontent votre histoire.",
    icon: "Camera",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    features: ["Shooting produit", "Portrait corporate", "Photographie événementielle", "Retouche professionnelle"],
  },
  {
    id: "videographie",
    title: "Vidéographie & Filmmaker",
    description: "Des vidéos cinématographiques qui donnent vie à votre vision et captivent votre audience.",
    icon: "Video",
    image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=800&q=80",
    features: ["Films corporate", "Spots publicitaires", "Documentaires", "Montage & Post-production"],
  },
  {
    id: "publicite",
    title: "Publicité & TV",
    description: "Des campagnes publicitaires percutantes qui marquent les esprits et boostent votre visibilité.",
    icon: "Tv",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    features: ["Spots TV", "Campagnes médias", "Affichage urbain", "Stratégie média"],
  },
  {
    id: "communication",
    title: "Stratégies de Communication",
    description: "Élaborer des stratégies de communication sur-mesure pour atteindre vos objectifs.",
    icon: "Target",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    features: ["Plan de communication", "Relations presse", "Communication de crise", "Conseil stratégique"],
  },
  {
    id: "digital",
    title: "Social Media & Digital",
    description: "Dominer le digital avec une présence en ligne forte et engageante.",
    icon: "Globe",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80",
    features: ["Community management", "Création de contenu", "Publicité digitale", "Analytics & Reporting"],
  },
  {
    id: "branding",
    title: "Branding & Production",
    description: "Construire une identité de marque forte et mémorable qui vous démarque.",
    icon: "Palette",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    features: ["Identité visuelle", "Logo & Charte graphique", "Packaging design", "Supports imprimés"],
  },
  {
    id: "evenementiel",
    title: "Événementiel",
    description: "Organiser et couvrir vos événements avec créativité et professionnalisme.",
    icon: "PartyPopper",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    features: ["Organisation d'événements", "Couverture médiatique", "Scénographie", "Logistique événementielle"],
  },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Campagne Vodacom RDC",
    category: "publicite",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Campagne publicitaire multi-supports pour le lancement d'un nouveau forfait.",
  },
  {
    id: 2,
    title: "Branding Kongo Coffee",
    category: "branding",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    description: "Création de l'identité visuelle complète pour une marque de café premium.",
  },
  {
    id: 3,
    title: "Film Corporate BCDC",
    category: "videographie",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    description: "Réalisation d'un film institutionnel pour une banque majeure.",
  },
  {
    id: 4,
    title: "Shooting Mode Kinshasa",
    category: "photographie",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    description: "Session photo pour une collection de mode locale.",
  },
  {
    id: 5,
    title: "Stratégie Digitale MTN",
    category: "digital",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    description: "Refonte complète de la stratégie social media.",
  },
  {
    id: 6,
    title: "Gala de Charité 2024",
    category: "evenementiel",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    description: "Organisation et couverture complète du gala annuel.",
  },
  {
    id: 7,
    title: "Spot TV Bralima",
    category: "publicite",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    description: "Création et diffusion d'un spot publicitaire national.",
  },
  {
    id: 8,
    title: "Portrait Corporate Rawbank",
    category: "photographie",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
    description: "Portraits professionnels de l'équipe dirigeante.",
  },
  {
    id: 9,
    title: "Lancement Produit Nestlé",
    category: "evenementiel",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    description: "Événement de lancement produit avec couverture médiatique.",
  },
  {
    id: 10,
    title: "Identité Visuelle Startup Tech",
    category: "branding",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    description: "Branding complet pour une startup technologique congolaise.",
  },
  {
    id: 11,
    title: "Documentaire Fleuve Congo",
    category: "videographie",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&q=80",
    description: "Mini-documentaire sur la vie au bord du fleuve Congo.",
  },
  {
    id: 12,
    title: "Social Media Campaign Orange",
    category: "digital",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    description: "Campagne social media virale avec plus de 2M d'impressions.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Patrick Mulamba",
    role: "Directeur Marketing",
    company: "Vodacom RDC",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    text: "Eagle Vision a transformé notre communication. Leur créativité et leur professionnalisme sont exceptionnels. Les résultats ont dépassé nos attentes.",
    rating: 5,
    service: "publicite",
  },
  {
    id: 2,
    name: "Marie Kabongo",
    role: "CEO",
    company: "Kongo Coffee",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    text: "Le branding réalisé par Eagle Vision a donné une véritable identité à notre marque. Nous avons vu une augmentation de 200% de notre reconnaissance de marque.",
    rating: 5,
    service: "branding",
  },
  {
    id: 3,
    name: "Jean-Claude Mwamba",
    role: "Directeur Général",
    company: "Groupe Mwamba",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    text: "L'équipe d'Eagle Vision est incroyablement talentueuse. Leur film corporate pour notre entreprise a impressionné tous nos partenaires internationaux.",
    rating: 5,
    service: "videographie",
  },
  {
    id: 4,
    name: "Sarah Lukusa",
    role: "Responsable Communication",
    company: "ONG Espoir",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    text: "Eagle Vision comprend parfaitement les besoins des organisations. Leur couverture de nos événements est toujours exceptionnelle.",
    rating: 5,
    service: "evenementiel",
  },
  {
    id: 5,
    name: "David Tshiani",
    role: "Fondateur",
    company: "Tech Kin",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    text: "La stratégie digitale mise en place par Eagle Vision a multiplié par 5 notre engagement sur les réseaux sociaux en seulement 3 mois.",
    rating: 5,
    service: "digital",
  },
  {
    id: 6,
    name: "Grace Ilunga",
    role: "Directrice Artistique",
    company: "Fashion KIN",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    text: "Les photographes d'Eagle Vision capturent l'essence même de nos collections. Chaque shooting est une expérience créative unique.",
    rating: 5,
    service: "photographie",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Emmanuel Kabuya",
    role: "Fondateur & Directeur Créatif",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "Visionnaire passionné avec plus de 10 ans d'expérience dans la communication.",
  },
  {
    name: "Esther Mutombo",
    role: "Directrice de Production",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Experte en production audiovisuelle, garantit la qualité de chaque projet.",
  },
  {
    name: "Christian Kabala",
    role: "Chef Vidéographe",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    bio: "Cinéaste primé, apporte une vision cinématographique unique.",
  },
  {
    name: "Nadège Tshibanda",
    role: "Responsable Digital",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Stratège digital qui transforme les marques en phénomènes en ligne.",
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "5 Tendances Communication en Afrique pour 2025",
    excerpt: "Découvrez les tendances qui redéfinissent la communication en Afrique et comment en tirer parti pour votre marque.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168d8c?w=800&q=80",
    date: "2025-01-15",
    category: "Tendances",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Comment Construire une Marque Forte en RDC",
    excerpt: "Les étapes essentielles pour créer une identité de marque qui résonne avec le public congolais.",
    image: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=800&q=80",
    date: "2025-01-08",
    category: "Branding",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "L'Impact de la Vidéo dans le Marketing Digital",
    excerpt: "Pourquoi la vidéo est devenue l'outil incontournable du marketing digital en 2025.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    date: "2024-12-20",
    category: "Marketing Digital",
    readTime: "4 min",
  },
  {
    id: 4,
    title: "Réseaux Sociaux : Guide Complet pour les PME Congolaises",
    excerpt: "Un guide pratique pour maximiser votre présence sur les réseaux sociaux avec un budget limité.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    date: "2024-12-10",
    category: "Social Media",
    readTime: "8 min",
  },
  {
    id: 5,
    title: "Événementiel : Les Clés d'un Événement Réussi",
    excerpt: "De la planification à l'exécution, découvrez nos secrets pour des événements mémorables.",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
    date: "2024-11-25",
    category: "Événementiel",
    readTime: "6 min",
  },
  {
    id: 6,
    title: "Photographie Corporate : Valoriser Votre Image",
    excerpt: "Comment la photographie professionnelle peut transformer la perception de votre entreprise.",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
    date: "2024-11-15",
    category: "Photographie",
    readTime: "5 min",
  },
];

export const STATS = [
  { value: 250, suffix: "+", label: "Projets Réalisés" },
  { value: 85, suffix: "+", label: "Clients Satisfaits" },
  { value: 5, suffix: "", label: "Années d'Expérience" },
  { value: 15, suffix: "+", label: "Prix & Récompenses" },
];

export const PARTNERS = [
  "Vodacom", "MTN", "Orange", "Rawbank", "BCDC",
  "Bralima", "Nestlé", "Total Energies",
];

export const TIMELINE = [
  { year: "2020", title: "Fondation", description: "Création d'Eagle Vision Comms à Kinshasa avec une vision claire : révolutionner la communication en RDC." },
  { year: "2021", title: "Croissance", description: "Premiers grands contrats avec des multinationales. Expansion de l'équipe et acquisition d'équipements professionnels." },
  { year: "2022", title: "Reconnaissance", description: "Première récompense nationale pour l'excellence en production audiovisuelle." },
  { year: "2023", title: "Expansion", description: "Ouverture du studio de production et diversification des services vers le digital." },
  { year: "2024", title: "Innovation", description: "Lancement des services de stratégie digitale et consolidation de la position de leader." },
  { year: "2025", title: "Excellence", description: "Plus de 250 projets réalisés, reconnu comme acteur majeur de la communication en RDC." },
];

export const FAQ_ITEMS = [
  {
    question: "Quels types de services proposez-vous ?",
    answer: "Nous offrons une gamme complète de services : photographie, vidéographie, publicité TV, stratégies de communication, social media & digital, branding & production, et événementiel.",
  },
  {
    question: "Quels sont vos délais de réalisation ?",
    answer: "Les délais varient selon le projet. Un shooting photo peut prendre 1-3 jours, un film corporate 2-4 semaines, et une stratégie de communication complète 1-2 mois. Nous adaptons nos délais à vos besoins.",
  },
  {
    question: "Travaillez-vous uniquement à Kinshasa ?",
    answer: "Bien que notre siège soit à Kinshasa, nous intervenons dans toute la RDC et dans la sous-région. Nous avons réalisé des projets à Lubumbashi, Goma, et même à l'international.",
  },
  {
    question: "Comment demander un devis ?",
    answer: "Vous pouvez demander un devis via notre formulaire de contact, par WhatsApp au +243 825 784 931, ou par email à contact@eaglevisioncomms.com. Nous répondons sous 24h.",
  },
  {
    question: "Proposez-vous des formules d'abonnement ?",
    answer: "Oui, nous proposons des formules mensuelles pour le community management, la création de contenu et le conseil en communication. Contactez-nous pour découvrir nos forfaits.",
  },
];

export const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80",
    title: "Capturer l'Excellence",
    subtitle: "Production audiovisuelle premium",
  },
  {
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80",
    title: "Créer l'Impact",
    subtitle: "Communication stratégique et créative",
  },
  {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
    title: "Vivre l'Événement",
    subtitle: "Événements mémorables et productions uniques",
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
    title: "Innover le Digital",
    subtitle: "Stratégie digitale et social media",
  },
];

export const ACADEMY_DATA = {
  mission: "Préparez l'avenir de demain avec Evic Academy. Nous offrons des formations certifiantes et professionnelles pour encadrer les jeunes en utilisant des outils informatiques, techniques, de la nouvelle technologie et de la communication visuelle.",
  vision: "Renforcer les capacités des jeunes et les préparer à des opportunités professionnelles, tout en les encourageant à s'orienter vers l'emploi ou l'entrepreneuriat comme alternative au recours aux armes.",
  impact: "Construire un avenir meilleur pour notre pays et nos cités en particulier, en luttant contre les difficultés d'apprentissage liées au coût élevé des formations.",
  trainings: [
    {
      title: "Informatique & Bureautique",
      description: "Maîtrisez les outils essentiels pour le monde professionnel moderne.",
      icon: "Monitor",
    },
    {
      title: "Nouvelles Technologies",
      description: "Plongez dans l'univers du code, de l'IA et des innovations tech.",
      icon: "Cpu",
    },
    {
      title: "Communication Visuelle",
      description: "Apprenez le design, le montage vidéo et la création de contenu.",
      icon: "Palette",
    },
    {
      title: "Métiers d'Eagle Vision",
      description: "Formez-vous directement sur nos domaines d'expertise pour devenir un pro.",
      icon: "Briefcase",
    },
  ],
};

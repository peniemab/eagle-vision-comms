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
    title: "Photographie Professionnelle",
    description: "Capturer l'essence de votre marque à travers des visuels haute définition qui racontent votre histoire.",
    icon: "Camera",
    image: "/images/services/photographie.png",
    features: ["Portraits Corporate", "Shooting Produit", "Mode & Lifestyle", "Retouche Avancée"],
  },
  {
    id: "videographie",
    title: "Vidéographie & Filmmaking",
    description: "Des productions vidéo cinématographiques pour captiver votre audience et valoriser vos projets.",
    icon: "Video",
    image: "/images/services/videographie.png",
    features: ["Films Institutionnels", "Spots Publicitaires", "Aftermovies", "Clips Vidéos"],
  },
  {
    id: "drone",
    title: "Prises de Vue Drone",
    description: "Prenez de la hauteur avec des images aériennes spectaculaires en 4K pour une perspective unique.",
    icon: "Plane",
    image: "/images/services/drone.png",
    features: ["Inspection Technique", "Couverture Immo", "Plans Cinématographiques", "Cartographie"],
  },
  {
    id: "live-streaming",
    title: "Live Streaming & WebTV",
    description: "Diffusez vos événements en direct sur toutes les plateformes avec une régie multi-caméras professionnelle.",
    icon: "Radio",
    image: "/images/services/live-streaming.png",
    features: ["Direct Facebook/Youtube", "Webinaires Premium", "Conférences Hybrides", "Interactions Live"],
  },
  {
    id: "direction-artistique",
    title: "Direction Artistique",
    description: "Une vision créative cohérente pour donner une âme et une identité unique à tous vos supports.",
    icon: "Palette",
    image: "/images/services/direction-artistique.png",
    features: ["Identité Visuelle", "Direction Créative", "Naming & Storytelling", "Concept Original"],
  },
  {
    id: "evenementiel",
    title: "Couverture Événementielle",
    description: "Capturez chaque moment fort de vos événements avec une équipe dédiée et réactive.",
    icon: "PartyPopper",
    image: "/images/services/evenementiel.png",
    features: ["Congrès & Séminaires", "Soirées de Gala", "Lancements de Produits", "Festivals"],
  },
  {
    id: "post-production",
    title: "Production & Post-production",
    description: "Montage image, étalonnage, design sonore et effets spéciaux pour sublimer vos créations.",
    icon: "Scissors",
    image: "/images/services/post-production.png",
    features: ["Montage Vidéo 4K", "Étalonnage Colorimétrique", "Motion Design", "Sound Design"],
  },
  {
    id: "communication",
    title: "Stratégies de Communication",
    description: "Conseils et plans de communication sur-mesure pour atteindre vos objectifs d'affaires.",
    icon: "Target",
    image: "/images/services/communication.png",
    features: ["Plan de Comm", "Communication de Crise", "Relations Publiques", "Audit de Marque"],
  },
  {
    id: "digital",
    title: "Social Media & Digital",
    description: "Optimisez votre présence en ligne pour engager vos communautés et convertir vos prospects.",
    icon: "Globe",
    image: "/images/services/digital.png",
    features: ["Community Management", "Ads Facebook/Insta", "Campagnes Influenceurs", "Copywriting"],
  },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Campagne Vodacom RDC",
    category: "publicite",
    image: "/images/portfolio/item1.png",
    description: "Campagne publicitaire multi-supports pour le lancement d'un nouveau forfait.",
  },
  {
    id: 2,
    title: "Branding Kongo Coffee",
    category: "branding",
    image: "/images/portfolio/item2.png",
    description: "Création de l'identité visuelle complète pour une marque de café premium.",
  },
  {
    id: 3,
    title: "Film Corporate BCDC",
    category: "videographie",
    image: "/images/portfolio/item3.png",
    description: "Réalisation d'un film institutionnel pour une banque majeure.",
  },
  {
    id: 4,
    title: "Shooting Mode Kinshasa",
    category: "photographie",
    image: "/images/portfolio/item4.png",
    description: "Session photo pour une collection de mode locale.",
  },
  {
    id: 5,
    title: "Stratégie Digitale MTN",
    category: "digital",
    image: "/images/portfolio/item5.png",
    description: "Refonte complète de la stratégie social media.",
  },
  {
    id: 6,
    title: "Gala de Charité 2024",
    category: "evenementiel",
    image: "/images/portfolio/item6.png",
    description: "Organisation et couverture complète du gala annuel.",
  },
  {
    id: 7,
    title: "Spot TV Bralima",
    category: "publicite",
    image: "/images/portfolio/item7.png",
    description: "Création et diffusion d'un spot publicitaire national.",
  },
  {
    id: 8,
    title: "Portrait Corporate Rawbank",
    category: "photographie",
    image: "/images/portfolio/item8.png",
    description: "Portraits professionnels de l'équipe dirigeante.",
  },
  {
    id: 9,
    title: "Lancement Produit Nestlé",
    category: "evenementiel",
    image: "/images/portfolio/item9.png",
    description: "Événement de lancement produit avec couverture médiatique.",
  },
  {
    id: 10,
    title: "Identité Visuelle Startup Tech",
    category: "branding",
    image: "/images/portfolio/item10.png",
    description: "Branding complet pour une startup technologique congolaise.",
  },
  {
    id: 11,
    title: "Documentaire Fleuve Congo",
    category: "videographie",
    image: "/images/portfolio/item11.png",
    description: "Mini-documentaire sur la vie au bord du fleuve Congo.",
  },
  {
    id: 12,
    title: "Social Media Campaign Orange",
    category: "digital",
    image: "/images/portfolio/item12.png",
    description: "Campagne social media virale avec plus de 2M d'impressions.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Patrick Mulamba",
    role: "Directeur Marketing",
    company: "Vodacom RDC",
    avatar: "/images/testimonials/avatar1.png",
    text: "Eagle Vision a transformé notre communication. Leur créativité et leur professionnalisme sont exceptionnels. Les résultats ont dépassé nos attentes.",
    rating: 5,
    service: "publicite",
  },
  {
    id: 2,
    name: "Marie Kabongo",
    role: "CEO",
    company: "Kongo Coffee",
    avatar: "/images/testimonials/avatar2.png",
    text: "Le branding réalisé par Eagle Vision a donné une véritable identité à notre marque. Nous avons vu une augmentation de 200% de notre reconnaissance de marque.",
    rating: 5,
    service: "branding",
  },
  {
    id: 3,
    name: "Jean-Claude Mwamba",
    role: "Directeur Général",
    company: "Groupe Mwamba",
    avatar: "/images/testimonials/avatar3.png",
    text: "L'équipe d'Eagle Vision est incroyablement talentueuse. Leur film corporate pour notre entreprise a impressionné tous nos partenaires internationaux.",
    rating: 5,
    service: "videographie",
  },
  {
    id: 4,
    name: "Sarah Lukusa",
    role: "Responsable Communication",
    company: "ONG Espoir",
    avatar: "/images/testimonials/avatar4.png",
    text: "Eagle Vision comprend parfaitement les besoins des organisations. Leur couverture de nos événements est toujours exceptionnelle.",
    rating: 5,
    service: "evenementiel",
  },
  {
    id: 5,
    name: "David Tshiani",
    role: "Fondateur",
    company: "Tech Kin",
    avatar: "/images/testimonials/avatar5.png",
    text: "La stratégie digitale mise en place par Eagle Vision a multiplié par 5 notre engagement sur les réseaux sociaux en seulement 3 mois.",
    rating: 5,
    service: "digital",
  },
  {
    id: 6,
    name: "Grace Ilunga",
    role: "Directrice Artistique",
    company: "Fashion KIN",
    avatar: "/images/testimonials/avatar6.png",
    text: "Les photographes d'Eagle Vision capturent l'essence même de nos collections. Chaque shooting est une expérience créative unique.",
    rating: 5,
    service: "photographie",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Emmanuel Kabuya",
    role: "Fondateur & Directeur Créatif",
    image: "/images/team/member1.png",
    bio: "Visionnaire passionné avec plus de 10 ans d'expérience dans la communication.",
  },
  {
    name: "Esther Mutombo",
    role: "Directrice de Production",
    image: "/images/team/member2.png",
    bio: "Experte en production audiovisuelle, garantit la qualité de chaque projet.",
  },
  {
    name: "Christian Kabala",
    role: "Chef Vidéographe",
    image: "/images/team/member3.png",
    bio: "Cinéaste primé, apporte une vision cinématographique unique.",
  },
  {
    name: "Nadège Tshibanda",
    role: "Responsable Digital",
    image: "/images/team/member4.png",
    bio: "Stratège digital qui transforme les marques en phénomènes en ligne.",
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "5 Tendances Communication en Afrique pour 2025",
    excerpt: "Découvrez les tendances qui redéfinissent la communication en Afrique et comment en tirer parti pour votre marque.",
    image: "/images/blog/post1.png",
    date: "2025-01-15",
    category: "Tendances",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Comment Construire une Marque Forte en RDC",
    excerpt: "Les étapes essentielles pour créer une identité de marque qui résonne avec le public congolais.",
    image: "/images/blog/post2.png",
    date: "2025-01-08",
    category: "Branding",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "L'Impact de la Vidéo dans le Marketing Digital",
    excerpt: "Pourquoi la vidéo est devenue l'outil incontournable du marketing digital en 2025.",
    image: "/images/blog/post3.png",
    date: "2024-12-20",
    category: "Marketing Digital",
    readTime: "4 min",
  },
  {
    id: 4,
    title: "Réseaux Sociaux : Guide Complet pour les PME Congolaises",
    excerpt: "Un guide pratique pour maximiser votre présence sur les réseaux sociaux avec un budget limité.",
    image: "/images/blog/post4.png",
    date: "2024-12-10",
    category: "Social Media",
    readTime: "8 min",
  },
  {
    id: 5,
    title: "Événementiel : Les Clés d'un Événement Réussi",
    excerpt: "De la planification à l'exécution, découvrez nos secrets pour des événements mémorables.",
    image: "/images/blog/post5.png",
    date: "2024-11-25",
    category: "Événementiel",
    readTime: "6 min",
  },
  {
    id: 6,
    title: "Photographie Corporate : Valoriser Votre Image",
    excerpt: "Comment la photographie professionnelle peut transformer la perception de votre entreprise.",
    image: "/images/blog/post6.png",
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
    image: "/images/hero/slide1.png",
    title: "Capturer l'Excellence",
    subtitle: "Production audiovisuelle premium",
  },
  {
    image: "/images/hero/slide2.png",
    title: "Créer l'Impact",
    subtitle: "Communication stratégique et créative",
  },
  {
    image: "/images/hero/slide3.png",
    title: "Vivre l'Événement",
    subtitle: "Événements mémorables et productions uniques",
  },
  {
    image: "/images/hero/slide4.png",
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

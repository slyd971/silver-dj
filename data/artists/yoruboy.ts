import type { PressKitConfig } from "@/data/config";

const soundCloudUrl = "https://soundcloud.com/yed-diby";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/yed-diby&color=%23f05a28&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";

export const yoruboyPressKitConfig: PressKitConfig = {
  metadata: {
    title: "Yoruboy Dj Press Kit",
    description:
      "Press kit de Yoruboy Dj, DJ open format basé à Paris, disponible en France et à l'international.",
  },
  ui: {
    openMenuLabel: "Ouvrir le menu",
    closeMenuLabel: "Fermer le menu",
    galleryViewLabel: "Voir",
    galleryDownloadLabel: "Télécharger",
    galleryCloseLabel: "Fermer la galerie",
    galleryPreviousLabel: "Image précédente",
    galleryNextLabel: "Image suivante",
  },
  artist: {
    name: "Yoruboy Dj",
    stageLabel: "DJ open format • Paris • France & international",
    logo: {
      src: "/yoruboy/logo/yoruboy.png",
      alt: "Yoruboy Dj logo",
    },
  },
  navigation: {
    items: [
      { label: "À propos", href: "#about" },
      { label: "Expérience", href: "#clubs" },
      { label: "Galerie", href: "#gallery" },
      { label: "Vidéos", href: "#videos" },
      { label: "Son", href: "#sound" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Booking",
      href: "#contact",
      variant: "primary",
    },
  },
  heroVariants: {
    impact: {
      eyebrow: "Afro open format • Paris",
      title: "YORUBOY",
      accent: "DJ",
      description:
        "DJ open format basé à Paris, Yoruboy Dj propose des sets afro, Amapiano, Hip-Hop et House pensés pour les clubs, les événements privés et les scènes à forte énergie.",
      layout: "impact",
      image: {
        src: "/yoruboy/hero.jpeg",
        alt: "Yoruboy Dj hero visual",
        badge: "Premium • Énergétique • Lifestyle",
        caption: "Afrobeat, Amapiano, Hip-Hop & House",
      },
      ctas: [
        { label: "Booking", href: "#contact", variant: "primary" },
        {
          label: "SoundCloud",
          href: soundCloudUrl,
          variant: "secondary",
          external: true,
        },
      ],
      stats: [
        { value: "PARIS", label: "Base" },
        { value: "FR + INTL", label: "Présence" },
        { value: "OPEN FORMAT", label: "Style" },
        { value: "AFRO ENERGY", label: "Énergie" },
      ],
    },
    interactive: {
      eyebrow: "Expérience live • Paris",
      title: "YORUBOY",
      accent: "DJ",
      description:
        "Entre Afrobeat, Amapiano, Hip-Hop et House, Yoruboy Dj construit des sets dansants, directs et efficaces, avec une vraie lecture du public.",
      layout: "interactive",
      image: {
        src: "/yoruboy/hero.jpeg",
        alt: "Yoruboy Dj live visual",
        badge: "Open format • Paris",
        caption: "Une énergie afro moderne pour le club",
      },
      ctas: [
        { label: "Booking", href: "#contact", variant: "primary" },
        {
          label: "SoundCloud",
          href: soundCloudUrl,
          variant: "secondary",
          external: true,
        },
      ],
      stats: [
        { value: "AFROBEAT", label: "Socle" },
        { value: "AMAPIANO", label: "Énergie" },
        { value: "HIP-HOP", label: "Fusion" },
        { value: "HOUSE", label: "Mouvement" },
      ],
    },
    showcase: {
      eyebrow: "DJ open format • Paris",
      title: "YORUBOY",
      accent: "DJ",
      description:
        "Un format musical afro et open format adapté aux clubs, aux activations de marque et aux événements privés.",
      layout: "showcase",
      image: {
        src: "/yoruboy/hero.jpeg",
        alt: "Yoruboy Dj performance visual",
        badge: "Afro • Amapiano • House",
        caption: "Basé à Paris, pensé pour voyager",
      },
      ctas: [
        { label: "Booking", href: "#contact", variant: "primary" },
        {
          label: "SoundCloud",
          href: soundCloudUrl,
          variant: "secondary",
          external: true,
        },
      ],
      stats: [
        { value: "CLUBS", label: "Formats" },
        { value: "BRAND EVENTS", label: "Marques" },
        { value: "PRIVÉ", label: "Événements" },
        { value: "PARIS", label: "Base" },
      ],
      footerNote:
        "Un profil pensé pour les dancefloors, les lieux lifestyle et les événements où l'énergie du set fait la différence.",
    },
  },
  about: {
    eyebrow: "À propos",
    title: "L’afro comme énergie,\nla scène comme terrain de jeu",
    signatureLabel: "Mission",
    signatureQuote:
      "Faire danser, connecter et inspirer à travers la musique.",
    supportingText:
      "Un mélange de cultures et d'influences musicales qui crée une vraie signature.",
    tags: [
      "Open Format",
      "Hip-Hop",
      "R&B",
      "Afro",
      "Afrobeats",
      "Amapiano",
      "Baile Funk",
      "Afro House",
      "Dancehall",
    ],
    paragraphs: [
      "Je suis Yoruboy DJ, un artiste passionné qui fusionne Afrobeat, Amapiano, Hip-Hop et House pour créer des sets énergiques, modernes et résolument dansants.",
      "Nourri par un univers multiculturel, je mêle rythmes africains, sonorités caribéennes et textures électroniques afin d'offrir une expérience musicale immersive et fédératrice.",
      "Actif derrière les platines depuis plusieurs années, j'ai développé une identité forte portée par une énergie solaire qui fait voyager le public.",
      "Ambitieux et tourné vers l'avenir, je souhaite faire rayonner la culture afro sur les scènes nationales et internationales.",
    ],
  },
  clubs: {
    eyebrow: "Expérience",
    title: "Références et formats.",
    description:
      "Une présence construite entre clubs parisiens, concepts culturels, brand events et événements privés.",
    regions: [
      {
        title: "Références",
        icon: "map-pin",
        items: [
          "Club Haussmann - Paris 9e",
          "Black Cat Club - Paris 8e",
          "Chez Prince - Paris 8e",
          "Parc des Princes",
          "Expo - Paris 3e",
          "Interlude - Paris 11e",
          "Nakama - Paris 9e",
          "Aguila",
          "Esengo",
          "NCE",
          "Crystal Club - Paris 8e",
          "The Key - Paris 8e",
          "Pamela",
          "Oya Fusion",
          "Folie Pigalle",
          "La Merci",
          "No Naime",
          "Frenchplug",
          "TheOnlyWayAmapiano",
          "BeninBoyz",
        ],
      },
      {
        title: "Formats",
        icon: "globe",
        items: [
          "Clubs",
          "Brand events",
          "Événements privés",
          "Restaurants",
        ],
      },
    ],
  },
  sound: {
    eyebrow: "Son",
    title: "À l'écoute.",
    paragraphs: [
      "Je fusionne Afrobeat, Amapiano, Hip-Hop et House pour créer des sets énergiques et modernes.",
      "Mon objectif est de faire voyager les gens dans mon univers musical avec une sélection fédératrice et dansante.",
    ],
    cta: {
      label: "Écouter sur SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "Yoruboy Dj SoundCloud",
    embedUrl: soundCloudEmbedUrl,
  },
  videos: {
    eyebrow: "Vidéos",
    title: "L'énergie en images.",
    description:
      "Des extraits live pour découvrir Yoruboy Dj en situation, derrière les platines et au contact du public.",
    items: [
      {
        id: "yoruboy-video-1",
        title: "Extrait live 01",
        description: "",
        src: "/yoruboy/videos/video-1-web.mp4",
        poster: "/yoruboy/videos/video-1-poster.jpg",
      },
      {
        id: "yoruboy-video-2",
        title: "Extrait live 02",
        description: "",
        src: "/yoruboy/videos/video-2-web.mp4",
        poster: "/yoruboy/videos/video-2-poster.jpg",
      },
      {
        id: "yoruboy-video-3",
        title: "Extrait live 03",
        description: "",
        src: "/yoruboy/videos/video-3-web.mp4",
        poster: "/yoruboy/videos/video-3-poster.jpg",
      },
      {
        id: "yoruboy-video-4",
        title: "Extrait live 04",
        description: "",
        src: "/yoruboy/videos/video-4-web.mp4",
        poster: "/yoruboy/videos/video-4-poster.jpg",
      },
      {
        id: "yoruboy-video-5",
        title: "Extrait live 05",
        description: "",
        src: "/yoruboy/videos/video-5-web.mp4",
        poster: "/yoruboy/videos/video-5-poster.jpg",
      },
      {
        id: "yoruboy-video-6",
        title: "Extrait live 06",
        description: "",
        src: "/yoruboy/videos/video-6-web.mp4",
        poster: "/yoruboy/videos/video-6-poster.jpg",
      },
      {
        id: "yoruboy-video-7",
        title: "Extrait live 07",
        description: "",
        src: "/yoruboy/videos/video-7-web.mp4",
        poster: "/yoruboy/videos/video-7-poster.jpg",
      },
      {
        id: "yoruboy-video-8",
        title: "Extrait live 08",
        description: "",
        src: "/yoruboy/videos/video-8-web.mp4",
        poster: "/yoruboy/videos/video-8-poster.jpg",
      },
    ],
  },
  spotify: {
    eyebrow: "Spotify",
    title: "Spotify",
    description: "",
    playlists: [],
    badgeLabel: "Playlist",
  },
  brands: {
    eyebrow: "Partners",
    title: "Brands and media.",
    intro: "",
    supportingText: "",
    categories: [],
    itemLabel: "Partner",
    items: [],
    fit: {
      eyebrow: "Why it fits",
      title: "",
      points: [],
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Booking et demandes.",
    description:
      "Pour toute demande de booking, événement privé, date en club ou collaboration.",
    methods: [
      {
        label: "Email",
        value: "yeddiby41@gmail.com",
        href: "mailto:yeddiby41@gmail.com",
        icon: "mail",
      },
      {
        label: "Téléphone",
        value: "0629187916",
        href: "tel:0629187916",
        icon: "phone",
      },
      {
        label: "Instagram",
        value: "@Yoruboy_dj",
        href: "https://instagram.com/Yoruboy_dj",
        icon: "instagram",
        external: true,
      },
      {
        label: "SoundCloud",
        value: "Profil officiel",
        href: soundCloudUrl,
        icon: "music",
        external: true,
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Galerie",
    description:
      "Sélection d'images pour illustrer l'univers visuel premium, lifestyle et scène de Yoruboy Dj.",
    homepageTitle: "Univers visuel",
    homepageCtaLabel: "Ouvrir la galerie",
    images: [
      {
        src: "/yoruboy/gallery-1.jpeg",
        alt: "Portrait de Yoruboy Dj",
        size: "md:col-span-2",
      },
      { src: "/yoruboy/gallery-2.jpeg", alt: "Moment live" },
      { src: "/yoruboy/gallery-3.jpeg", alt: "Énergie en club" },
      { src: "/yoruboy/gallery-4.jpeg", alt: "Performance" },
      {
        src: "/yoruboy/gallery-5.jpeg",
        alt: "Portrait scène",
        size: "md:col-span-2",
      },
      { src: "/yoruboy/gallery-6.jpeg", alt: "Ambiance événement" },
      { src: "/yoruboy/gallery-7.jpeg", alt: "Univers nightlife" },
      { src: "/yoruboy/gallery-8.jpeg", alt: "Derrière les platines" },
      { src: "/yoruboy/gallery-9.jpeg", alt: "Détail portrait" },
    ],
  },
};

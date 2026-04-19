export const ProjectTypes = {
  ALL: 'All',
  FEATURE: 'Feature',
  DOCU: 'Docu',
  SHORTS: 'Shorts',
  WEB_SERIES: 'Web Series',
  ADS: 'Advertisements',
} as const;

export const ProjectGenres = {
  SPORTS_DRAMA: 'Sports Drama',
  FAMILY: 'Family',
  MUSIC: 'Music',
  MULTIPLE: 'Multiple',
  THRILLER: 'Thriller',
  CRIME: 'Crime',
} as const;

export const ProjectLanguages = {
  HINDI: 'Hindi',
  ENGLISH: 'English',
  ENGLISH_HINDI: 'English/Hindi',
  MULTILINGUAL: 'Multilingual',
} as const;

export interface Project {
  title: string;
  description: string;
  type: string;
  genre?: string;
  language: string;
  ctaLink: string[] | null;
  ctaText: string;
  image: string;
  link: string;
  rDate?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Roar of the Lion',
    description:
      'Indian documentary drama based on Indian Premier League team Chennai Super Kings who returned to the 2018 edition of the IPL after serving a two-year ban for allegedly involving the 2013 betting scandal.',
    type: ProjectTypes.DOCU,
    genre: ProjectGenres.SPORTS_DRAMA,
    language: ProjectLanguages.MULTILINGUAL,
    ctaLink: ['https://www.hotstar.com/in/tv/roar-of-the-lion/1260003996'],
    ctaText: 'Watch Now',
    image: '/img/project-roar.jpeg',
    link: '#',
    featured: true,
  },
  {
    title: 'Karkinos Healthcare',
    description: `Karkinos Healthcare, a purpose driven technology-led oncology platform, is on a mission to create 'cancer centers without walls' with a primary aim of addressing the accessibility or affordability gaps in cancer care. Karkinos, in association with Dhoni Entertainment, brings to you a short film to spread awareness about Cervical cancer, a growing concern among women.`,
    type: ProjectTypes.SHORTS,
    genre: ProjectGenres.FAMILY,
    language: ProjectLanguages.HINDI,
    ctaLink: null,
    ctaText: 'Watch Now',
    image: '/img/Karkinos-01.png',
    link: 'https://youtu.be/RYPFZdSF98I',
  },
  {
    title: "LGM (Tamil/ Telugu)",
    description:
      "Our Tamil movie, LGM (Let's Get Married) is a mass entertainer conceptualised by Sakshi Singh Dhoni and directed by Ramesh Thamilmani. A fine mix of humour and drama, LGM has Harish Kalyan, Nadiya and Ivana as the lead cast along with Yogi Babu. Now on Amazon!",
    type: ProjectTypes.FEATURE,
    genre: ProjectGenres.FAMILY,
    language: ProjectLanguages.MULTILINGUAL,
    ctaLink: null,
    ctaText: 'Released!',
    rDate: 'Telugu: 4th August 2023',
    image: '/img/LGM_TITILE LOOK3x2.jpg',
    link: '#',
    featured: true,
  },
  {
    title: 'The Hidden Hindu',
    description:
      'A mythological thriller authored by Akshat Gupta. Set in the 21st century, The Hidden Hindu is a timeless tale of the war of good over evil.',
    type: ProjectTypes.FEATURE,
    genre: ProjectGenres.THRILLER,
    language: ProjectLanguages.MULTILINGUAL,
    ctaLink: null,
    ctaText: 'Coming Soon',
    image: '/img/project-hindu.jpeg',
    link: '#',
    featured: true,
  },
  {
    title: 'Garuda Aerospace',
    description: `With the advent of technology, Drones have become the future of mankind. Our upcoming advertisements for Garuda Aerospace shows the power of drones and how beneficial they are in the fields of cinematography, security, defense, agriculture etc.`,
    type: ProjectTypes.ADS,
    language: ProjectLanguages.HINDI,
    ctaLink: [
      'https://www.youtube.com/watch?v=SCbR2OzAb8U',
      'https://youtu.be/7AKzYJzUzxI?si=XQE3MjQAa0PRTOsF',
    ],
    ctaText: 'Ad Video',
    image: '/img/Garuda Aerospace Final.jpeg',
    link: 'https://www.youtube.com/watch?v=SCbR2OzAb8U',
  },
  {
    title: "Garuda's Droni Drone Ad Film",
    description: `Garuda Aerospace is at the forefront of drone innovation, leveraging technology to propel progress across the nation. Our 'Droni' drone advertisement emphasizes its exceptional aerial imagery capabilities, delivering unparalleled precision and clarity.`,
    type: ProjectTypes.ADS,
    language: ProjectLanguages.HINDI,
    ctaLink: ['https://www.youtube.com/watch?v=7AKzYJzUzxI'],
    ctaText: 'Ad Video',
    image: '/img/Garuda New.jpg',
    link: 'https://www.youtube.com/watch?v=7AKzYJzUzxI',
  },
  {
    title: `Meril Ad Film for "Treatment Zaroori Hai" campaign | MS Dhoni`,
    description: `Meril, a leading global medical company is committed to transforming healthcare by developing cutting-edge, in-house solutions. Meril's "treatment Zaroori hai" campaign encourages patients to treat their ailments without delay. This advertisement focuses on orthopaedic care and treatment.`,
    type: ProjectTypes.ADS,
    language: ProjectLanguages.HINDI,
    ctaLink: ['https://www.youtube.com/watch?v=utrU28JXNY0'],
    ctaText: 'Ad Video',
    image: '/img/meril ad.jpg',
    link: 'https://www.youtube.com/watch?v=utrU28JXNY0',
  },
  {
    title: 'Meril Ad Film for Treatment Zaroori Hai',
    description: `Meril, a trailblazing medical company, is dedicated to bridging gaps in healthcare through groundbreaking medical devices. Their "Treatment Zaroori Hai' campaign encourages patients to prioritize timely treatment for cardiovascular conditions, amongst others, promoting optimal care and well-being.`,
    type: ProjectTypes.ADS,
    language: ProjectLanguages.HINDI,
    ctaLink: ['https://www.youtube.com/watch?v=u_3B7LHUxzU'],
    ctaText: 'Ad Video',
    image: '/img/meril ad 2.jpg',
    link: 'https://www.youtube.com/watch?v=u_3B7LHUxzU',
  },
  {
    title: 'Meril Ad Film for Treatment Zaroori Hai',
    description: `By developing innovative medical solutions across specialties, Meril aims to enhance patient care and alleviate pain. Their 'Treatment Zaroori Hai' campaign raises awareness about the importance of timely treatment in hernia care via endosurgery and other areas, promoting better health outcomes.`,
    type: ProjectTypes.ADS,
    language: ProjectLanguages.HINDI,
    ctaLink: ['https://www.youtube.com/watch?v=huzq-waZpfE'],
    ctaText: 'Ad Video',
    image: '/img/meril ad 3.jpg',
    link: 'https://www.youtube.com/watch?v=huzq-waZpfE',
  },
];

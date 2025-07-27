export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  description: string;
  fullDescription: string;
  technologies: string[];
  projectDate: string;
  liveUrl: string;
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  challenge: string;
  solution: string;
  results: string[];
}

export type PortfolioCategory = 
  | 'web-development'
  | 'mobile-apps'
  | 'branding-design'
  | 'photography-videography'
  | 'digital-marketing'
  | 'business-services'
  | 'traditional-advertising';

export const portfolioCategories = [
  { id: 'web-development', name: 'Web Development', icon: '🌐' },
  { id: 'mobile-apps', name: 'Mobile Apps', icon: '📱' },
  { id: 'branding-design', name: 'Branding & Design', icon: '🎨' },
  { id: 'photography-videography', name: 'Photography & Videography', icon: '📸' },
  { id: 'digital-marketing', name: 'Digital Marketing', icon: '📈' },
  { id: 'business-services', name: 'Business Services', icon: '💼' },
  { id: 'traditional-advertising', name: 'Traditional Advertising', icon: '📢' }
];

export const portfolioProjects: PortfolioItem[] = [
  {
    id: 'maison-privee-arabia',
    title: 'Maison Privée Arabia',
    client: 'Maison Privée Arabia',
    category: 'web-development',
    description: 'Luxury real estate website with advanced property search and virtual tours.',
    fullDescription: 'A comprehensive luxury real estate platform designed for the Middle Eastern market, featuring advanced property search, virtual tours, and client management systems.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
    projectDate: '2024',
    liveUrl: 'https://bitlab.lk/redirect/maisonprivee.ae.php',
    thumbnail: '/images/portfolio/maison-privee/thumbnail.jpg',
    heroImage: '/images/portfolio/maison-privee/hero.jpg',
    gallery: [
      '/images/portfolio/maison-privee/gallery-1.jpg',
      '/images/portfolio/maison-privee/gallery-2.jpg',
      '/images/portfolio/maison-privee/gallery-3.jpg',
      '/images/portfolio/maison-privee/gallery-4.jpg'
    ],
    challenge: 'Create a luxury real estate platform that showcases high-end properties with immersive virtual tours and seamless client experience.',
    solution: 'Developed a modern React-based website with advanced search filters, virtual tour integration, and comprehensive property management system.',
    results: [
      '40% increase in property inquiries',
      'Improved user engagement with virtual tours',
      'Streamlined client management process'
    ]
  },
  {
    id: 'perfection-bridal',
    title: 'Perfection Bridal',
    client: 'Perfection Bridal',
    category: 'web-development',
    description: 'Elegant bridal wear e-commerce platform with virtual fitting room.',
    fullDescription: 'A sophisticated e-commerce platform for luxury bridal wear, featuring virtual fitting technology and comprehensive inventory management.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Cloudinary', 'PayPal'],
    projectDate: '2024',
    liveUrl: 'https://bitlab.lk/redirect/perfectionbridal.ae.php',
    thumbnail: '/images/portfolio/perfection-bridal/thumbnail.jpg',
    heroImage: '/images/portfolio/perfection-bridal/hero.jpg',
    gallery: [
      '/images/portfolio/perfection-bridal/gallery-1.jpg',
      '/images/portfolio/perfection-bridal/gallery-2.jpg',
      '/images/portfolio/perfection-bridal/gallery-3.jpg',
      '/images/portfolio/perfection-bridal/gallery-4.jpg'
    ],
    challenge: 'Build an e-commerce platform for luxury bridal wear with virtual fitting capabilities and secure payment processing.',
    solution: 'Created a Next.js application with virtual fitting room technology, secure payment integration, and comprehensive inventory management.',
    results: [
      '35% increase in online sales',
      'Reduced return rates with virtual fitting',
      'Enhanced customer satisfaction'
    ]
  },
  {
    id: 'vinciere',
    title: 'Vinciere',
    client: 'Vinciere',
    category: 'web-development',
    description: 'Modern corporate website with advanced content management system.',
    fullDescription: 'A professional corporate website featuring modern design, advanced CMS, and integrated business solutions.',
    technologies: ['React', 'Laravel', 'MySQL', 'Docker', 'Nginx'],
    projectDate: '2024',
    liveUrl: 'https://vinciere.com/',
    thumbnail: '/images/portfolio/vinciere/thumbnail.jpg',
    heroImage: '/images/portfolio/vinciere/hero.jpg',
    gallery: [
      '/images/portfolio/vinciere/gallery-1.jpg',
      '/images/portfolio/vinciere/gallery-2.jpg',
      '/images/portfolio/vinciere/gallery-3.jpg',
      '/images/portfolio/vinciere/gallery-4.jpg'
    ],
    challenge: 'Develop a modern corporate website that reflects the company\'s professional image and provides easy content management.',
    solution: 'Built a responsive React frontend with Laravel backend, featuring advanced CMS and modern design principles.',
    results: [
      '50% increase in website traffic',
      'Improved brand perception',
      'Streamlined content management'
    ]
  },
  {
    id: 'vanni-architecture',
    title: 'VANNi Architecture Studio',
    client: 'VANNi Architecture Studio',
    category: 'web-development',
    description: 'Portfolio website for architectural firm with project showcase.',
    fullDescription: 'A sophisticated portfolio website showcasing architectural projects with detailed case studies and interactive galleries.',
    technologies: ['Vue.js', 'PHP', 'MySQL', 'AWS S3', 'CloudFront'],
    projectDate: '2023',
    liveUrl: 'https://vanniarchitecture.lk/',
    thumbnail: '/images/portfolio/vanni-architecture/thumbnail.jpg',
    heroImage: '/images/portfolio/vanni-architecture/hero.jpg',
    gallery: [
      '/images/portfolio/vanni-architecture/gallery-1.jpg',
      '/images/portfolio/vanni-architecture/gallery-2.jpg',
      '/images/portfolio/vanni-architecture/gallery-3.jpg',
      '/images/portfolio/vanni-architecture/gallery-4.jpg'
    ],
    challenge: 'Create a portfolio website that effectively showcases architectural projects with high-quality images and detailed case studies.',
    solution: 'Developed a Vue.js application with optimized image galleries, project case studies, and responsive design for all devices.',
    results: [
      '60% increase in project inquiries',
      'Enhanced project presentation',
      'Improved client engagement'
    ]
  },
  {
    id: 'nomad-architectural',
    title: 'Nomad Architectural Studio',
    client: 'Nomad Architectural Studio',
    category: 'web-development',
    description: 'Modern architectural studio website with project portfolio.',
    fullDescription: 'A contemporary website for an architectural studio featuring innovative design and comprehensive project showcase.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
    projectDate: '2023',
    liveUrl: 'https://nas.lk/',
    thumbnail: '/images/portfolio/nomad-architectural/thumbnail.jpg',
    heroImage: '/images/portfolio/nomad-architectural/hero.jpg',
    gallery: [
      '/images/portfolio/nomad-architectural/gallery-1.jpg',
      '/images/portfolio/nomad-architectural/gallery-2.jpg',
      '/images/portfolio/nomad-architectural/gallery-3.jpg',
      '/images/portfolio/nomad-architectural/gallery-4.jpg'
    ],
    challenge: 'Design a modern website that reflects the studio\'s innovative approach to architecture and showcases their unique projects.',
    solution: 'Built a React-based website with modern animations, interactive project galleries, and seamless user experience.',
    results: [
      '45% increase in client inquiries',
      'Improved project visibility',
      'Enhanced brand recognition'
    ]
  },
  {
    id: 'archalley',
    title: 'Archalley',
    client: 'Archalley',
    category: 'web-development',
    description: 'Architecture community platform with project sharing.',
    fullDescription: 'A community platform for architects to share projects, collaborate, and showcase their work to a global audience.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS'],
    projectDate: '2023',
    liveUrl: 'https://archalley.com/',
    thumbnail: '/images/portfolio/archalley/thumbnail.jpg',
    heroImage: '/images/portfolio/archalley/hero.jpg',
    gallery: [
      '/images/portfolio/archalley/gallery-1.jpg',
      '/images/portfolio/archalley/gallery-2.jpg',
      '/images/portfolio/archalley/gallery-3.jpg',
      '/images/portfolio/archalley/gallery-4.jpg'
    ],
    challenge: 'Create a community platform where architects can share projects, collaborate, and build professional networks.',
    solution: 'Developed a Next.js platform with user authentication, project sharing, collaboration tools, and community features.',
    results: [
      '1000+ registered architects',
      '500+ shared projects',
      'Active community engagement'
    ]
  },
  {
    id: 'skinet',
    title: 'Skinet (Pvt) Ltd',
    client: 'Skinet (Pvt) Ltd',
    category: 'web-development',
    description: 'Corporate website for technology solutions company.',
    fullDescription: 'A professional corporate website showcasing technology solutions and services with modern design and functionality.',
    technologies: ['React', 'Laravel', 'MySQL', 'Docker', 'Nginx'],
    projectDate: '2023',
    liveUrl: 'https://skinet.io/',
    thumbnail: '/images/portfolio/skinet/thumbnail.jpg',
    heroImage: '/images/portfolio/skinet/hero.jpg',
    gallery: [
      '/images/portfolio/skinet/gallery-1.jpg',
      '/images/portfolio/skinet/gallery-2.jpg',
      '/images/portfolio/skinet/gallery-3.jpg',
      '/images/portfolio/skinet/gallery-4.jpg'
    ],
    challenge: 'Develop a corporate website that effectively communicates the company\'s technology expertise and service offerings.',
    solution: 'Created a modern React website with Laravel backend, featuring service showcases, case studies, and contact forms.',
    results: [
      '40% increase in lead generation',
      'Improved brand credibility',
      'Enhanced service visibility'
    ]
  },
  {
    id: 'm365-docs',
    title: 'M365 Docs',
    client: 'M365 Docs',
    category: 'web-development',
    description: 'Documentation platform for Microsoft 365 solutions.',
    fullDescription: 'A comprehensive documentation platform providing guides and resources for Microsoft 365 implementation and management.',
    technologies: ['Vue.js', 'PHP', 'MySQL', 'AWS', 'CloudFront'],
    projectDate: '2023',
    liveUrl: 'https://m365docs.com/',
    thumbnail: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400',
    heroImage: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183159/pexels-photo-3183159.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183162/pexels-photo-3183162.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    challenge: 'Build a documentation platform that provides comprehensive guides for Microsoft 365 solutions with easy navigation.',
    solution: 'Developed a Vue.js documentation site with search functionality, organized content structure, and responsive design.',
    results: [
      '5000+ monthly visitors',
      'Improved user experience',
      'Comprehensive documentation coverage'
    ]
  },
  {
    id: 'viragi',
    title: 'Viragi',
    client: 'Viragi',
    category: 'web-development',
    description: 'E-commerce platform for fashion and lifestyle products.',
    fullDescription: 'A modern e-commerce platform specializing in fashion and lifestyle products with advanced shopping features.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS'],
    projectDate: '2023',
    liveUrl: 'https://bitlab.lk/redirect/viragi.us.php',
    thumbnail: 'https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg?auto=compress&cs=tinysrgb&w=400',
    heroImage: 'https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1024976/pexels-photo-1024976.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1024983/pexels-photo-1024983.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1024990/pexels-photo-1024990.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    challenge: 'Create an e-commerce platform for fashion and lifestyle products with modern design and seamless shopping experience.',
    solution: 'Built a Next.js e-commerce platform with advanced product filtering, secure payment processing, and mobile-optimized design.',
    results: [
      '55% increase in online sales',
      'Improved user experience',
      'Enhanced product discovery'
    ]
  },
  {
    id: 'hela-rasa-catering',
    title: 'Hela Rasa Catering',
    client: 'Hela Rasa Catering',
    category: 'branding-design',
    description: 'Complete brand identity design for catering service.',
    fullDescription: 'A comprehensive brand identity package including logo design, business cards, and marketing materials for a premium catering service.',
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Guidelines', 'Print Design'],
    projectDate: '2023',
    liveUrl: 'https://www.facebook.com/HelaRasaCatering/',
    thumbnail: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400',
    heroImage: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/958552/pexels-photo-958552.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/958559/pexels-photo-958559.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/958566/pexels-photo-958566.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    challenge: 'Design a complete brand identity that reflects the premium quality and traditional values of the catering service.',
    solution: 'Created a comprehensive brand package including logo design, color palette, typography, business cards, and marketing materials.',
    results: [
      'Improved brand recognition',
      'Enhanced professional appearance',
      'Increased customer trust'
    ]
  }
];

export const getPortfolioItem = (id: string): PortfolioItem | undefined => {
  return portfolioProjects.find(project => project.id === id);
};

export const getRelatedProjects = (currentId: string, category: PortfolioCategory, limit: number = 3): PortfolioItem[] => {
  return portfolioProjects
    .filter(project => project.id !== currentId && project.category === category)
    .slice(0, limit);
};

export const getNextProject = (currentId: string): PortfolioItem | null => {
  const currentIndex = portfolioProjects.findIndex(project => project.id === currentId);
  if (currentIndex === -1 || currentIndex === portfolioProjects.length - 1) return null;
  return portfolioProjects[currentIndex + 1];
};

export const getPrevProject = (currentId: string): PortfolioItem | null => {
  const currentIndex = portfolioProjects.findIndex(project => project.id === currentId);
  if (currentIndex <= 0) return null;
  return portfolioProjects[currentIndex - 1];
};
import { 
  FileText, 
  Building2, 
  PaintBucket, 
  Globe, 
  Camera, 
  Megaphone,
  Billboard,
  Users,
  Code,
  Server,
  Cloud,
  Mail,
  Database,
  Smartphone,
  Monitor,
  Search,
  TrendingUp,
  MessageSquare,
  Settings,
  Briefcase
} from 'lucide-react';

export const coreServices = [
  {
    id: "business-registration",
    icon: <FileText className="h-8 w-8 text-primary-600" />,
    title: "Business Registration & Documentation",
    description: "Complete business setup services from registration to brand positioning and trademark checks.",
    features: [
      "Company Registration (Sole Proprietorship / Partnership / Pvt Ltd)",
      "BRN, TIN, VAT, EPF/ETF Setup",
      "Unique Business Name Suggestions",
      "Basic Trademark & Domain Availability Checks",
      "Brand Positioning Strategy",
      "Brand Guidelines",
      "Tagline & Slogan Development"
    ]
  },
  {
    id: "business-planning",
    icon: <Briefcase className="h-8 w-8 text-primary-600" />,
    title: "Business Planning & Proposal Writing",
    description: "Professional business planning services including proposals, pitch decks, and grant research.",
    features: [
      "Business Profile & Proposal Writing",
      "Custom Business Plans",
      "Investor Pitch Decks & Roadmaps",
      "NGO & CSR Proposal Writing",
      "Local & International Grant Research",
      "Budget Planning & Formatting",
      "NGO/CSR Collaboration Support"
    ]
  },
  {
    id: "branding-creative",
    icon: <PaintBucket className="h-8 w-8 text-primary-600" />,
    title: "Branding & Creative Design",
    description: "Complete brand identity development with creative design solutions for all your business needs.",
    features: [
      "Logo Design & Brand Kits",
      "Business Cards & Letterheads",
      "Product & Packaging Design",
      "Menus, Flyers, Brochures",
      "UI/UX Design",
      "Storyboarding",
      "Motion Graphics (Intro/Outro)",
      "360° Brand Identity Development"
    ]
  },
  {
    id: "web-app-development",
    icon: <Globe className="h-8 w-8 text-primary-600" />,
    title: "Web & App Development",
    description: "Comprehensive web and mobile application development with custom solutions for every business need.",
    features: [
      "Website Design & Development",
      "Business & Portfolio Websites",
      "E-commerce Websites (with Payment & Delivery Integration)",
      "POS Systems (Retail, Restaurants, Hotels, Pharmacies)",
      "Mobile App Development",
      "WordPress Development",
      "Cloud Application Development",
      "LMS, Inventory, Ticketing Systems",
      "Custom ERP Solutions (HR, Inventory, Billing)",
      "Real-time Dashboards & Reporting",
      "Salesforce Integrations",
      "AI-based Integrations",
      "Domain Registration & Web Hosting",
      "Performance Optimization",
      "SEO-ready & Mobile Responsive Design",
      "Training & Tech Support"
    ]
  },
  {
    id: "photography-videography",
    icon: <Camera className="h-8 w-8 text-primary-600" />,
    title: "Photography & Videography",
    description: "Professional photography and videography services for all your visual content needs.",
    features: [
      "Product, Food, Fashion, and Interior Photography",
      "Store & Catalog Photography",
      "Seasonal Ad Campaign Shoots",
      "360° Videography & Photography",
      "Aerial (Drone) Photography & Videography",
      "Reels, TikTok, YouTube Shorts",
      "Commercial Video Productions",
      "Post-Production (Editing, Subtitles, Effects)"
    ]
  },
  {
    id: "digital-marketing",
    icon: <Megaphone className="h-8 w-8 text-primary-600" />,
    title: "Digital Marketing & Advertising",
    description: "Comprehensive digital marketing strategies to boost your online presence and drive business growth.",
    features: [
      "Digital Marketing Strategy",
      "Social Media Marketing",
      "SEO Services (Local & Global)",
      "Email & SMS Marketing",
      "Content & Blog Writing",
      "PPC Ad Management (Meta, Google, TikTok, YouTube)",
      "Search Engine Marketing (SEM)",
      "E-commerce Marketing",
      "Lead Generation Campaigns",
      "Influencer & Affiliate Marketing",
      "Online Reputation Management (ORM)",
      "Mobile Marketing",
      "WhatsApp Business API Setup (Catalogs, Autoresponders)",
      "Facebook/Instagram Chatbots",
      "Cross-Border E-commerce Platform Integration",
      "Monthly Strategy Reports & Analytics"
    ]
  },
  {
    id: "traditional-advertising",
    icon: <Billboard className="h-8 w-8 text-primary-600" />,
    title: "Traditional & Outdoor Advertising",
    description: "Strategic traditional advertising solutions to maximize your brand visibility in the physical world.",
    features: [
      "Campaign & Advertising Management",
      "LED, Digital, and Gantry Advertising",
      "Hoardings & Billboard Advertising",
      "Souvenir Printing"
    ]
  },
  {
    id: "crm-automation",
    icon: <Settings className="h-8 w-8 text-primary-600" />,
    title: "CRM & Automation",
    description: "Advanced CRM solutions and automation tools to streamline your business processes and improve efficiency.",
    features: [
      "CRM Setup & Services",
      "Lead Generation Tools",
      "WhatsApp & Email Automation",
      "Sales Funnel Automation"
    ]
  }
];

export const techStack = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Vue", "Bootstrap", "Tailwind"],
  backend: ["PHP", "Node.js", "Python", "Laravel", "Django"],
  cms: ["WordPress", "WooCommerce", "Shopify"],
  database: ["MySQL", "PostgreSQL", "MongoDB"],
  cloud: ["AWS", "Azure", "GCP", "Oracle Cloud"],
  mobile: ["Flutter", "React Native", "Java", "Swift"],
  devops: ["Docker", "Kubernetes", "cPanel", "GitHub Actions"],
  design: ["Figma", "Adobe Suite", "Photoshop", "Illustrator"],
  marketing: ["Mailchimp", "Google Ads", "Meta Ads", "Analytics", "Semrush", "Ahrefs"],
  automation: ["Zapier", "HubSpot", "Salesforce", "WhatsApp Business API"],
  photography: ["Adobe Lightroom", "Premiere Pro", "After Effects", "Drone Technology"]
};
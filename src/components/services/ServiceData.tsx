import { 
  Globe, 
  Server, 
  Cpu, 
  PaintBucket, 
  Megaphone,
  Code,
  Building2,
  Monitor,
  Cloud,
  Mail,
  Database
} from 'lucide-react';

export const coreServices = [
  {
    id: "web-development",
    icon: <Globe className="h-8 w-8 text-primary-600" />,
    title: "Web Design & Development",
    description: "Custom, responsive, and user-friendly websites built to meet business goals and drive engagement.",
    features: [
      "Responsive design for all devices",
      "Interactive UI/UX design",
      "Performance optimization",
      "SEO-friendly structure"
    ]
  },
  {
    id: "web-services",
    icon: <Server className="h-8 w-8 text-primary-600" />,
    title: "Web Services",
    description: "Comprehensive web services to ensure your online presence runs smoothly and securely.",
    features: [
      "Web Hosting",
      "Domain Management",
      "Website Maintenance",
      "WordPress Plugin Development",
      "Payment Gateway Integration",
      "API Integration"
    ]
  },
  {
    id: "email-management",
    icon: <Mail className="h-8 w-8 text-primary-600" />,
    title: "Email Management",
    description: "Professional email solutions for effective business communication and collaboration.",
    features: [
      "Microsoft 365 (O365)",
      "Google Workspace",
      "Zoho Mail",
      "cPanel Email Services",
      "Email Migration",
      "SPF/DKIM/DMARC setup"
    ]
  },
  {
    id: "custom-applications",
    icon: <Cpu className="h-8 w-8 text-primary-600" />,
    title: "Custom Applications & Solutions",
    description: "Tailored software solutions designed specifically for your business needs and workflows.",
    features: [
      "Point of Sale Systems",
      "Restaurant Management",
      "Hospital Information Systems",
      "Learning Management Systems (LMS)",
      "Inventory & Warehouse Management",
      "Ticketing Systems"
    ]
  },
  {
    id: "cloud-management",
    icon: <Cloud className="h-8 w-8 text-primary-600" />,
    title: "Cloud & Server Management",
    description: "Expert cloud infrastructure setup and maintenance across all major platforms.",
    features: [
      "AWS, Azure, Google Cloud, Oracle Cloud",
      "Docker, Kubernetes, Terraform, Ansible",
      "VPS, Private Cloud, Bare-metal Servers",
      "Cloud migration and optimization"
    ]
  },
  {
    id: "creative-branding",
    icon: <PaintBucket className="h-8 w-8 text-primary-600" />,
    title: "Creative & Branding Services",
    description: "Professional design services to establish and enhance your brand identity.",
    features: [
      "UI/UX Design",
      "Graphic Design",
      "Logo Design",
      "Branding & Identity",
      "Product Design",
      "Tools: Figma, Adobe XD, Photoshop, Illustrator"
    ]
  },
  {
    id: "marketing",
    icon: <Megaphone className="h-8 w-8 text-primary-600" />,
    title: "Marketing Services",
    description: "Strategic digital marketing to increase your online visibility and reach your target audience.",
    features: [
      "SEO, PPC, SEM",
      "Email Marketing",
      "Event Marketing & Planning",
      "Social Media Marketing",
      "Tools: Google Ads, Meta Ads, Analytics, Semrush, Ahrefs"
    ]
  },
  {
    id: "software-development",
    icon: <Code className="h-8 w-8 text-primary-600" />,
    title: "Software Development",
    description: "Professional development of desktop and mobile applications across multiple platforms.",
    features: [
      "Desktop & Mobile App Development",
      "Cross-platform Apps (Flutter, React Native)",
      "Custom SaaS & MIS Solutions",
      "Agile development methodology"
    ]
  },
  {
    id: "enterprise-solutions",
    icon: <Building2 className="h-8 w-8 text-primary-600" />,
    title: "Enterprise Solutions",
    description: "Comprehensive enterprise-level solutions to streamline business operations.",
    features: [
      "CRM Solutions (HubSpot, Zoho CRM, Salesforce)",
      "ERP Implementation (Odoo, ERPNext, SAP)",
      "AI / LLM Automation (OpenAI, LangChain, Pinecone)",
      "Enterprise workflow optimization"
    ]
  },
  {
    id: "hardware-it",
    icon: <Monitor className="h-8 w-8 text-primary-600" />,
    title: "Hardware & IT Infrastructure",
    description: "Complete hardware solutions and enterprise-grade IT support services.",
    features: [
      "Laptops, PCs, Printers & Accessories",
      "Enterprise-grade IT Support & Services",
      "Remote Support Tools: AnyDesk, TeamViewer",
      "Network infrastructure setup"
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
  design: ["Figma", "Adobe Suite"],
  marketing: ["Mailchimp", "Google Ads", "Meta Ads", "Analytics"]
};
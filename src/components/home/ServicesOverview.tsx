import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, FileText, Briefcase, PaintBucket, Camera, Megaphone, Keyboard as Billboard, Settings } from 'lucide-react';

const servicesList = [
  {
    icon: <FileText className="h-8 w-8 text-primary-600" />,
    title: "Business Registration & Documentation",
    description: "Complete business setup from registration to brand positioning and trademark checks.",
    link: "/services#business-registration"
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary-600" />,
    title: "Business Planning & Proposal Writing",
    description: "Professional business planning including proposals, pitch decks, and grant research.",
    link: "/services#business-planning"
  },
  {
    icon: <PaintBucket className="h-8 w-8 text-primary-600" />,
    title: "Branding & Creative Design",
    description: "Complete brand identity development with creative design solutions.",
    link: "/services#branding-creative"
  },
  {
    icon: <Globe className="h-8 w-8 text-primary-600" />,
    title: "Web & App Development",
    description: "Comprehensive web and mobile development with custom business solutions.",
    link: "/services#web-app-development"
  },
  {
    icon: <Camera className="h-8 w-8 text-primary-600" />,
    title: "Photography & Videography",
    description: "Professional visual content creation for all your marketing and branding needs.",
    link: "/services#photography-videography"
  },
  {
    icon: <Megaphone className="h-8 w-8 text-primary-600" />,
    title: "Digital Marketing & Advertising",
    description: "Comprehensive digital marketing strategies to boost your online presence.",
    link: "/services#digital-marketing"
  },
  {
    icon: <Billboard className="h-8 w-8 text-primary-600" />,
    title: "Traditional & Outdoor Advertising",
    description: "Strategic traditional advertising solutions for maximum brand visibility.",
    link: "/services#traditional-advertising"
  },
  {
    icon: <Settings className="h-8 w-8 text-primary-600" />,
    title: "CRM & Automation",
    description: "Advanced CRM solutions and automation tools to streamline business processes.",
    link: "/services#crm-automation"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5
    }
  })
};

const ServicesOverview = () => {
  return (
    <section className="section bg-gray-50 dark:bg-gray-700 relative border-t-0">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of business solutions to help Sri Lankan entrepreneurs launch, grow, and succeed.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.title}
              className="card group hover:shadow-xl transition-all duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <div className="mb-4 rounded-lg bg-primary-50 p-3 dark:bg-gray-700 group-hover:bg-primary-100 dark:group-hover:bg-gray-600 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
              <Link 
                to={service.link} 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors duration-300"
              >
                Learn more
                <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/services" className="btn btn-primary py-3 px-8">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
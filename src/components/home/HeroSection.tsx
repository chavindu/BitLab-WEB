import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-hero-pattern"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>

      {/* Content */}
      <div className="container-custom relative z-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1 
            className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            We Make It Happen
          </motion.h1>
          
          <motion.p 
            className="mx-auto mb-8 max-w-xl text-lg text-white/90 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your all-in-one business launch, growth, and success partner in Sri Lanka. 
            We empower entrepreneurs with the tools, strategies, and systems they need to build strong, scalable businesses.
          </motion.p>
          
          <motion.div 
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/services" 
              className="btn btn-primary gap-1 px-6 py-3 text-base"
            >
              Explore Services
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link 
              to="/contact" 
              className="btn bg-white text-gray-800 hover:bg-gray-100 focus-visible:ring-gray-500 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 gap-1 px-6 py-3 text-base"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fillOpacity="1" 
            d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            className="fill-white dark:fill-gray-900"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
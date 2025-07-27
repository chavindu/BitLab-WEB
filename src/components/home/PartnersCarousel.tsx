import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Meta',
    logo: '/images/partners/Meta-Logo.png',
    url: 'https://meta.com'
  },
  {
    name: 'Namecheap',
    logo: '/images/partners/Namecheap-Logo.png',
    url: 'https://namecheap.com'
  },
  {
    name: 'Google Cloud',
    logo: '/images/partners/Google-Cloud-Logo.png',
    url: 'https://cloud.google.com'
  },
  {
    name: 'Microsoft Azure',
    logo: '/images/partners/microsoft-azure-logo.png',
    url: 'https://azure.microsoft.com'
  },
  {
    name: 'Oracle',
    logo: '/images/partners/Oracle-Logo.png',
    url: 'https://oracle.com'
  },
  {
    name: 'Koko',
    logo: '/images/partners/koko-logo.png',
    url: '#'
  },
  {
    name: 'AWS',
    logo: '/images/partners/AWS-Logo.png',
    url: 'https://aws.amazon.com'
  },
  {
    name: 'MintPay',
    logo: '/images/partners/mint-pay-logo.png',
    url: '#'
  },
  {
    name: 'PayHere',
    logo: '/images/partners/PayHere-Logo.png',
    url: '#'
  }
];

const PartnersCarousel: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We partner with leading technology companies to deliver the best solutions for our clients.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800/50 z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-800/50 z-10" />

          {/* Carousel Container */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-8 first:ml-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-40 h-20 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-4"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </a>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-duplicate-${index}`}
                className="flex-shrink-0 mx-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-40 h-20 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-4"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-400">Technology Partners</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-400">Integrations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
            <div className="text-gray-600 dark:text-gray-400">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel; 
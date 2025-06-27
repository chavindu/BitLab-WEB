import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ServiceCard from '../components/services/ServiceCard';
import { coreServices, techStack } from '../components/services/ServiceData';
import { motion } from 'framer-motion';
import ContactCTA from '../components/home/ContactCTA';

const ServicesPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive IT solutions designed to help your business thrive"
        bgImage="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Services Section */}
      <section className="section" id="services">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              From web development to enterprise solutions, we provide a comprehensive range of IT services to meet your business needs.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => (
              <div key={service.id} id={service.id}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  delay={index * 0.1}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-title">Our Technology Stack</h2>
            <p className="section-subtitle">
              We leverage cutting-edge technologies to deliver the best solutions for our clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <motion.div 
                key={category}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="mb-4 text-xl font-semibold capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              We follow a structured approach to ensure that we deliver the best results for our clients.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative">
              {/* Process Timeline */}
              <div className="absolute left-0 top-0 bottom-0 ml-5 hidden w-0.5 bg-primary-200 dark:bg-primary-900 md:block"></div>
              
              {/* Process Steps */}
              {[
                { 
                  title: "Discovery", 
                  description: "We begin by understanding your business, goals, challenges, and requirements through in-depth consultations." 
                },
                { 
                  title: "Planning", 
                  description: "Based on the discovery phase, we create a detailed plan outlining the scope, timeline, and deliverables." 
                },
                { 
                  title: "Design", 
                  description: "Our design team creates wireframes and mockups that align with your brand and business objectives." 
                },
                { 
                  title: "Development", 
                  description: "Our development team brings the designs to life using the latest technologies and best practices." 
                },
                { 
                  title: "Testing", 
                  description: "Rigorous testing ensures that the solution is bug-free, secure, and performs optimally." 
                },
                { 
                  title: "Deployment", 
                  description: "Once approved, we deploy the solution to production and ensure a smooth transition." 
                },
                { 
                  title: "Support", 
                  description: "We provide ongoing support and maintenance to ensure that your solution continues to perform at its best." 
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative mb-12 flex gap-6 md:gap-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Number Circle (Desktop) */}
                  <div className="hidden md:block">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    {/* Number (Mobile) */}
                    <div className="mb-2 flex items-center md:hidden">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm text-white">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default ServicesPage;
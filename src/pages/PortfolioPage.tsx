import React from 'react';
import PageHeader from '../components/common/PageHeader';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import { portfolioProjects } from '../components/portfolio/PortfolioData';
import ContactCTA from '../components/home/ContactCTA';
import { motion } from 'framer-motion';

const PortfolioPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Our Portfolio" 
        subtitle="Explore our recent projects and the solutions we've delivered"
        bgImage="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-title">Our Work</h2>
            <p className="section-subtitle">
              We take pride in the solutions we've developed for our clients. Browse through our recent projects to see what we can do for you.
            </p>
          </div>

          <PortfolioGrid projects={portfolioProjects} />
        </div>
      </section>

      <section className="section bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">Our Approach</h2>
            <p className="section-subtitle">
              We follow a proven methodology to ensure the success of every project we undertake.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Research & Strategy",
                description: "We analyze your business needs, target audience, and project requirements to create a strategic roadmap.",
                icon: "🎯"
              },
              {
                number: "02",
                title: "Design & Development",
                description: "Our team crafts user-centered designs and builds robust solutions using cutting-edge technologies.",
                icon: "⚡"
              },
              {
                number: "03",
                title: "Testing & Quality",
                description: "Rigorous testing ensures your solution is bug-free, secure, and performs optimally across all devices.",
                icon: "🔍"
              },
              {
                number: "04",
                title: "Launch & Support",
                description: "We handle smooth deployment and provide ongoing maintenance to keep your project running perfectly.",
                icon: "🚀"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="card flex flex-col items-center text-center group hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-2xl group-hover:bg-primary-200 transition-colors duration-300 dark:bg-primary-900/30 dark:group-hover:bg-primary-900/50">
                  {step.icon}
                </div>
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">Metrics That Matter</h2>
            <p className="section-subtitle">
              Our work drives real results for our clients across various industries.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "150+",
                label: "Projects Completed",
              },
              {
                value: "40+",
                label: "Happy Clients",
              },
              {
                value: "12+",
                label: "Industries Served",
              },
              {
                value: "8+",
                label: "Years of Experience",
              }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="card flex flex-col items-center text-center p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="mb-2 text-4xl font-bold text-primary-600">{stat.value}</h3>
                <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default PortfolioPage;
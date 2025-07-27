import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/home/ContactCTA';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "With over 15 years of experience in IT, John leads BitLab with a vision to deliver innovative solutions that drive business growth."
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Sarah oversees all technical aspects of BitLab, ensuring we stay at the forefront of technology trends and deliver cutting-edge solutions."
    },
    {
      name: "Michael Chen",
      position: "Lead Developer",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Michael leads our development team with expertise in multiple programming languages and a passion for clean, efficient code."
    },
    {
      name: "Emma Rodriguez",
      position: "UX/UI Designer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Emma brings creativity and user-centered design principles to every project, creating intuitive and engaging interfaces."
    }
  ];

  return (
    <>
      <PageHeader 
        title="About BitLab" 
        subtitle="Learn more about our company, mission, and the team behind our success"
        bgImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section">
        <div className="container-custom">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="BitLab Team"
                className="w-full rounded-xl shadow-lg"
              />
            </motion.div>
            
            {/* Content column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Story</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Founded in 2015, BitLab began with a simple mission: to provide businesses with technology solutions that drive growth and efficiency. What started as a small team of passionate technologists has grown into a full-service IT company serving clients across multiple industries.
              </p>
              <p className="mb-8 text-gray-600 dark:text-gray-400">
                Our journey has been defined by a commitment to excellence, innovation, and client satisfaction. We've evolved our service offerings to meet the changing needs of businesses in the digital age, always staying at the forefront of technological advancements.
              </p>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Award className="mt-1 h-6 w-6 text-primary-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Excellence</h3>
                    <p className="text-gray-600 dark:text-gray-400">Committed to delivering the highest quality solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="mt-1 h-6 w-6 text-primary-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Collaboration</h3>
                    <p className="text-gray-600 dark:text-gray-400">Working closely with clients as trusted partners</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-6 w-6 text-primary-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Reliability</h3>
                    <p className="text-gray-600 dark:text-gray-400">Consistent delivery of projects on time and on budget</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-6 w-6 text-primary-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Efficiency</h3>
                    <p className="text-gray-600 dark:text-gray-400">Streamlined processes that maximize value</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We strive to be a trusted partner for our clients, delivering exceptional value through our expertise, reliability, and commitment to excellence.
              </p>
            </motion.div>
            
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400">
                To be the leading provider of innovative IT solutions, recognized for our technical excellence, client-focused approach, and ability to deliver transformative results. We aspire to create lasting partnerships with our clients and make a positive impact through technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="section">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Our talented professionals bring diverse skills and expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="h-64 w-full object-cover object-center"
                  />
                </div>
                <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-primary-600 dark:text-primary-400">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="section bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-title">Why Choose BitLab</h2>
            <p className="section-subtitle">
              We differentiate ourselves through our commitment to excellence, innovation, and client satisfaction.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Complete Business Solutions",
                description: "From company registration to digital transformation, we provide end-to-end solutions for Sri Lankan businesses."
              },
              {
                title: "SME-Optimized Services",
                description: "All our solutions are specifically designed and priced for small and medium enterprises in Sri Lanka."
              },
              {
                title: "Single Trusted Partner",
                description: "One partner for all your business needs across legal, digital, creative, and strategic domains."
              },
              {
                title: "Affordable & Scalable",
                description: "Cost-effective solutions that grow with your business, designed for the Sri Lankan market."
              },
              {
                title: "Entrepreneurial Journey Support",
                description: "We guide you through every stage of your business journey, from startup to scale-up."
              },
              {
                title: "Proven Success Stories",
                description: "Track record of turning Sri Lankan startups into thriving businesses across various industries."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default AboutPage;
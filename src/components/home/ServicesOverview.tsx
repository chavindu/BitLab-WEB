import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useServices } from '../../hooks/useServices';

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
  const { services, isLoading, error } = useServices();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading services: {error}</div>;
  }

  return (
    <section className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of IT services to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <div className="mb-4 rounded-lg bg-primary-50 p-3 dark:bg-gray-700">
                <span className="text-2xl text-primary-600">{service.icon}</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">{service.description}</p>
              <Link 
                to={`/services#${service.id}`} 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Learn more
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
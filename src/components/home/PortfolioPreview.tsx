import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Hospital Management System",
    category: "Custom Application",
    image: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Restaurant Point of Sale",
    category: "Software Development",
    image: "https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Legal Services Branding",
    category: "Branding & Design",
    image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const PortfolioPreview = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="section">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="section-title">Our Recent Projects</h2>
          <p className="section-subtitle">
            Explore some of our successful projects that demonstrate our expertise and capabilities.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div 
                className="aspect-[4/3] overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-full w-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 text-white opacity-100 transition-all duration-300">
                <span className="mb-2 text-sm font-medium text-primary-300">{project.category}</span>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/portfolio" 
            className="group inline-flex items-center gap-2 text-lg font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            View Complete Portfolio
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
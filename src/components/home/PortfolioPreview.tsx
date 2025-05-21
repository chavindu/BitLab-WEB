import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePortfolio } from '../../hooks/usePortfolio';

const PortfolioPreview = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { portfolio, isLoading, error } = usePortfolio();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading portfolio: {error}</div>;
  }

  // Take only the first 4 projects for the preview
  const previewProjects = portfolio.slice(0, 4);

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
          {previewProjects.map((project) => (
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
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image_url}
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
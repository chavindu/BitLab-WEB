import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center justify-center py-16">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 text-8xl font-bold text-primary-600">404</h1>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Page Not Found</h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link 
                to="/" 
                className="btn btn-primary gap-2"
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-outline gap-2"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
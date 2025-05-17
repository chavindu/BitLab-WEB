import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <motion.div 
          className="overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 px-6 py-16 text-center text-white md:px-16 md:py-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to transform your business?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Contact our team today to discuss how BitLab can help you leverage technology 
            to achieve your business goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link 
              to="/contact" 
              className="btn bg-white text-primary-700 hover:bg-gray-100 focus-visible:ring-white group inline-flex items-center gap-2 px-6 py-3"
            >
              Get Started Today
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/services" 
              className="btn border-2 border-white/50 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
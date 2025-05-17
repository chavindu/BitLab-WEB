import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const AboutPreview = () => {
  const benefits = [
    "Expert team with diverse technical skill sets",
    "Proven track record of successful projects",
    "Customized solutions for your specific needs",
    "Ongoing support and maintenance",
    "Transparent communication throughout the process",
    "Commitment to innovation and excellence"
  ];

  return (
    <section className="section overflow-hidden">
      <div className="container-custom">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image side */}
          <motion.div
            className="overflow-hidden rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="BitLab Team Collaboration"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Who We Are</h2>
            <div className="mb-6 h-1 w-20 bg-primary-600"></div>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              BitLab is a premier IT company dedicated to delivering innovative technological solutions 
              to businesses of all sizes. With our team of skilled professionals, we strive to provide 
              exceptional services that drive growth and efficiency.
            </p>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              Our mission is to empower organizations with cutting-edge technology solutions that 
              solve complex problems and create lasting value. We combine technical expertise with 
              industry knowledge to deliver results that exceed expectations.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn btn-primary px-6 py-3">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team to discuss how we can help your business"
        bgImage="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have a question or want to discuss a project? We'd love to hear from you. 
              Reach out to us using the contact information below or fill out the form.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {/* Contact Info */}
            <div>
              <h3 className="mb-6 text-xl font-semibold">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a 
                  href="https://maps.app.goo.gl/VSshuvkhxtJXKdif7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                      No 63, Wattegedara Road,<br />
                      Maharagama</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <div className="flex flex-col">
                  <a href="tel:+94705105177" className="footer-link">070 510 5177</a>
                  <a href="tel:+94707107177" className="footer-link">070 710 7177</a>
                </div>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="mailto:contact@bitlab.lk" className="hover:text-primary-600 dark:hover:text-primary-400">
                        contact@bitlab.lk
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://x.com/BitLabLK" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-primary-500 hover:text-white dark:bg-gray-700 dark:text-gray-300"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/bitlab-lk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-primary-500 hover:text-white dark:bg-gray-700 dark:text-gray-300"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/bitlab.lk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-primary-500 hover:text-white dark:bg-gray-700 dark:text-gray-300"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com/bitlab.lk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-primary-500 hover:text-white dark:bg-gray-700 dark:text-gray-300"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="card">
                <h3 className="mb-6 text-xl font-semibold">Send Us a Message</h3>
                
                <form>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        className="form-input" 
                        placeholder="John" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        className="form-input" 
                        placeholder="Doe" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="form-input" 
                      placeholder="john.doe@example.com" 
                      required 
                    />
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="phone" className="form-label">Phone (optional)</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="form-input" 
                      placeholder="+1 (234) 567-8901" 
                    />
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className="form-input" 
                      placeholder="Project Inquiry" 
                      required 
                    />
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6} 
                      className="form-input" 
                      placeholder="Please describe your project or inquiry..." 
                      required 
                    ></textarea>
                  </div>
                  
                  <div className="mt-6">
                    <button 
                      type="submit"
                      className="btn btn-primary w-full py-3"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-title">Our Location</h2>
            <p className="section-subtitle">
              Visit our office or schedule a meeting with our team.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl bg-white shadow-md dark:bg-gray-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2038.7080413570518!2d79.91916565749365!3d6.849785975521217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250787eb6fb7f%3A0x53e9477de33c1b29!2s63%20Wattegedara%20Rd%2C%20Maharagama%2010280!5e0!3m2!1sen!2slk!4v1753643083525!5m2!1sen!2slk" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="BitLab Office Location - Maharagama"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              {[
                {
                  question: "What types of businesses do you work with?",
                  answer: "We work with businesses of all sizes across various industries, including healthcare, finance, retail, education, and more. Our solutions are customized to meet the specific needs of each client."
                },
                {
                  question: "How long does a typical web development project take?",
                  answer: "The timeline for a web development project depends on the complexity and scope of the project. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months or more. We'll provide a detailed timeline during the planning phase."
                },
                {
                  question: "Do you provide maintenance and support after project completion?",
                  answer: "Yes, we offer ongoing maintenance and support services to ensure that your solution continues to function optimally. We can provide regular updates, security patches, and technical support as needed."
                },
                {
                  question: "How do you handle project pricing?",
                  answer: "Our pricing is based on the scope, complexity, and requirements of each project. We provide detailed proposals that outline the costs and deliverables. For some services, we offer monthly retainer options or subscription-based pricing."
                },
                {
                  question: "Can you help with an existing project or do you only work on new projects?",
                  answer: "We can help with both new projects and existing ones. If you have an existing project that needs improvement, maintenance, or new features, our team can assess the current state and provide recommendations for moving forward."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="mb-3 text-lg font-semibold">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "BitLab transformed our outdated systems into a modern digital platform that has significantly improved our operational efficiency. Their team was professional, responsive, and delivered exactly what we needed.",
    author: "Sarah Johnson",
    position: "CTO, Global Retail Solutions",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    text: "Working with BitLab on our hospital management system was a game-changer. They understood our complex requirements and delivered a solution that has streamlined our processes and improved patient care.",
    author: "Dr. Michael Chen",
    position: "Director, Metropolitan Medical Center",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    text: "BitLab's expertise in e-commerce development helped us launch our online store in record time. The site is beautiful, fast, and has significantly increased our conversion rates. I highly recommend their services.",
    author: "Emma Rodriguez",
    position: "Founder, Artisan Goods Co.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/70">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it – hear from some of our satisfied clients about their experiences working with BitLab.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Testimonial card */}
          <div className="relative min-h-[360px] overflow-hidden">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              className="card flex h-full flex-col items-center px-6 py-10 text-center md:px-12"
            >
              <Quote className="mb-6 h-12 w-12 rotate-180 text-primary-300" />
              <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 md:text-xl">
                "{testimonials[activeIndex].text}"
              </p>
              <div className="mt-auto">
                <div className="mx-auto mb-4 h-16 w-16 overflow-hidden rounded-full">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h4 className="mb-1 text-lg font-semibold">
                  {testimonials[activeIndex].author}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonials[activeIndex].position}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 right-0 z-10 flex -translate-y-1/2 justify-between px-4">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md backdrop-blur-sm transition-colors hover:bg-primary-50 dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-700/90"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md backdrop-blur-sm transition-colors hover:bg-primary-50 dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-700/90"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-6 bg-primary-600'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
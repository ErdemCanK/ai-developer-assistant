
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Alex Chen',
      role: 'CTO',
      company: 'TechForward',
      content: 'Operarius has transformed our development process. We're shipping features twice as fast with half the bugs. The AI code suggestions are uncannily accurate.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Lead Developer',
      company: 'InnovateCorp',
      content: 'As a tech lead, I was skeptical about AI coding tools, but Operarius changed my mind. It handles the repetitive tasks while allowing our team to focus on complex architecture decisions.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Miguel Rodriguez',
      role: 'Solo Developer',
      company: 'Freelancer',
      content: 'For independent developers like me, Operarius is like having a team of junior devs at your fingertips. It's helped me take on larger projects with confidence.',
      rating: 4,
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop',
    },
  ];

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(next, 8000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, current]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <div 
      className="relative w-full overflow-hidden py-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container-custom">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white dark:bg-black/20 rounded-xl shadow-sm border p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <Avatar className="w-16 h-16 md:w-20 md:h-20">
                  <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].name} />
                  <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-grow">
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonials[current].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl font-medium italic mb-6">
                  "{testimonials[current].content}"
                </p>
                
                <div>
                  <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                  <p className="text-muted-foreground">
                    {testimonials[current].role}, {testimonials[current].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index ? "bg-primary w-8" : "bg-muted-foreground/30"
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
          <button
            onClick={prev}
            className="bg-white dark:bg-black/20 text-foreground h-10 w-10 rounded-full flex items-center justify-center shadow-sm border pointer-events-auto hover:bg-accent hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="bg-white dark:bg-black/20 text-foreground h-10 w-10 rounded-full flex items-center justify-center shadow-sm border pointer-events-auto hover:bg-accent hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

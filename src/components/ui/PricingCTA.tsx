
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

const PricingCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="py-24 relative">
      <div className="container-custom max-w-4xl">
        <FadeIn>
          <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative bg-gradient-to-tr from-primary/10 via-accent/10 to-primary/5 rounded-2xl shadow-sm border overflow-hidden"
          >
            {/* Background particle effects */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  y: isHovered ? -10 : 0,
                  opacity: isHovered ? 1 : 0.7,
                }}
                transition={{ duration: 0.5 }}
                className="absolute top-10 right-10 w-24 h-24 rounded-full bg-primary/20 blur-2xl"
              />
              <motion.div
                animate={{
                  y: isHovered ? 10 : 0,
                  opacity: isHovered ? 1 : 0.7,
                }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-accent/20 blur-2xl"
              />
            </div>
            
            <div className="relative p-8 md:p-12 text-center">
              <motion.div 
                animate={{
                  scale: isHovered ? 1.02 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent mb-6">
                  <Sparkles size={14} className="mr-1" />
                  Get Started Today
                </span>
                
                <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                  Ready to transform your development workflow?
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Choose from flexible plans that grow with your needs. Every plan includes core AI features, with advanced capabilities available in higher tiers.
                </p>
                
                <motion.div
                  animate={{
                    y: isHovered ? -5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 mr-4">
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/docs">Read Documentation</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};

export default PricingCTA;

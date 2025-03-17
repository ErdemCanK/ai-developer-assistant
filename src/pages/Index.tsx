
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code,
  Cpu,
  Settings,
  ArrowRight,
  Zap,
  FileCheck,
  Users,
  Layers,
  User,
  Rocket,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import AnimatedGradient from '@/components/ui/AnimatedGradient';
import FeatureCard from '@/components/ui/FeatureCard';
import PersonaCard from '@/components/ui/PersonaCard';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import PricingCTA from '@/components/ui/PricingCTA';
import FadeIn from '@/components/animations/FadeIn';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  // Simulate code typing effect
  const [displayedCode, setDisplayedCode] = React.useState('');
  const fullCode = `// Generate code with AI
const createComponent = async (prompt) => {
  const component = await ai.generate({
    prompt,
    language: 'react',
    test: true
  });
  
  return component;
};

// Example usage
const navbar = await createComponent(
  "Create a responsive navbar with logo and links"
);`;

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < fullCode.length) {
        setDisplayedCode(fullCode.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        
        // Reset after a delay
        setTimeout(() => {
          currentIndex = 0;
          setDisplayedCode('');
          
          // Restart the typing effect
          setTimeout(() => {
            const newInterval = setInterval(() => {
              if (currentIndex < fullCode.length) {
                setDisplayedCode(fullCode.slice(0, currentIndex + 1));
                currentIndex++;
              } else {
                clearInterval(newInterval);
              }
            }, 30);
          }, 1000);
        }, 3000);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, []);
  
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Code Writing',
      description: 'Generate high-quality code from natural language descriptions, reducing development time by up to 70%.',
      color: 'text-purple-500',
    },
    {
      icon: FileCheck,
      title: 'Automated Testing',
      description: 'Create comprehensive test suites automatically, ensuring better code quality and fewer bugs.',
      color: 'text-blue-500',
    },
    {
      icon: Settings,
      title: 'Customizable Agent',
      description: 'Train the AI on your codebase and style preferences for personalized code suggestions.',
      color: 'text-teal-500',
    },
    {
      icon: Layers,
      title: 'Seamless Integrations',
      description: 'Works with your existing tools including GitHub, GitLab, VS Code, and more with easy setup.',
      color: 'text-amber-500',
    },
  ];
  
  const personas = [
    {
      icon: User,
      title: 'Solo Developers',
      description: 'Multiply your productivity and take on larger projects with AI assistance that fills the gaps in your workflow.',
    },
    {
      icon: Rocket,
      title: 'Startups',
      description: 'Move faster from ideation to production with automated code generation and testing, saving crucial time-to-market.',
    },
    {
      icon: Users,
      title: 'Enterprise Teams',
      description: 'Standardize code quality across large teams and reduce onboarding time for new developers with intelligent assistance.',
    },
  ];
  
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        ref={targetRef}
        className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
        style={{ opacity, scale, y }}
      >
        <AnimatedGradient intensity="light" colors={['#4f46e5', '#8b5cf6', '#a855f7']} />
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <FadeIn delay={0.1}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
                  The AI Developer Agent That<br className="hidden md:inline" /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Writes, Tests, and Deploys
                  </span><br className="hidden md:inline" /> 
                  for You
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                  Automate your development process. Reduce coding time, improve testing, and scale effortlessly.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    asChild
                    className="bg-primary hover:bg-primary/90 font-medium"
                  >
                    <Link to="/sign-up">
                      Get Started for Free
                    </Link>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={scrollToFeatures}
                    className="group"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn delay={0.4}>
                <div className="bg-black/90 text-white p-6 rounded-xl shadow-lg font-mono text-sm leading-relaxed">
                  <pre className="relative overflow-auto max-h-[400px]">
                    <code>
                      {displayedCode}
                      <span className="animate-pulse">|</span>
                    </code>
                  </pre>
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>
      </motion.section>
      
      {/* Features Section */}
      <section id="features" className="relative py-24 bg-secondary/50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                Powerful Features to Supercharge Your Development Workflow
              </h2>
              <p className="text-muted-foreground text-lg">
                Our AI-powered platform streamlines coding, testing, and deployment processes to help you build better software faster.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Who is it for Section */}
      <section className="py-24 relative">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                Who is it For?
              </h2>
              <p className="text-muted-foreground text-lg">
                Operarius is designed to help developers at every scale, from solo innovators to enterprise teams.
              </p>
            </div>
          </FadeIn>
          
          <div className="flex overflow-x-auto pb-8 gap-8 px-4 md:px-8 -mx-4 md:-mx-8">
            <div className="flex">
              {personas.map((persona, index) => (
                <PersonaCard
                  key={persona.title}
                  icon={persona.icon}
                  title={persona.title}
                  description={persona.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="relative py-24 bg-secondary/50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                Trusted by Developers
              </h2>
              <p className="text-muted-foreground text-lg">
                Hear what our users have to say about their experience with Operarius.
              </p>
            </div>
          </FadeIn>
          
          <TestimonialCarousel />
        </div>
      </section>
      
      {/* Pricing CTA */}
      <PricingCTA />
      
      <Footer />
    </>
  );
};

export default Index;

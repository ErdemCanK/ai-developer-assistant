
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Zap,
  FileCheck,
  Settings,
  Layers,
  GitBranch,
  Terminal,
  Database,
  Lock,
  RefreshCw,
  Globe,
  Cpu,
  Code,
  BarChart,
  Clock,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import FadeIn from '@/components/animations/FadeIn';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Features = () => {
  const primaryFeatures = [
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
  
  const secondaryFeatures = [
    {
      icon: GitBranch,
      title: 'Version Control Integration',
      description: 'Seamlessly works with Git, automatically creating branches, commits, and PRs based on changes.',
    },
    {
      icon: Terminal,
      title: 'CLI Support',
      description: 'Use the powerful command-line interface for advanced workflows and automation scripts.',
    },
    {
      icon: Database,
      title: 'Schema Generation',
      description: 'Automatically create database schemas and migrations from natural language descriptions.',
    },
    {
      icon: Lock,
      title: 'Security Scanning',
      description: 'Identify and fix security vulnerabilities in your code before they reach production.',
    },
    {
      icon: RefreshCw,
      title: 'Continuous Updates',
      description: 'Stay current with the latest frameworks and best practices with automatic suggestions.',
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Works with JavaScript, TypeScript, Python, Java, Go, Ruby, and many other languages.',
    },
  ];
  
  const metrics = [
    { label: 'Average development time savings', value: '67%' },
    { label: 'Reduction in bugs', value: '42%' },
    { label: 'Increase in test coverage', value: '85%' },
    { label: 'Developers using Operarius daily', value: '10K+' },
  ];
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background -z-10" />
        
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6">
                Powerful Features to Transform Your Development Workflow
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover how Operarius can help you build better software faster with AI-powered assistance at every step.
              </p>
              <Button size="lg" asChild>
                <Link to="/sign-up">Start Using Operarius</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Primary Features */}
      <section className="py-24">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Core Capabilities
              </h2>
              <p className="text-muted-foreground text-lg">
                Our flagship features that form the foundation of the Operarius platform.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {primaryFeatures.map((feature, index) => (
              <FadeIn key={feature.title} delay={0.1 * index}>
                <div className="bg-white dark:bg-black/20 rounded-xl p-8 border shadow-sm">
                  <div className={`${feature.color} bg-background inline-flex items-center justify-center p-3 rounded-lg mb-6`}>
                    <feature.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Metrics */}
      <section className="py-16 bg-secondary/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <FadeIn key={metric.label} delay={0.1 * index}>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-display font-bold text-primary mb-2"
                  >
                    {metric.value}
                  </motion.div>
                  <p className="text-muted-foreground">{metric.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Secondary Features */}
      <section className="py-24">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Additional Features
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore the full range of tools and capabilities available with Operarius.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryFeatures.map((feature, index) => (
              <FadeIn key={feature.title} delay={0.05 * index}>
                <div className="bg-white dark:bg-black/20 rounded-xl p-6 border shadow-sm h-full">
                  <div className="text-accent mb-4">
                    <feature.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-24 bg-secondary/50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Use Cases
              </h2>
              <p className="text-muted-foreground text-lg">
                See how different teams leverage Operarius to improve their workflow.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white dark:bg-black/20 rounded-xl p-8 border shadow-sm">
                <div className="text-blue-500 mb-6">
                  <Code size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Rapid Prototyping</h3>
                <p className="text-muted-foreground mb-4">
                  Quickly bring ideas to life with AI-generated code scaffolding and working prototypes that can be refined over time.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Generate working components from descriptions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Create interactive wireframes
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Iterate rapidly with instant feedback
                  </li>
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white dark:bg-black/20 rounded-xl p-8 border shadow-sm">
                <div className="text-purple-500 mb-6">
                  <BarChart size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
                <p className="text-muted-foreground mb-4">
                  Automatically generate comprehensive test suites that catch bugs before they reach production.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Create unit and integration tests
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Generate edge case scenarios
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Maintain test coverage as code evolves
                  </li>
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-white dark:bg-black/20 rounded-xl p-8 border shadow-sm">
                <div className="text-teal-500 mb-6">
                  <Clock size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Legacy Code Modernization</h3>
                <p className="text-muted-foreground mb-4">
                  Transform outdated codebases into modern, maintainable systems with AI-assisted refactoring.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Upgrade to modern frameworks
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Refactor for readability and performance
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Add missing documentation and tests
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24">
        <div className="container-custom">
          <FadeIn>
            <div className="bg-white dark:bg-black/20 rounded-xl border p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
                Ready to experience the future of development?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of developers who are building faster and smarter with Operarius.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/sign-up">Get Started Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Features;

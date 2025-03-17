
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  Target,
  Award,
  Globe,
  Briefcase,
  Heart,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import FadeIn from '@/components/animations/FadeIn';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  const team = [
    {
      name: 'Jennifer Smith',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop',
      bio: 'Former AI research lead with 15+ years in the software industry, passionate about using AI to solve real developer problems.',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop',
      bio: 'Previously built developer tools at Microsoft, with deep expertise in machine learning and software architecture.',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Sophia Rodriguez',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop',
      bio: 'Product veteran with experience scaling SaaS platforms from zero to millions of users at leading tech companies.',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'David Jackson',
      role: 'Lead ML Engineer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=250&auto=format&fit=crop',
      bio: 'PhD in machine learning with a focus on NLP, bringing cutting-edge AI research into practical applications.',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    }
  ];
  
  const values = [
    {
      icon: Heart,
      title: 'Developer Empathy',
      description: 'We build with developers in mind, focusing on tools that feel natural and solve real pain points.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'We believe great software is built by teams, and our tools are designed to enhance collaboration.'
    },
    {
      icon: Target,
      title: 'Continuous Innovation',
      description: 'We're committed to pushing the boundaries of what's possible with AI and development tools.'
    },
    {
      icon: Award,
      title: 'Quality Obsession',
      description: 'We refuse to compromise on quality, ensuring our tools produce code that meets the highest standards.'
    }
  ];
  
  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Operarius began as a research project at a leading university AI lab.'
    },
    {
      year: '2021',
      title: 'Seed Funding',
      description: 'Raised $3.5M to build out the core AI platform and expand the team.'
    },
    {
      year: '2022',
      title: 'Beta Launch',
      description: 'Released our private beta to 500 developers, achieving 92% user retention.'
    },
    {
      year: '2023',
      title: 'Series A Funding',
      description: 'Secured $12M to scale the platform and integrate with major development tools.'
    },
    {
      year: '2024',
      title: 'Public Launch',
      description: 'Official launch of Operarius to the public, surpassing 10,000 active users.'
    }
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
                Our Mission
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                At Operarius, we're building the future of software development by combining human creativity with AI precision.
              </p>
              <p className="text-lg text-foreground">
                We believe that AI should augment human capabilities, not replace them.
                Our mission is to empower developers to build better software faster by handling the repetitive tasks
                and leaving the creative decisions to the humans.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-24">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg">
                The core principles that guide everything we do at Operarius.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={0.1 * index}>
                <Card className="bg-white dark:bg-black/20 border shadow-sm h-full">
                  <CardHeader>
                    <div className="mb-4 text-primary">
                      <value.icon size={28} strokeWidth={1.5} />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground text-lg">
                The passionate people behind Operarius who make everything possible.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={0.1 * index}>
                <div className="bg-white dark:bg-black/20 rounded-xl overflow-hidden border shadow-sm group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="w-full p-4 flex justify-center space-x-3">
                        <a href={member.social.twitter} className="text-white hover:text-primary">
                          <Twitter size={18} />
                        </a>
                        <a href={member.social.linkedin} className="text-white hover:text-primary">
                          <Linkedin size={18} />
                        </a>
                        <a href={member.social.github} className="text-white hover:text-primary">
                          <Github size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company History */}
      <section className="py-24">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground text-lg">
                From humble beginnings to where we are today.
              </p>
            </div>
          </FadeIn>
          
          <div className="relative mx-auto max-w-3xl">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
            
            {milestones.map((milestone, index) => (
              <FadeIn key={milestone.year} delay={0.1 * index}>
                <div className={`relative z-10 mb-16 flex items-center ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'} md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pr-8' : 'md:mr-auto md:pl-8'}`}>
                  <div className="bg-white dark:bg-black/20 shadow-sm border rounded-xl p-6 w-full max-w-sm">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary text-white text-sm font-medium py-1 px-3 rounded-full mr-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                  
                  {/* Circle Indicator */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-primary rounded-full h-4 w-4 z-10 shadow"></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-display font-semibold mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  We'd love to hear from you. Reach out with questions, feedback, or partnership opportunities.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@operarius.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Office</h3>
                      <p className="text-muted-foreground">123 Innovation Way, San Francisco, CA 94107</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white dark:bg-black/20 w-10 h-10 rounded-full flex items-center justify-center border transition-colors hover:bg-primary hover:text-white">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="bg-white dark:bg-black/20 w-10 h-10 rounded-full flex items-center justify-center border transition-colors hover:bg-primary hover:text-white">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="bg-white dark:bg-black/20 w-10 h-10 rounded-full flex items-center justify-center border transition-colors hover:bg-primary hover:text-white">
                      <Github size={18} />
                    </a>
                    <a href="#" className="bg-white dark:bg-black/20 w-10 h-10 rounded-full flex items-center justify-center border transition-colors hover:bg-primary hover:text-white">
                      <Globe size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white dark:bg-black/20 rounded-xl border shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Message subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24">
        <div className="container-custom">
          <FadeIn>
            <div className="bg-white dark:bg-black/20 border rounded-xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
                Join Us in Shaping the Future of Development
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're a developer, investor, or potential team member, we'd love to connect and explore how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/sign-up">Get Started Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/careers">View Careers</Link>
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

export default About;

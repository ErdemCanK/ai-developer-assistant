
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, HelpCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import FadeIn from '@/components/animations/FadeIn';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans = [
    {
      name: 'Free',
      description: 'For individual developers getting started with AI assistance.',
      priceMonthly: '$0',
      priceYearly: '$0',
      features: [
        'AI code generation (100 requests/month)',
        'Basic project templates',
        'GitHub integration',
        'Community support',
      ],
      cta: 'Get Started',
      ctaLink: '/sign-up',
      popular: false,
    },
    {
      name: 'Pro',
      description: 'For professional developers and small teams.',
      priceMonthly: '$19',
      priceYearly: '$190',
      yearlyDiscount: 'Save $38',
      features: [
        'AI code generation (unlimited)',
        'Automated testing & QA',
        'Custom project templates',
        'Priority support',
        'API access',
        'Advanced IDE integrations',
      ],
      cta: 'Start Free Trial',
      ctaLink: '/sign-up?plan=pro',
      popular: true,
    },
    {
      name: 'Team',
      description: 'For development teams and organizations.',
      priceMonthly: '$49',
      priceYearly: '$490',
      yearlyDiscount: 'Save $98',
      features: [
        'Everything in Pro',
        'Team collaboration features',
        'Advanced security controls',
        'Custom model training',
        'Usage analytics',
        'Dedicated support',
        'SSO & enterprise auth',
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact',
      popular: false,
    },
  ];
  
  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'Our 14-day free trial gives you full access to all Pro features with no credit card required. At the end of your trial, you can choose to subscribe or downgrade to the Free plan.',
    },
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade, downgrade, or cancel your subscription at any time. If you upgrade, the new rate will be prorated for the remainder of your billing cycle.',
    },
    {
      question: 'Is there a limit to the AI code generation?',
      answer: 'The Free plan includes 100 AI code generation requests per month. Pro and Team plans offer unlimited requests, subject to fair usage policies to prevent abuse.',
    },
    {
      question: 'Do you offer educational or non-profit discounts?',
      answer: 'Yes, we offer special pricing for educational institutions, non-profit organizations, and open source projects. Please contact our support team for more information.',
    },
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
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Choose the plan that's right for you and start building better software faster.
              </p>
              
              <div className="bg-white dark:bg-black/20 p-1 rounded-full inline-flex mb-8">
                <button
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    billingCycle === 'monthly'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                  onClick={() => setBillingCycle('monthly')}
                >
                  Monthly
                </button>
                <button
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    billingCycle === 'yearly'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                  onClick={() => setBillingCycle('yearly')}
                >
                  Yearly
                  <span className="ml-1 bg-green-100 text-green-800 text-xs py-0.5 px-1.5 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Pricing Cards */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <FadeIn key={plan.name} delay={0.1 * index}>
                <div className={`relative bg-white dark:bg-black/20 rounded-xl border shadow-sm p-8 h-full flex flex-col ${
                  plan.popular ? 'md:scale-105 md:-my-4 md:py-12 z-10 border-primary shadow-md' : ''
                }`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary hover:bg-primary/90">
                      Most Popular
                    </Badge>
                  )}
                  
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-display font-bold">
                      {billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly}
                    </span>
                    <span className="text-muted-foreground">
                      {plan.name !== 'Free' && `/${billingCycle === 'monthly' ? 'month' : 'year'}`}
                    </span>
                    
                    {billingCycle === 'yearly' && plan.yearlyDiscount && (
                      <p className="text-green-600 text-sm mt-1">
                        {plan.yearlyDiscount}
                      </p>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    asChild
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    <Link to={plan.ctaLink}>{plan.cta}</Link>
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enterprise */}
      <section className="py-24">
        <div className="container-custom max-w-5xl">
          <FadeIn>
            <div className="bg-secondary rounded-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-display font-semibold mb-4">
                    Enterprise Solutions
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Need a custom solution for your organization? Our enterprise plan includes dedicated support, custom integrations, advanced security features, and more.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-0.5" />
                      <span>Custom AI model training on your codebase</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-0.5" />
                      <span>Advanced security & compliance features</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-0.5" />
                      <span>Dedicated support and implementation team</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <Button size="lg" asChild>
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-24">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about pricing and plans.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div className="bg-white dark:bg-black/20 rounded-xl border p-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Have more questions?
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Guarantee */}
      <section className="py-16 bg-secondary/50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-display font-semibold mb-4">
                100% Satisfaction Guarantee
              </h2>
              <p className="text-muted-foreground">
                If you're not completely satisfied with Operarius within the first 30 days, we'll refund your payment. No questions asked.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Pricing;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Code, 
  Terminal, 
  BookOpen, 
  Server, 
  Database,
  Search,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import FadeIn from '@/components/animations/FadeIn';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Docs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeExamples = [
    {
      title: 'Generate Component',
      language: 'javascript',
      code: `const Button = () => {
  return (
    <button className="bg-primary text-white px-4 py-2 rounded-md">
      Click Me
    </button>
  );
};`
    },
    {
      title: 'Custom Hook',
      language: 'typescript',
      code: `import { useState, useEffect } from 'react';

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};`
    },
    {
      title: 'API Request',
      language: 'typescript',
      code: `const fetchUserData = async (userId: string) => {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};`
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background -z-10" />
        
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6">
                Documentation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to know about using Operarius effectively.
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search documentation..."
                  className="pl-10 py-6 text-base"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="bg-white dark:bg-black/20 border rounded-xl p-6 sticky top-24">
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  
                  <Accordion type="single" collapsible className="w-full" defaultValue="getting-started">
                    <AccordionItem value="getting-started">
                      <AccordionTrigger className="text-base font-medium py-2">
                        <div className="flex items-center">
                          <BookOpen size={18} className="mr-2 text-primary" />
                          <span>Getting Started</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="pl-7 space-y-2">
                          <li className="text-primary font-medium">Installation</li>
                          <li>Quick Start Guide</li>
                          <li>Configuration</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="core-concepts">
                      <AccordionTrigger className="text-base font-medium py-2">
                        <div className="flex items-center">
                          <FileText size={18} className="mr-2 text-primary" />
                          <span>Core Concepts</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="pl-7 space-y-2">
                          <li>AI Assistance</li>
                          <li>Code Generation</li>
                          <li>Testing Framework</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="api-reference">
                      <AccordionTrigger className="text-base font-medium py-2">
                        <div className="flex items-center">
                          <Server size={18} className="mr-2 text-primary" />
                          <span>API Reference</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="pl-7 space-y-2">
                          <li>Endpoints</li>
                          <li>Authentication</li>
                          <li>Rate Limits</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="examples">
                      <AccordionTrigger className="text-base font-medium py-2">
                        <div className="flex items-center">
                          <Code size={18} className="mr-2 text-primary" />
                          <span>Examples</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="pl-7 space-y-2">
                          <li>React Components</li>
                          <li>Custom Hooks</li>
                          <li>Integration Samples</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="advanced">
                      <AccordionTrigger className="text-base font-medium py-2">
                        <div className="flex items-center">
                          <Terminal size={18} className="mr-2 text-primary" />
                          <span>Advanced Topics</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="pl-7 space-y-2">
                          <li>Custom Workflows</li>
                          <li>Enterprise Integration</li>
                          <li>Performance Tuning</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="database">
                      <AccordionTrigger className="text-base font-medium py-2">
                        <div className="flex items-center">
                          <Database size={18} className="mr-2 text-primary" />
                          <span>Database</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="pl-7 space-y-2">
                          <li>Schema Design</li>
                          <li>Migrations</li>
                          <li>Query Optimization</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-9">
              <FadeIn>
                <div className="bg-white dark:bg-black/20 border rounded-xl p-6 md:p-10">
                  <Tabs defaultValue="installation">
                    <TabsList className="w-full grid grid-cols-3 mb-8">
                      <TabsTrigger value="installation">Installation</TabsTrigger>
                      <TabsTrigger value="usage">Usage</TabsTrigger>
                      <TabsTrigger value="examples">Examples</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="installation">
                      <div className="space-y-6">
                        <h2 className="text-3xl font-display font-semibold mb-4">Installation</h2>
                        <p className="text-muted-foreground">
                          Getting started with Operarius is quick and easy. Follow these steps to install and configure the platform for your development environment.
                        </p>
                        
                        <div className="mt-8 space-y-6">
                          <div className="border rounded-lg p-6 bg-secondary/10">
                            <h3 className="text-xl font-semibold mb-4">1. Install the CLI</h3>
                            <p className="mb-4 text-muted-foreground">
                              First, install our command-line interface using npm, yarn, or pnpm:
                            </p>
                            
                            <div className="relative bg-black p-4 rounded-md font-mono text-white text-sm overflow-auto">
                              <code>npm install -g operarius-cli</code>
                              <button 
                                className="absolute right-2 top-2 p-1 hover:bg-white/10 rounded"
                                onClick={() => handleCopy("npm install -g operarius-cli", 0)}
                              >
                                {copiedIndex === 0 ? <Check size={16} /> : <Copy size={16} />}
                              </button>
                            </div>
                          </div>
                          
                          <div className="border rounded-lg p-6 bg-secondary/10">
                            <h3 className="text-xl font-semibold mb-4">2. Initialize Your Project</h3>
                            <p className="mb-4 text-muted-foreground">
                              Create a new project or initialize Operarius in an existing project:
                            </p>
                            
                            <div className="relative bg-black p-4 rounded-md font-mono text-white text-sm overflow-auto">
                              <code>operarius init my-project</code>
                              <button 
                                className="absolute right-2 top-2 p-1 hover:bg-white/10 rounded"
                                onClick={() => handleCopy("operarius init my-project", 1)}
                              >
                                {copiedIndex === 1 ? <Check size={16} /> : <Copy size={16} />}
                              </button>
                            </div>
                          </div>
                          
                          <div className="border rounded-lg p-6 bg-secondary/10">
                            <h3 className="text-xl font-semibold mb-4">3. Configure Your Settings</h3>
                            <p className="mb-4 text-muted-foreground">
                              Set up your preferences and API keys in the configuration file:
                            </p>
                            
                            <div className="relative bg-black p-4 rounded-md font-mono text-white text-sm overflow-auto">
                              <code>operarius config --api-key YOUR_API_KEY</code>
                              <button 
                                className="absolute right-2 top-2 p-1 hover:bg-white/10 rounded"
                                onClick={() => handleCopy("operarius config --api-key YOUR_API_KEY", 2)}
                              >
                                {copiedIndex === 2 ? <Check size={16} /> : <Copy size={16} />}
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-10 p-4 bg-secondary/20 rounded-lg flex items-start">
                          <div className="text-amber-500 mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="12"></line>
                              <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              <strong>Note:</strong> For Windows users, you may need to run PowerShell as an administrator when installing the CLI globally.
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="usage">
                      <div className="space-y-6">
                        <h2 className="text-3xl font-display font-semibold mb-4">Basic Usage</h2>
                        <p className="text-muted-foreground">
                          Learn how to use Operarius to streamline your development workflow. Below are common commands and patterns to help you get the most out of the platform.
                        </p>
                        
                        <div className="mt-8 space-y-8">
                          <div>
                            <h3 className="text-xl font-semibold mb-4">Generating Components</h3>
                            <p className="mb-4 text-muted-foreground">
                              Create new React components with a simple command:
                            </p>
                            
                            <div className="relative bg-black p-4 rounded-md font-mono text-white text-sm overflow-auto">
                              <code>operarius generate component Button --type="primary" --variant="outlined"</code>
                              <button 
                                className="absolute right-2 top-2 p-1 hover:bg-white/10 rounded"
                                onClick={() => handleCopy('operarius generate component Button --type="primary" --variant="outlined"', 3)}
                              >
                                {copiedIndex === 3 ? <Check size={16} /> : <Copy size={16} />}
                              </button>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-semibold mb-4">Running AI Tests</h3>
                            <p className="mb-4 text-muted-foreground">
                              Automatically generate and run tests for your components:
                            </p>
                            
                            <div className="relative bg-black p-4 rounded-md font-mono text-white text-sm overflow-auto">
                              <code>operarius test --component=Button --coverage</code>
                              <button 
                                className="absolute right-2 top-2 p-1 hover:bg-white/10 rounded"
                                onClick={() => handleCopy('operarius test --component=Button --coverage', 4)}
                              >
                                {copiedIndex === 4 ? <Check size={16} /> : <Copy size={16} />}
                              </button>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-semibold mb-4">Refactoring Code</h3>
                            <p className="mb-4 text-muted-foreground">
                              Use AI to refactor existing code to improve quality and performance:
                            </p>
                            
                            <div className="relative bg-black p-4 rounded-md font-mono text-white text-sm overflow-auto">
                              <code>operarius refactor --file=src/components/OldComponent.tsx --target=modern</code>
                              <button 
                                className="absolute right-2 top-2 p-1 hover:bg-white/10 rounded"
                                onClick={() => handleCopy('operarius refactor --file=src/components/OldComponent.tsx --target=modern', 5)}
                              >
                                {copiedIndex === 5 ? <Check size={16} /> : <Copy size={16} />}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="examples">
                      <div className="space-y-6">
                        <h2 className="text-3xl font-display font-semibold mb-4">Code Examples</h2>
                        <p className="text-muted-foreground">
                          Learn from practical examples of how to integrate Operarius into your projects. These code snippets show common patterns and best practices.
                        </p>
                        
                        <div className="mt-8 space-y-8">
                          {codeExamples.map((example, index) => (
                            <div key={index} className="border rounded-lg p-6 bg-secondary/10">
                              <h3 className="text-xl font-semibold mb-4">{example.title}</h3>
                              
                              <div className="relative bg-black p-4 rounded-md font-mono text-white text-sm overflow-auto">
                                <pre className="whitespace-pre-wrap">{example.code}</pre>
                                <button 
                                  className="absolute right-2 top-2 p-1 hover:bg-white/10 rounded"
                                  onClick={() => handleCopy(example.code, 6 + index)}
                                >
                                  {copiedIndex === 6 + index ? <Check size={16} /> : <Copy size={16} />}
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </FadeIn>
              
              {/* Documentation Footer */}
              <FadeIn>
                <div className="mt-8 p-6 bg-white dark:bg-black/20 border rounded-xl">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Need more help?</h3>
                      <p className="text-muted-foreground">If you can't find what you're looking for in our documentation</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center">
                      <Button variant="outline" className="mr-4">
                        <ExternalLink size={16} className="mr-2" />
                        Community Forum
                      </Button>
                      <Button>Contact Support</Button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Docs;

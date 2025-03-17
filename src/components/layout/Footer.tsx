
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!');
      form.reset();
    }
  };

  return (
    <footer className="border-t bg-background">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-xl font-display font-semibold inline-block">
              <span className="text-foreground mr-1">Operarius</span>
              <span className="text-accent">.</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              The AI developer agent that writes, tests, and deploys for you,
              making software development faster and more efficient.
            </p>
            <div className="flex space-x-4 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-foreground uppercase">
              Product
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link to="/features" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-foreground uppercase">
              Company
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-foreground uppercase">
              Stay Updated
            </h4>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for updates, tips, and announcements.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="rounded-r-none"
                  required
                />
                <Button type="submit" className="rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div>
            &copy; {currentYear} Operarius. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

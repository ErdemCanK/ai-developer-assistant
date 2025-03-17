
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Documentation', path: '/docs' },
    { name: 'About', path: '/about' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? 'glassmorphism border-b shadow-sm py-3'
          : 'bg-transparent py-5'
      } transition-all duration-300`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-display font-semibold relative z-10 flex items-center"
        >
          <span className="text-foreground mr-1">Operarius</span>
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium transition duration-300 rounded-md hover:bg-black/5 ${
                  isActive ? 'text-accent' : 'text-foreground/80'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent mx-3"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/sign-up">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden relative z-10"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 right-0 bg-background border-b glassmorphism min-h-[300px] flex flex-col pt-20 pb-6 px-4 md:hidden"
            >
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `p-3 text-base font-medium rounded-md ${
                        isActive
                          ? 'bg-accent/10 text-accent'
                          : 'text-foreground/80 hover:bg-accent/5'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-6 flex flex-col space-y-3">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link to="/sign-up">Get Started</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;

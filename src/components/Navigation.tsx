
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed w-full top-0 left-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-lg py-4 shadow-lg' : 'py-6'
      )}
    >
      <div className="container flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center"
        >
          <span className="text-xl font-bold font-space-grotesk text-gradient">PropertyPulse</span>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Features', 'How It Works', 'Pricing', 'Testimonials'].map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center space-x-4"
        >
          <a 
            href="#contact" 
            className="hidden md:inline-flex px-4 py-2 text-sm text-gray-300 hover:text-white border border-gray-700 rounded-full transition-colors"
          >
            Login
          </a>
          <a 
            href="#demo" 
            className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-full hover:shadow-glow transition-all"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navigation;

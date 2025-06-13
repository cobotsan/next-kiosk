'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Monitor, Menu, X } from 'lucide-react';
import Link from 'next/link';
import ContactDialog from '@/components/ui/ContactDialog';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Custom Solutions', href: '/custom' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-auto h-auto max-w-[100px] max-h-[50px] sm:max-w-[120px] sm:max-h-[60px] md:max-w-[140px] md:max-h-[70px] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Image
                src="/images/logo-01.png"
                alt="Next Kiosk Logo"
                width={200}
                height={100}
                className="rounded-lg"
                priority
              />
            </div>
            <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[rgb(76,169,88)] ${isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ContactDialog>
              <Button
                className="bg-[rgb(76,169,88)] hover:bg-[rgb(66,149,78)] text-white hidden sm:inline-flex"
              >
                Contact Us
              </Button>
            </ContactDialog>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-[rgb(76,169,88)] font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4">
                <ContactDialog>
                  <Button
                    className="w-full bg-[rgb(76,169,88)] hover:bg-[rgb(66,149,78)] text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Button>
                </ContactDialog>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
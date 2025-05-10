"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import WhyChooseUs from "@/components/why-choose-us";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contact-form";
import ChatWidget from "@/components/chat-widget";
import ThemeToggle from "@/components/theme-toggle";

export default function HomeClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 container mx-auto px-4 py-6 flex justify-between items-center bg-background">
        <div className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <rect x="4" y="4" width="24" height="24" rx="6" className="fill-primary" />
            <path d="M12 12L20 20M20 12L12 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          {/* Logo */}
          <Link href="/" className="text-lg font-bold text-primary">
            SoftSell
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#why-choose-us" className="text-sm font-medium hover:text-primary transition-colors">
            Why Choose Us
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden md:inline-flex h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Get Started
          </a>
          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-foreground focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[80px] left-0 right-0 z-20 md:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a
                href="#how-it-works"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                How It Works
              </a>
              <a
                href="#why-choose-us"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Why Choose Us
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="inline-flex h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                onClick={toggleMenu}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>

      <footer className="bg-muted py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <rect x="4" y="4" width="24" height="24" rx="6" className="fill-primary" />
                  <path d="M12 12L20 20M20 12L12 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <span className="text-lg font-bold">SoftSell</span>
              </div>
              <p className="text-sm text-muted-foreground">Transforming the way businesses manage software assets.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#how-it-works"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#why-choose-us"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SoftSell. All rights reserved.
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}
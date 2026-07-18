import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Anasayfa', href: '#anasayfa' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Eğitmenler', href: '#egitmenler' },
  { label: 'Programlar', href: '#programlar' },
  { label: 'Başarılar', href: '#basarilar' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'İletişim', href: '#iletisim' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-eskiz-dark/95 backdrop-blur-md border-b border-eskiz-gold/15 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between">
          <a
            href="#anasayfa"
            onClick={(e) => handleNavClick(e, '#anasayfa')}
            className="group flex flex-col items-start leading-none gap-1"
          >
            <span className="font-serif text-2xl font-bold text-eskiz-light tracking-tight group-hover:text-eskiz-gold transition-colors">
              Eskiz
            </span>
            <span className="font-sans text-[9px] tracking-[0.25em] text-eskiz-gold uppercase font-bold">
              Akademi
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-[13px] text-eskiz-light/75 hover:text-eskiz-gold tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-eskiz-gold text-white font-sans text-[13px] font-bold tracking-wide px-5 py-2.5 rounded hover:bg-eskiz-gold/80 transition-all active:scale-95"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-eskiz-light"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-eskiz-dark pt-24 px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-sans text-xl text-eskiz-light border-b border-white/5 pb-4"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/905XXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-eskiz-gold text-white font-sans text-lg font-bold tracking-wide px-5 py-4 rounded mt-4"
              >
                <MessageCircle size={20} />
                WhatsApp ile İletişim
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

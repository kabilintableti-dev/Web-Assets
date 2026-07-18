import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import primaryVideo from '@assets/SnapInsta.to_AQPtHB0I7Zb2lhkplzUx4tmNVgdW8PChgRdcn10MMgSDWykR5_1784377547824.mp4';
import secondaryVideo from '@assets/SnapInsta.to_AQPtHB0I7Zb2lhkplzUx4tmNVgdW8PChgRdcn10MMgSDWykR5_1784376803135.mp4';

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.char');
      gsap.fromTo(chars, 
        { opacity: 0, filter: 'blur(20px)', y: 80 },
        { 
          opacity: 1, 
          filter: 'blur(0)', 
          y: 0, 
          stagger: 0.03, 
          duration: 1.4, 
          ease: "power3.out",
          delay: 0.5
        }
      );
    }
  }, []);

  const headingText = "Sanatın Geleceğini Tasarla";

  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={primaryVideo} type="video/mp4" />
          <source src={secondaryVideo} type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-[#111111]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 font-manrope text-xs md:text-sm tracking-[0.3em] uppercase text-eskiz-gold font-semibold"
        >
          Güzel Sanatlar Fakültesi Hazırlık
        </motion.div>

        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-eskiz-light mb-8 leading-tight"
        >
          {headingText.split('').map((char, index) => (
            <span key={index} className="char inline-block">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <div className="flex flex-col gap-2 mb-12 text-eskiz-light/80 text-lg md:text-xl font-sans font-light">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            İstanbul'un en seçkin güzel sanatlar hazırlık akademisinde
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            yeteneğini keşfet, geleceğini inşa et.
          </motion.p>
        </div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <a
            href="https://wa.me/905074736314"
            target="_blank"
            rel="noreferrer"
            className="bg-eskiz-gold text-eskiz-dark px-10 py-4 rounded-full font-manrope font-bold tracking-wider hover:scale-105 hover:shadow-[0_0_20px_rgba(199,163,93,0.4)] transition-all w-full sm:w-auto text-center"
          >
            HEMEN BAŞVUR
          </a>
          <a
            href="#egitimler"
            className="bg-transparent border border-eskiz-gold text-eskiz-gold px-10 py-4 rounded-full font-manrope font-bold tracking-wider hover:bg-eskiz-gold hover:text-eskiz-dark transition-all w-full sm:w-auto text-center"
          >
            DAHA FAZLA BİLGİ
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-eskiz-gold/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import heroImage from '@assets/7410_1784376803144.jpg';

export const Hero = () => {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="anasayfa"
      className="relative min-h-[100dvh] flex items-center bg-eskiz-dark overflow-hidden pt-20 pb-16"
    >
      {/* Decorative Radial Glow */}
      <div 
        className="absolute -right-[5vw] top-[5%] w-[55vw] h-[90vh] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 70% 40%, rgba(200, 151, 63, 0.15) 0%, transparent 65%)`
        }}
      />
      
      {/* Decorative Vertical Rule */}
      <div 
        className="absolute left-[5vw] top-[15%] bottom-[15%] w-[1px] pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent, rgba(200, 151, 63, 0.4), transparent)`
        }}
      />
      
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Right side image - Hero visual */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-20 lg:opacity-60 mask-image-hero">
        <img 
          src={heroImage} 
          alt="Eskiz Akademi Studio" 
          className="w-full h-full object-cover object-center grayscale-[20%] brightness-75 mix-blend-overlay"
        />
        {/* Gradient overlay to blend image into the dark background on the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-eskiz-dark via-eskiz-dark/80 to-transparent lg:from-eskiz-dark lg:via-eskiz-dark/90 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-eskiz-dark via-transparent to-eskiz-dark/50" />
      </div>

      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 lg:px-16 relative z-10 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-eskiz-gold uppercase font-bold mb-6">
            — Sanat Eğitiminde 12 Yıl
          </p>
          
          <h1 className="font-serif text-[clamp(48px,8vw,96px)] font-bold text-eskiz-light leading-[1.05] tracking-tight mb-8 whitespace-pre-line">
            Çizginin{"\n"}Ardında{"\n"}Bir Dünya Var.
          </h1>
          
          <p className="font-sans text-[clamp(16px,2vw,20px)] text-eskiz-light/60 leading-[1.6] max-w-[460px] mb-12 whitespace-pre-line">
            Güzel Sanatlar sınavlarına hazırlık — eskiz, desen, suluboya.{"\n"}İstanbul.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#iletisim"
              onClick={(e) => { e.preventDefault(); handleScroll('#iletisim'); }}
              className="inline-flex items-center justify-center gap-2 bg-eskiz-gold text-white font-sans text-sm font-bold tracking-widest uppercase px-8 py-4 rounded hover:bg-eskiz-gold/90 transition-all active:scale-95"
            >
              Kursa Başla
            </a>
            <button
              onClick={() => handleScroll('#programlar')}
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-eskiz-light/20 text-eskiz-light font-sans text-sm font-bold tracking-widest uppercase px-8 py-4 rounded hover:border-eskiz-gold transition-all active:scale-95"
            >
              Programları Keşfet
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

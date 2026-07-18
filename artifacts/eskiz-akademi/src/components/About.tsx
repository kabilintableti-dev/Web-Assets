import React from 'react';
import { motion } from 'framer-motion';
import img1 from '@assets/7408_1784376803148.jpg';
import img2 from '@assets/7407_1784376803154.jpg';

export const About = () => {
  return (
    <section id="hakkimizda" className="py-24 lg:py-32 bg-eskiz-cream">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-sans text-[10px] tracking-[0.3em] text-eskiz-gold uppercase font-bold mb-6">
              — Hakkımızda
            </p>
            <h2 className="font-serif text-[clamp(36px,5vw,56px)] font-bold text-eskiz-dark leading-[1.1] tracking-tight mb-12 whitespace-pre-line">
              Küçük Gruplar,{"\n"}Büyük Sanat.
            </h2>
            
            <div className="flex gap-8 lg:gap-12 mb-12 lg:mb-0">
              <div>
                <div className="font-serif text-4xl lg:text-5xl font-bold text-eskiz-gold leading-none mb-2">12+</div>
                <div className="font-sans text-[11px] text-eskiz-dark/50 tracking-widest uppercase font-semibold">Yıl Deneyim</div>
              </div>
              <div>
                <div className="font-serif text-4xl lg:text-5xl font-bold text-eskiz-gold leading-none mb-2">310+</div>
                <div className="font-sans text-[11px] text-eskiz-dark/50 tracking-widest uppercase font-semibold">Mezun Öğrenci</div>
              </div>
              <div>
                <div className="font-serif text-4xl lg:text-5xl font-bold text-eskiz-gold leading-none mb-2">8</div>
                <div className="font-sans text-[11px] text-eskiz-dark/50 tracking-widest uppercase font-semibold">Kişilik Max Grup</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            <p className="font-sans text-lg lg:text-xl text-eskiz-dark/70 leading-[1.8]">
              2014'ten bu yana İstanbul'da, en fazla 8 kişilik gruplarla birebir eğitim anlayışıyla sanat öğreticiliği yapıyoruz. Her öğrencinin kendi sesini bulmasına destek oluyoruz — temel çizim becerilerinden ileri düzey atölye çalışmalarına kadar.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-lg overflow-hidden relative">
                <img 
                  src={img1} 
                  alt="Eskiz Akademi Grup Çalışması" 
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              <div className="aspect-[4/5] rounded-lg overflow-hidden relative mt-8">
                <img 
                  src={img2} 
                  alt="Eskiz Akademi Birebir Eğitim" 
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

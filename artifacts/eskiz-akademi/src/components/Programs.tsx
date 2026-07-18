import React from 'react';
import { motion } from 'framer-motion';

const programs = [
  {
    title: "Temel Sanat Eğitimi",
    level: "Başlangıç",
    duration: "8 Hafta",
    desc: "Perspektif, oran ve gölgelendirme. Hiç deneyim gerekmez.",
    color: "#4a8c5c" // Greenish
  },
  {
    title: "Desen Eğitimi",
    level: "Orta",
    duration: "10 Hafta",
    desc: "Karakalem ve figür çalışmaları ile güzel sanatlara giriş.",
    color: "#C8973F" // Gold
  },
  {
    title: "Güzel Sanatlar Hazırlık",
    level: "İleri",
    duration: "12 Hafta",
    desc: "Sınav odaklı yoğun hazırlık programı.",
    color: "#9b3a3a" // Reddish
  },
  {
    title: "İmgesel Tasarım",
    level: "İleri",
    duration: "12 Hafta",
    desc: "Yaratıcı düşünce ve özgün kompozisyon becerileri.",
    color: "#9b3a3a" // Reddish
  }
];

export const Programs = () => {
  return (
    <section id="programlar" className="py-24 lg:py-32 bg-eskiz-light">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20 text-center"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] text-eskiz-gold uppercase font-bold mb-6">
            — Programlar
          </p>
          <h2 className="font-serif text-[clamp(36px,5vw,56px)] font-bold text-eskiz-dark leading-[1.1] tracking-tight">
            Ne Öğrenmek İstiyorsun?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-eskiz-cream p-8 md:p-12 rounded shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4"
              style={{ borderTopColor: p.color }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span 
                  className="font-sans text-[10px] tracking-widest uppercase font-bold"
                  style={{ color: p.color }}
                >
                  {p.level}
                </span>
                <span className="text-eskiz-dark/30 text-xs">•</span>
                <span className="font-sans text-[10px] tracking-widest text-eskiz-dark/50 uppercase font-bold">
                  {p.duration}
                </span>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-eskiz-dark mb-4">
                {p.title}
              </h3>
              <p className="font-sans text-eskiz-dark/60 leading-relaxed text-[15px]">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

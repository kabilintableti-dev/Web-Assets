import React from 'react';
import { motion } from 'framer-motion';

import img1 from '@assets/7415_1784376803169.jpg';
import img2 from '@assets/7416_1784376803174.jpg';
import img3 from '@assets/7568_1784376803179.jpg';

const stats = [
  { value: "94%", label: "Üniversite Yerleşim Oranı" },
  { value: "310+", label: "Mezun Öğrenci" },
  { value: "12", label: "Yıllık Tecrübe" },
  { value: "18", label: "Farklı Fakülteye Yerleşim" }
];

const stories = [
  {
    name: "Elif Kaya",
    school: "Mimar Sinan GSF · 2024",
    quote: "Eskiz Akademi'deki birebir takip sayesinde portfolyomu tamamen yeniden kurguladım.",
    img: img1
  },
  {
    name: "Kerem Demir",
    school: "Hacettepe GSF · 2023",
    quote: "Sınav pratiği ve düzenli geri bildirimler özgüvenimi baştan sona değiştirdi.",
    img: img2
  },
  {
    name: "Aslı Yıldız",
    school: "Marmara GSF · 2024",
    quote: "Akademik disiplinle sanatsal özgürlüğü aynı anda öğrendiğim tek yer burasıydı.",
    img: img3
  }
];

export const Achievements = () => {
  return (
    <section id="basarilar" className="py-24 lg:py-32 bg-eskiz-cream">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] text-eskiz-gold uppercase font-bold mb-6">
            — Kanıtlanmış Sonuçlar
          </p>
          <h2 className="font-serif text-[clamp(36px,5vw,56px)] font-bold text-eskiz-dark leading-[1.1] tracking-tight">
            Öğrenci Başarıları
          </h2>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-12 border-y border-eskiz-dark/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-4xl lg:text-5xl font-bold text-eskiz-dark mb-3">{s.value}</div>
              <div className="font-sans text-[11px] md:text-[12px] tracking-widest uppercase font-semibold text-eskiz-dark/50">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((st, i) => (
            <motion.div
              key={st.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-xl bg-eskiz-dark min-h-[400px] flex flex-col justify-end p-8"
            >
              <img
                src={st.img}
                alt={st.name}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eskiz-dark via-eskiz-dark/80 to-transparent" />
              
              <div className="relative z-10">
                <span className="text-eskiz-gold font-sans text-[10px] uppercase tracking-widest font-bold block mb-4">
                  {st.school}
                </span>
                <p className="text-eskiz-light/90 font-serif italic text-lg leading-relaxed mb-6">
                  "{st.quote}"
                </p>
                <h4 className="font-serif text-xl font-bold text-white">{st.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

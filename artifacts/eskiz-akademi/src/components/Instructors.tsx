import React from 'react';
import { motion } from 'framer-motion';

import img1 from '@assets/7411_1784376803140.jpg';
import img2 from '@assets/7400_1784376803158.jpg';
import img3 from '@assets/7407_1784376803154.jpg';
import img4 from '@assets/7408_1784376803148.jpg';

const instructors = [
  {
    name: "Deniz Aksoy",
    role: "Kurucu Eğitmen · Resim",
    bio: "Mimar Sinan GSF mezunu, 14 yıllık sınav hazırlık tecrübesi.",
    img: img1,
  },
  {
    name: "Selin Erdoğan",
    role: "Desen & Kompozisyon",
    bio: "Hacettepe GSF, karakalem ve figür çalışmalarında uzman.",
    img: img2,
  },
  {
    name: "Onur Baykal",
    role: "Grafik & İmgesel Tasarım",
    bio: "Endüstri deneyimli sanat yönetmeni, portfolyo danışmanı.",
    img: img3,
  },
  {
    name: "Mert Yavaş",
    role: "Mimari & İç Mimarlık",
    bio: "Teknik çizim ve mekansal tasarım derslerini yürütüyor.",
    img: img4,
  }
];

export const Instructors = () => {
  return (
    <section id="egitmenler" className="py-24 lg:py-32 bg-black">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] text-eskiz-gold uppercase font-bold mb-6">
            — Akademik Kadro
          </p>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-bold text-eskiz-light leading-[1.1] tracking-tight">
            Eğitmenler<span className="text-eskiz-gold">.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {instructors.map((ins, i) => (
            <motion.div
              key={ins.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-default"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-md bg-eskiz-dark">
                <img
                  src={ins.img}
                  alt={ins.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                {/* Gold border reveal on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-eskiz-gold/50 m-3 transition-all duration-500 rounded-sm pointer-events-none" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-eskiz-light mb-2">{ins.name}</h3>
              <p className="font-sans text-[11px] tracking-widest text-eskiz-gold uppercase font-bold mb-4">
                {ins.role}
              </p>
              <p className="font-sans text-sm text-eskiz-light/60 leading-relaxed">
                {ins.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

import s1 from '@assets/7401_1784376803163.jpg';
import s2 from '@assets/7410_1784376803144.jpg';
import s3 from '@assets/7411_1784376803140.jpg';
import s4 from '@assets/7567_1784376803184.jpg';

const works = [
  { img: s1, student: "Aslı G.", program: "Mimar Sinan Üni. İç Mimarlık" },
  { img: s2, student: "Can K.", program: "Marmara Üni. Grafik Tasarım" },
  { img: s3, student: "Elif S.", program: "Anadolu Üni. Animasyon" },
  { img: s4, student: "Deniz Y.", program: "Mimar Sinan Üni. Resim" },
];

export function StudentWorks() {
  return (
    <section className="py-24 md:py-32 bg-eskiz-dark relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-eskiz-light">Öğrenci Çalışmaları</h2>
          <p className="mt-4 text-eskiz-light/60 font-sans text-lg">Sınav başarısıyla sonuçlanan çalışmalar</p>
          <div className="w-24 h-1 bg-eskiz-gold mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Art Frame Effect */}
              <div className="relative p-3 bg-[#1A1A1A] rounded-sm shadow-2xl transition-all duration-500 group-hover:border-eskiz-gold/50 border border-[#222]">
                <div className="overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                  <img 
                    src={work.img} 
                    alt={`Student Work ${i}`}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                  />
                  {/* Inner glow on hover */}
                  <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(199,163,93,0)] group-hover:shadow-[inset_0_0_50px_rgba(199,163,93,0.15)] transition-shadow duration-500 pointer-events-none" />
                </div>
              </div>

              {/* Info overlay sliding up */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-eskiz-card border border-white/5 p-6 rounded-lg shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10 text-center">
                <h4 className="font-serif text-xl text-eskiz-light mb-1">{work.student}</h4>
                <p className="font-sans text-sm text-eskiz-gold font-medium">{work.program}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

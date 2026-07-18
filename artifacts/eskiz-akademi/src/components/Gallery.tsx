import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Use exactly the required files
import img1 from '@assets/7411_1784376803140.jpg'; // Atölye Dersi
import img2 from '@assets/7410_1784376803144.jpg'; // Desen Çalışması
import img3 from '@assets/7408_1784376803148.jpg'; // Grup Fotoğrafı
import img4 from '@assets/7407_1784376803154.jpg'; // Birebir Eğitim
import img5 from '@assets/7400_1784376803158.jpg'; // Kış Gezisi
import img6 from '@assets/7401_1784376803163.jpg'; // Atölye
import img7 from '@assets/7415_1784376803169.jpg'; // Öğrenci Çalışması
import img8 from '@assets/7416_1784376803174.jpg'; // Sergi
import img9 from '@assets/7568_1784376803179.jpg'; // Portfolyo Günü
import img10 from '@assets/7567_1784376803184.jpg'; // Mezuniyet

interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

const images: GalleryImage[] = [
  { src: img1, title: "Atölye Dersi", category: "Eğitim" },
  { src: img2, title: "Desen Çalışması", category: "Pratik" },
  { src: img3, title: "Grup Fotoğrafı", category: "Atölye" },
  { src: img4, title: "Birebir Eğitim", category: "Eğitim" },
  { src: img5, title: "Kış Gezisi", category: "Etkinlik" },
  { src: img6, title: "Atölye", category: "Mekan" },
  { src: img7, title: "Öğrenci Çalışması", category: "Eser" },
  { src: img8, title: "Sergi", category: "Etkinlik" },
  { src: img9, title: "Portfolyo Günü", category: "Sınav" },
  { src: img10, title: "Mezuniyet", category: "Kutlama" },
];

export const Gallery = () => {
  const [activeImg, setActiveImg] = useState<GalleryImage | null>(null);

  return (
    <section id="galeri" className="py-24 lg:py-32 bg-eskiz-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        
        <div className="text-center mb-16 lg:mb-20">
          <p className="font-sans text-[10px] tracking-[0.3em] text-eskiz-gold uppercase font-bold mb-6">
            — Akademiden Kareler
          </p>
          <h2 className="font-serif text-[clamp(36px,5vw,56px)] font-bold text-eskiz-light leading-[1.1] tracking-tight">
            Galeri
          </h2>
        </div>

        {/* Masonry CSS Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="break-inside-avoid relative overflow-hidden rounded-md cursor-pointer group"
              onClick={() => setActiveImg(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 block"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-eskiz-dark/90 via-eskiz-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Gold border */}
              <div className="absolute inset-0 border-[12px] border-eskiz-gold/10 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

              {/* Text Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end pointer-events-none">
                <span className="font-sans text-[10px] tracking-widest text-eskiz-gold uppercase font-bold mb-2">
                  {item.category}
                </span>
                <h4 className="font-serif text-xl font-bold text-eskiz-light">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-eskiz-dark/95 backdrop-blur flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveImg(null)}
          >
            <button
              onClick={() => setActiveImg(null)}
              className="absolute top-6 right-6 lg:top-8 lg:right-10 text-eskiz-light/50 hover:text-eskiz-gold font-sans text-sm tracking-widest uppercase transition-colors"
            >
              Kapat ✕
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={activeImg.src}
              alt={activeImg.title}
              className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <div className="font-sans text-xs tracking-widest text-eskiz-gold uppercase font-bold mb-2">
                {activeImg.category}
              </div>
              <div className="font-serif text-2xl text-eskiz-light">
                {activeImg.title}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

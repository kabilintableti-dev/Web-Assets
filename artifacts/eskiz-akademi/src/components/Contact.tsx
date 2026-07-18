import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const programs = [
  "Temel Sanat Eğitimi",
  "Desen Eğitimi",
  "İmgesel Tasarım",
  "Güzel Sanatlar Hazırlık",
  "Portfolyo Geliştirme"
];

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: programs[0],
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="iletisim" className="py-24 lg:py-32 bg-eskiz-dark">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-sans text-[10px] tracking-[0.3em] text-eskiz-gold uppercase font-bold mb-6">
              — İletişim
            </p>
            <h2 className="font-serif text-[clamp(36px,5vw,56px)] font-bold text-eskiz-light leading-[1.1] tracking-tight mb-8">
              Geleceğin sanatçısı{"\n"}senin hikâyen olsun.
            </h2>
            
            <div className="space-y-8 mt-12">
              <a href="tel:+905XXXXXXXXX" className="flex items-center gap-4 text-eskiz-light/80 hover:text-eskiz-gold transition-colors group">
                <div className="w-12 h-12 rounded-full border border-eskiz-light/10 flex items-center justify-center group-hover:border-eskiz-gold/30">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-sans text-[10px] tracking-widest text-eskiz-light/40 uppercase mb-1">Telefon</div>
                  <div className="font-sans text-lg">+90 (5xx) xxx xx xx</div>
                </div>
              </a>
              
              <a href="mailto:info@eskizakademi.com" className="flex items-center gap-4 text-eskiz-light/80 hover:text-eskiz-gold transition-colors group">
                <div className="w-12 h-12 rounded-full border border-eskiz-light/10 flex items-center justify-center group-hover:border-eskiz-gold/30">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-sans text-[10px] tracking-widest text-eskiz-light/40 uppercase mb-1">E-posta</div>
                  <div className="font-sans text-lg">info@eskizakademi.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-eskiz-light/80">
                <div className="w-12 h-12 rounded-full border border-eskiz-light/10 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-sans text-[10px] tracking-widest text-eskiz-light/40 uppercase mb-1">Adres</div>
                  <div className="font-sans text-lg">Kadıköy, İstanbul</div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-sans text-sm font-bold tracking-widest uppercase px-8 py-4 rounded mt-12 hover:bg-[#20bd5a] transition-all active:scale-95"
            >
              WhatsApp'tan Yaz
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-eskiz-light/5 border border-eskiz-light/10 p-8 lg:p-12 rounded-xl"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-eskiz-gold rounded-full flex items-center justify-center text-eskiz-dark mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinelinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl font-bold text-eskiz-light mb-4">Kaydınız alındı</h3>
                <p className="text-eskiz-light/60 font-sans">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-eskiz-light mb-8">Ön Kayıt Formu</h3>
                
                <div>
                  <label className="block font-sans text-[10px] tracking-widest text-eskiz-light/50 uppercase mb-2">
                    Ad Soyad
                  </label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-transparent border-b border-eskiz-light/20 text-eskiz-light py-3 px-0 focus:outline-none focus:border-eskiz-gold transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-[10px] tracking-widest text-eskiz-light/50 uppercase mb-2">
                      Telefon
                    </label>
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      className="w-full bg-transparent border-b border-eskiz-light/20 text-eskiz-light py-3 px-0 focus:outline-none focus:border-eskiz-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] tracking-widest text-eskiz-light/50 uppercase mb-2">
                      E-posta
                    </label>
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="w-full bg-transparent border-b border-eskiz-light/20 text-eskiz-light py-3 px-0 focus:outline-none focus:border-eskiz-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[10px] tracking-widest text-eskiz-light/50 uppercase mb-2">
                    Program Seçimi
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-eskiz-light/20 text-eskiz-light py-3 px-0 focus:outline-none focus:border-eskiz-gold transition-colors appearance-none"
                  >
                    {programs.map(p => (
                      <option key={p} value={p} className="bg-eskiz-dark text-eskiz-light">{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-[10px] tracking-widest text-eskiz-light/50 uppercase mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-transparent border-b border-eskiz-light/20 text-eskiz-light py-3 px-0 focus:outline-none focus:border-eskiz-gold transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-eskiz-gold text-eskiz-dark font-sans text-sm font-bold tracking-widest uppercase py-4 rounded mt-8 hover:bg-eskiz-light transition-colors"
                >
                  Gönder
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

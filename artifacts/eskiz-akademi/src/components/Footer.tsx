import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#111111] border-t-4 border-eskiz-gold/10 pt-20 pb-8 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#anasayfa" className="flex flex-col items-start leading-none gap-1 mb-4 inline-block">
              <span className="font-serif text-2xl font-bold text-eskiz-light tracking-tight">
                Eskiz
              </span>
              <span className="font-sans text-[9px] tracking-[0.25em] text-eskiz-gold uppercase font-bold">
                Akademi
              </span>
            </a>
            <p className="font-sans text-sm text-eskiz-light/50 leading-relaxed max-w-[250px]">
              Güzel Sanatlar Hazırlık Atölyesi. Disiplin, zanaat ve vizyon.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest text-eskiz-gold uppercase font-bold mb-6">
              Akademi
            </h4>
            <ul className="space-y-3">
              {['Hakkımızda', 'Eğitmenler', 'Programlar', 'Başarılar', 'Galeri'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace('ı', 'i')}`} className="font-sans text-sm text-eskiz-light/50 hover:text-eskiz-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest text-eskiz-gold uppercase font-bold mb-6">
              İletişim
            </h4>
            <ul className="space-y-3 font-sans text-sm text-eskiz-light/50">
              <li>+90 (5xx) xxx xx xx</li>
              <li>info@eskizakademi.com</li>
              <li>Kadıköy, İstanbul</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest text-eskiz-gold uppercase font-bold mb-6">
              Sosyal
            </h4>
            <ul className="space-y-3 font-sans text-sm text-eskiz-light/50">
              <li>
                <a href="#" className="hover:text-eskiz-gold transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#" className="hover:text-eskiz-gold transition-colors">YouTube</a>
              </li>
              <li>
                <a href="#" className="hover:text-eskiz-gold transition-colors">TikTok</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-eskiz-light/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-eskiz-light/30 tracking-wider">
            © 2026 Eskiz Akademi. Tüm hakları saklıdır.
          </p>
          <p className="font-sans text-[11px] text-eskiz-light/30 tracking-wider">
            Designed for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

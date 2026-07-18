import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Instructors } from '@/components/Instructors';
import { Programs } from '@/components/Programs';
import { Achievements } from '@/components/Achievements';
import { Gallery } from '@/components/Gallery';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full bg-eskiz-dark text-eskiz-light overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Instructors />
      <Programs />
      <Achievements />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

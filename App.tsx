import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { Empathy } from './components/Empathy';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-900 selection:bg-secondary/30">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Empathy />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
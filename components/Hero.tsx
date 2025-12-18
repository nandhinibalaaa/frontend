import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-stone-50">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-200/50 rounded-bl-[100px] -z-10 hidden lg:block" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">

          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-primary">
            Build Your <span className="text-secondary">Dream</span>,<br />
            no compromise.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
            Transparent pricing. On-time delivery. Zero hidden surprises.
            We build modern homes for modern families, handling everything from blueprints to housewarming.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => scrollTo('contact')} className="group">
              Get Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" onClick={() => scrollTo('services')}>
              View Our Services
            </Button>
          </div>

          <div className="pt-4 flex items-center gap-6 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span>Legal Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span>3D Planning</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span>1yr Warranty</span>
            </div>
          </div>
        </div>

        {/* Hero Image / Visual */}
        <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
            {/* HD Image: Modern Luxury Home - High Resolution */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070"
              alt="Modern architectural home with glass facade and pool"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          </div>

          {/* Decorative Pattern */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-repeat opacity-10" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
        </div>
      </div>
    </section>
  );
};
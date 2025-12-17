import React from 'react';
import { Section } from './ui/Section';

const steps = [
  {
    number: "01",
    title: "Discovery & Quote",
    description: "We meet, discuss your vision, budget, and timeline. You get a transparent, detailed estimate—not a guess."
  },
  {
    number: "02",
    title: "Design & Approvals",
    description: "Our architects create 2D/3D plans. Once you love them, we handle all the legal municipal approvals."
  },
  {
    number: "03",
    title: "Execution & Updates",
    description: "Construction begins. You receive weekly photo/video updates via WhatsApp or Email so you're never in the dark."
  },
  {
    number: "04",
    title: "Handover & Support",
    description: "We deep clean, inspect quality, and hand over the keys. Plus, a 12-month maintenance warranty."
  }
];

export const Process: React.FC = () => {
  return (
    <Section id="process" className="bg-stone-50">
      <div className="text-center mb-16">
        <span className="text-secondary font-bold uppercase tracking-widest text-sm">How it works</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mt-2">
          From Concept to Keys
        </h2>
      </div>

      <div className="relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2"></div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white md:bg-transparent p-6 md:p-0 rounded-2xl shadow-sm md:shadow-none border md:border-none border-slate-100">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 md:mx-auto relative z-10 border-4 border-stone-50">
                {step.number}
              </div>
              <div className="md:text-center">
                <h3 className="font-display font-bold text-xl text-slate-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
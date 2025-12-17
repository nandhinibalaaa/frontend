import React from 'react';
import { ShieldCheck, FileSearch, Award, Clock } from 'lucide-react';
import { Section } from './ui/Section';

const features = [
  {
    icon: ShieldCheck,
    title: "100% Reliability",
    description: "Licensed, insured, and background-checked teams. We stand by our contracts with zero deviations."
  },
  {
    icon: FileSearch,
    title: "Total Transparency",
    description: "Detailed BOQs (Bill of Quantities) shared upfront. Track every penny spent with our open-book policy."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only Grade-A materials and certified structural engineers. Quality checks at every milestone."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Strict timelines managed by digital project tools. We pay penalties if we miss our handover date."
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <Section id="why-us" className="bg-stone-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
          Why Families Trust <span className="text-secondary">SAI</span>
        </h2>
        <p className="text-slate-600 text-lg">
          We strip away the complexities of construction to give you a seamless, stress-free experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Animated Background Decor */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-[80px] -mr-6 -mt-6 transition-all duration-700 group-hover:scale-[2.5] group-hover:bg-secondary/10 z-0"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-lg">
                <feature.icon 
                  size={32} 
                  strokeWidth={1.5}
                  className="transform transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110" 
                />
              </div>
              
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3 group-hover:text-secondary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
            
            {/* Hover Bottom Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary transition-all duration-500 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};
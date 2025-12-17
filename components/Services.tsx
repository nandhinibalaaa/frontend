import React from 'react';
import { Home, Building2, PencilRuler, PaintBucket, ScrollText, Hammer } from 'lucide-react';
import { Section } from './ui/Section';

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Turnkey home construction using premium materials and sustainable practices."
  },
  {
    icon: Building2,
    title: "Commercial & Office",
    description: "Modern workspaces designed for productivity and brand impact."
  },
  {
    icon: PencilRuler,
    title: "2D & 3D Planning",
    description: "Visualize your dream before we lay a single brick with hyper-realistic renders."
  },
  {
    icon: PaintBucket,
    title: "Interior Design",
    description: "Modular kitchens, custom wardrobes, and lighting that sets the mood."
  },
  {
    icon: ScrollText,
    title: "Approvals & Legal",
    description: "We handle the bureaucracy. Plan approvals, permits, and documentation sorted."
  },
  {
    icon: Hammer,
    title: "Renovation",
    description: "Give your old space a modern facelift with structural strengthening."
  }
];

export const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
          Everything You Need Under One Roof
        </h2>
        <p className="text-slate-600 text-lg">
          Stop juggling 10 different contractors. We manage the entire lifecycle of your project, ensuring consistency and quality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-secondary/50 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-default"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-primary group-hover:text-white group-hover:bg-secondary transition-colors duration-300">
              <service.icon size={28} />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
              {service.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
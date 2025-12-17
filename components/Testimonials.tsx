import React from 'react';
import { Section } from './ui/Section';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Arjun & Priya Mehta",
    role: "Homeowners",
    content: "We were terrified of building a house after hearing horror stories. SAI changed that. The daily updates were a game changer.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Sarah Jenkins",
    role: "Office Renovation",
    content: "Professionalism at its peak. They finished our office extension 2 weeks ahead of schedule. Budget was spot on.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Rajesh Kumar",
    role: "Villa Project",
    content: "The finishing quality is hotel-standard. My friends can't believe the cost per sqft was this reasonable for this quality.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="reviews" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display font-bold text-4xl text-primary mb-6">
            Trusted by <span className="text-secondary">50+ Families</span> across the city.
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            We don't just build structures; we build relationships. Our 4.9-star rating speaks for itself.
          </p>
          
          <div className="flex gap-8">
            <div>
              <p className="text-4xl font-bold text-primary">10+</p>
              <p className="text-slate-500 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">150+</p>
              <p className="text-slate-500 text-sm">Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">100%</p>
              <p className="text-slate-500 text-sm">On-Time Record</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-stone-50 p-6 rounded-2xl flex gap-4 hover:shadow-md transition-shadow">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
              <div>
                <div className="flex text-secondary mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-2">"{t.content}"</p>
                <p className="text-sm font-bold text-primary">{t.name} <span className="font-normal text-slate-400">• {t.role}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
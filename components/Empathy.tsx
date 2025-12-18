import React from 'react';
import { Section } from './ui/Section';
import { XCircle, CheckCircle } from 'lucide-react';

export const Empathy: React.FC = () => {
  return (
    <Section className="bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 leading-tight">
            we value your dreams <span className="text-secondary">.</span>.
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Stories of contractors running away with money, endless delays, and hidden costs are all too common. We founded SAI Construction to be the antidote to that anxiety.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-2 text-rose-400">
                <XCircle size={24} />
                <h4 className="font-bold text-lg">The Typical Experience</h4>
              </div>
              <p className="text-slate-400">"We'll try to finish by June" (actually December), vague pricing, ghosting phone calls.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-secondary/50 shadow-[0_0_30px_rgba(217,119,6,0.1)]">
              <div className="flex items-center gap-3 mb-2 text-secondary">
                <CheckCircle size={24} />
                <h4 className="font-bold text-lg">The SAI Experience</h4>
              </div>
              <p className="text-slate-200">Weekly video updates, fixed price contracts, and a dedicated project manager you can actually reach.</p>
            </div>
          </div>
        </div>

        <div className="relative h-full min-h-[400px]">
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* HD Image: Active Construction */}
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" 
              alt="Construction site" 
              className="rounded-3xl object-cover h-full w-full translate-y-8 shadow-2xl"
            />
            {/* HD Image: Finished Modern Interior */}
            <img 
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800" 
              alt="Modern Luxury Interior" 
              className="rounded-3xl object-cover h-full w-full -translate-y-8 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
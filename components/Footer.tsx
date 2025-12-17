import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Logo } from './ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo isDark={true} />
            </div>
            <p className="max-w-xs text-slate-500 mb-6 leading-relaxed">
              Building the future, restoring the past. We craft homes that stand the test of time with transparency and quality at every step.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"><Linkedin size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-200">Residential Construction</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-200">Commercial Build</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-200">Premium Interiors</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-200">Home Renovation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} SAI Construction. All rights reserved.</p>
          <p className="text-slate-600">Designed for Modern Living.</p>
        </div>
      </div>
    </footer>
  );
};
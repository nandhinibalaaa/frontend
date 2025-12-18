import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Send, Phone, Mail, Loader2 } from 'lucide-react';

// Get API URL from environment variable
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: 'Full Home Construction',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          service: 'Full Home Construction',
          message: ''
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }
    } catch (error) {
      console.error("Failed to send enquiry", error);
      alert(`Unable to send enquiry: ${error instanceof Error ? error.message : 'Please try again later'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" className="bg-primary text-white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <h2 className="font-display font-bold text-4xl mb-4">Let's Build Something Great.</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Ready to start? Fill out the form for a free consultation and estimate. No pressure, no spam.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-secondary">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Call us directly</p>
                <p className="font-bold text-lg">+91 9884260235</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-secondary">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email us</p>
                <p className="font-bold text-lg">deepanmathi5@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 text-slate-800 shadow-2xl">
          {success ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Send size={40} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Message Received!</h3>
              <p className="text-slate-600">Thanks for reaching out. Our team will contact you within 24 hours.</p>
              <Button variant="outline" className="mt-8" onClick={() => setSuccess(false)}>Send Another</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">First Name</label>
                  <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Last Name</label>
                  <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <input name="email" value={formData.email} onChange={handleChange} type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Service Interested In</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                  <option>Full Home Construction</option>
                  <option>Interior Design</option>
                  <option>Renovation</option>
                  <option>Architectural Planning</option>
                  <option>Commercial Build</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Project Details</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Tell us about your dream project..."></textarea>
              </div>

              <Button type="submit" fullWidth disabled={loading}>
                {loading ? <span className="flex items-center gap-2"><Loader2 className="animate-spin" /> Sending to Team...</span> : 'Start My Project'}
              </Button>

              <p className="text-xs text-center text-slate-400 mt-4">
                Your details are safe. We never spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};
import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 px-4 md:px-8 lg:px-12 ${dark ? 'bg-primary text-white' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};
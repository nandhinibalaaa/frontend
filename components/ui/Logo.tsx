import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", isDark = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Unique Geometric Building Mark */}
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 drop-shadow-sm transition-transform duration-300 hover:scale-105">
        {/* Base Shape */}
        <path 
          d="M21 2L4 15V39H38V15L21 2Z" 
          className={isDark ? "fill-white/10" : "fill-primary/5"} 
        />
        {/* Structural Outline */}
        <path 
          d="M21 2L4 15V39H15V25H27V39H38V15L21 2Z" 
          className={isDark ? "stroke-white" : "stroke-primary"} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Door/Entrance Accent */}
        <path 
          d="M15 39V25H27V39" 
          className="stroke-secondary" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Window/Focus Point */}
        <rect x="18" y="11" width="6" height="6" rx="1.5" className={isDark ? "fill-white" : "fill-primary"} />
        
        {/* Decorative Lines */}
        <path d="M30 15L38 15" className="stroke-secondary" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M4 15L12 15" className="stroke-secondary" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      
      <div className="flex flex-col justify-center">
        <span className={`font-display font-bold text-2xl leading-none tracking-tight ${isDark ? 'text-white' : 'text-primary'}`}>
          SAI
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">
          Construction
        </span>
      </div>
    </div>
  );
};
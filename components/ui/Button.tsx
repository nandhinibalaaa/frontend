import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md shadow-slate-900/10 focus:ring-primary",
    secondary: "bg-secondary text-white hover:bg-amber-700 hover:shadow-lg hover:-translate-y-0.5 shadow-md shadow-amber-600/20 focus:ring-secondary",
    outline: "border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary",
    ghost: "text-slate-600 hover:text-primary hover:bg-slate-100 focus:ring-slate-200"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
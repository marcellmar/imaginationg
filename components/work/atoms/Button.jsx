'use client';

import React from 'react';

// Button variants:
// primary: White border, black background, white text
// secondary: Red border, black background, red text
// tertiary: Gray border, black background, gray text

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  fullWidth = true,
  size = 'default',
  disabled = false,
  className = '',
  ...props 
}) => {
  
  const baseClasses = 'font-extrabold uppercase transition-colors';
  
  const sizeClasses = {
    'sm': 'py-2 px-4 text-base',
    'default': 'py-4 px-6 text-xl',
    'lg': 'py-5 px-8 text-2xl'
  };
  
  const variantClasses = {
    'primary': 'bg-black text-white border-4 border-white hover:bg-white hover:text-black',
    'secondary': 'bg-black text-work-red border-4 border-work-red hover:bg-work-red hover:text-black',
    'tertiary': 'bg-black text-zinc-400 border-4 border-zinc-500 hover:text-white hover:border-white'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${widthClass}
    ${disabledClass}
    ${className}
  `.trim();
  
  return (
    <button
      className={combinedClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
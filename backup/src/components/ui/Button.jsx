import React from 'react';
import { Loader2 } from 'lucide-react';

const variants = {
  primary:
    'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg border-transparent',
  secondary: 'bg-secondary-900 text-white hover:bg-secondary-800 shadow-lg border-transparent',
  outline:
    'bg-transparent border-2 border-secondary-200 text-secondary-700 hover:border-secondary-900 hover:text-secondary-900',
  ghost:
    'bg-transparent text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900 border-transparent shadow-none',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  isLoading = false,
  fullWidth = false,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none select-none';

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
};

export default Button;

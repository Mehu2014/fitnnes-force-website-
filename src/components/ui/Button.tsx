import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "full";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-heading font-bold transition-all duration-200 rounded-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900";
  
  const variants = {
    primary: "bg-primary text-black hover:bg-primary-hover focus:ring-primary border border-transparent shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.5)]",
    secondary: "bg-secondary text-white hover:bg-secondary-hover focus:ring-secondary border border-transparent",
    outline: "bg-transparent text-white border-2 border-primary hover:bg-primary hover:text-black focus:ring-primary",
    ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-dark-100 focus:ring-dark-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    full: "w-full px-6 py-3 text-sm",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    disabled || isLoading ? "opacity-50 cursor-not-allowed hover:shadow-none" : "hover:-translate-y-0.5 active:translate-y-0"
  } ${className}`;

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : null}
      {children}
    </button>
  );
};

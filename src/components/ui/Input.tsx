import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-gray-300">
            {label} {props.required && <span className="text-primary">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full bg-dark-200 border ${
            error ? "border-red-500 focus:ring-red-500" : "border-dark-100 focus:ring-primary"
          } rounded-sm px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:border-transparent transition-all ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

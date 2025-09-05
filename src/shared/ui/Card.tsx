import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({ children, className = '', padding = 'md' }: CardProps) {
  const baseClasses = 'bg-white rounded-lg shadow-md border border-gray-200';
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const combinedClasses = `${baseClasses} ${paddingClasses[padding]} ${className}`.trim();
  
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}

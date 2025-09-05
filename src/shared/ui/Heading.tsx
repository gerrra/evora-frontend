import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export function Heading({ children, variant = 'h1', className = '' }: HeadingProps) {
  const Tag = variant as keyof React.JSX.IntrinsicElements;

  const variantClasses = {
    h1: 'text-4xl font-bold text-gray-900',
    h2: 'text-3xl font-semibold text-gray-800',
    h3: 'text-2xl font-semibold text-gray-800',
    h4: 'text-xl font-medium text-gray-700',
    h5: 'text-lg font-medium text-gray-700',
    h6: 'text-base font-medium text-gray-600',
  };

  const combinedClasses = className
    ? `${variantClasses[variant]} ${className}`
    : variantClasses[variant];

  return <Tag className={combinedClasses}>{children}</Tag>;
}

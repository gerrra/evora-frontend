import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function Heading({ children, level = 1, className = '' }: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  const baseClasses = 'text-4xl font-bold text-gray-900';
  const combinedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  return <Tag className={combinedClasses}>{children}</Tag>;
}

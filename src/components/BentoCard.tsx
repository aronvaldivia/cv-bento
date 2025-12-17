import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

function BentoCard({ children, className = '' }: BentoCardProps) {
  return (
    <div
      className={`p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export default BentoCard;

import React from 'react';

interface InfoCardProps {
  children: React.ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`bg-[rgba(255,255,255,0.02)] p-4 sm:p-6 rounded-xl ${className}`}>
      {children}
    </div>
  );
};

export default InfoCard;
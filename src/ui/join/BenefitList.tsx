import React from 'react';

interface BenefitListProps {
  benefits: string[];
  className?: string;
}

const BenefitList: React.FC<BenefitListProps> = ({ 
  benefits, 
  className = '' 
}) => {
  return (
    <ul className={`space-y-2 ${className}`}>
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start">
          <div className="w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
            <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
          </div>
          <span className="text-[#fff6e6] text-sm sm:text-base">{benefit}</span>
        </li>
      ))}
    </ul>
  );
};

export default BenefitList;
import React from 'react';

interface FeatureListProps {
  features: string[];
  className?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({ 
  features, 
  className = '' 
}) => {
  return (
    <ul className={`space-y-2 ${className}`}>
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <div className="w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
          </div>
          <span className="text-[#f0dca6] text-sm sm:text-base">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
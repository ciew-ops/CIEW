import React from 'react';

interface StepListProps {
  steps: string[];
  className?: string;
}

const StepList: React.FC<StepListProps> = ({ 
  steps, 
  className = '' 
}) => {
  return (
    <ol className={`space-y-3 ${className}`}>
      {steps.map((step, index) => (
        <li key={index} className="flex items-start">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4af37] text-[#3a0a0a] flex items-center justify-center mr-3 font-bold">
            {index + 1}
          </div>
          <span className="text-[#f0dca6] text-sm sm:text-base mt-0.5">{step}</span>
        </li>
      ))}
    </ol>
  );
};

export default StepList;
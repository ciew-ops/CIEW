import React from 'react';
import { CiCircleCheck } from "react-icons/ci";

interface MembershipTierProps {
  title: string;
  features: string[];
  isHighlighted?: boolean;
}

const MembershipTier: React.FC<MembershipTierProps> = ({
  title,
  features,
  isHighlighted = false
}) => {
  return (
    <div className={`
      rounded-xl p-4 sm:p-6 
      ${isHighlighted 
        ? 'bg-gradient-to-r from-[#3a0a0a] to-[#5a1a1a] border-2 border-[#d4af37]' 
        : 'bg-[#3a0a0a] border border-[rgba(255,255,255,0.05)]'
      }
      transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#d4af37]/10
    `}>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#fff6e6] mb-4">
        {title}
      </h3>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CiCircleCheck className="w-5 h-5 text-[#d4af37] mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-[#fff6e6] text-sm sm:text-base">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MembershipTier;
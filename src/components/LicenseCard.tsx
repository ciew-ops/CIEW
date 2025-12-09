import React from 'react';

interface LicenseCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const LicenseCard: React.FC<LicenseCardProps> = ({ 
  title, 
  description,
  icon 
}) => {
  return (
    <div className="bg-[#3a0a0a] border border-[rgba(255,255,255,0.05)] rounded-xl p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#d4af37]/10">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#fff6e6] mb-3">
            {title}
          </h3>
          <p className="text-[#f0dca6] leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LicenseCard;
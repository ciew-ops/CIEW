import React from 'react';

interface PartnerPillProps {
  name: string;
  logo?: string;
}

const PartnerPill: React.FC<PartnerPillProps> = ({ 
  name 
}) => {
  return (
    <div className="bg-[#3a0a0a] px-3 sm:px-4 py-2 rounded-full text-[#fff6e6] text-sm sm:text-base hover:bg-[#4a1a1a] transition-colors duration-200 cursor-default">
      {name}
    </div>
  );
};

export default PartnerPill;
import React from 'react';
import PartnerPill from './PartnerPill';

interface PartnerCategoryProps {
  title: string;
  companies: string[];
}

const PartnerCategory: React.FC<PartnerCategoryProps> = ({ 
  title, 
  companies 
}) => {
  return (
    <div>
      <h4 className="text-lg font-semibold text-[#fff6e6] mb-3">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2 mb-4">
        {companies.map((company, index) => (
          <PartnerPill key={index} name={company} />
        ))}
      </div>
    </div>
  );
};

export default PartnerCategory;
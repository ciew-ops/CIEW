import React from 'react';

interface CategoryItem {
  title: string;
  items: string[];
}

interface GridSectionProps {
  categories: CategoryItem[];
}

const GridSection: React.FC<GridSectionProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {categories.map((category, index) => (
        <div key={index} className="space-y-3">
          <h4 className="text-lg font-semibold text-[#fff6e6]">
            {category.title}
          </h4>
          <ul className="space-y-2 ml-5">
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-[#fff6e6] text-base flex items-start">
                <span className="text-[#d4af37] mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GridSection;
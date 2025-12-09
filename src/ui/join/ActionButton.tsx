import React from 'react';

interface ActionButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  text, 
  href, 
  onClick,
  target,
  rel 
}) => {
  const baseClasses = "inline-block bg-[#d4af37] text-[#3a0a0a] px-6 py-3 rounded-lg font-semibold hover:bg-[#c49b2e] transition-colors duration-200 cursor-pointer text-center";
  
  if (href) {
    return (
      <a 
        href={href} 
        target={target}
        rel={rel}
        className={baseClasses}
      >
        {text}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={baseClasses}
    >
      {text}
    </button>
  );
};

export default ActionButton;
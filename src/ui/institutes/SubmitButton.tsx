import React from 'react';

interface SubmitButtonProps {
  text: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => (
  <button
    type="submit"
    className="bg-[#d4af37] text-[#3a0a0a] px-4 py-3 rounded-lg border-none 
              font-semibold hover:bg-[#c49b2e] transition-colors duration-200 
              cursor-pointer w-full md:w-auto"
  >
    {text}
  </button>
);
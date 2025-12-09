interface BenefitItemProps {
  children: React.ReactNode;
}

export const BenefitItem: React.FC<BenefitItemProps> = ({ children }) => (
  <li className="text-[#fff6e6] flex items-start">
    <span className="text-[#d4af37] mr-2">•</span>
    {children}
  </li>
);
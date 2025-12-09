interface StepItemProps {
  number: number;
  children: React.ReactNode;
}

export const StepItem: React.FC<StepItemProps> = ({ number, children }) => (
  <li className="text-[#fff6e6] flex items-start">
    <span className="text-[#d4af37] font-bold mr-3">{number}.</span>
    {children}
  </li>
);

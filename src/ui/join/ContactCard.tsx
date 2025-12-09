import React from 'react';

interface ContactCardProps {
  whatsappText: string;
  whatsappLink: string;
  email: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  whatsappText, 
  whatsappLink,
  email 
}) => {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-[#fff6e6]">
        Support & Contacts
      </h3>
      <div className="space-y-2">
        <p className="text-[#f0dca6]">
          WhatsApp community:{' '}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4af37] hover:underline transition-colors duration-200"
          >
            {whatsappText}
          </a>
        </p>
        <p className="text-[#f0dca6]">
          Email: <span className="text-[#fff6e6]">{email}</span> (placeholder)
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
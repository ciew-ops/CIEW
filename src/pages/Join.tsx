import React from 'react';
import InfoCard from '../ui/join/InfoCard';
import BenefitList from '../ui/join/BenefitList';
import StepList from '../ui/join/StepList';
import ActionButton from '../ui/join/ActionButton';
import ContactCard from '../ui/join/ContactCard';

const Join: React.FC = () => {
  const coreBenefits = [
    "Lifetime professional CIEW ID and QR-enabled verification report",
    "Verified academic credentials (10th/12th/Graduation) and consolidated profile",
    "Adaptive employability assessments and skill scorecards",
    "Recorded interview profile (technical + HR) for recruiters",
    "Priority access to vetted employers and placement drives",
    "Mentorship from senior IT professionals and leadership tracks",
    "Welfare support: emergency funds, scholarship access and unemployment assistance programs",
    "Discounts on partner services: certifications, tools, cloud credits"
  ];

  const enrollmentSteps = [
    "Create free profile → Get your CIEW ID",
    "Visit an authorized verification center for document checks and consolidation",
    "Take adaptive assessments to receive a CIEW skill score",
    "Attend recorded interviews and apply to CIEW-vetted job pools",
    "Join premium programs for additional placement support and welfare benefits"
  ];

  const contactInfo = {
    whatsapp: {
      text: "Join",
      link: "https://chat.whatsapp.com/LzjAqRFLI0oBWcrVgbot8i"
    },
    email: "contact@ciew.org"
  };

  return (
    <div className="min-h-screen bg-[#200101] text-[#fff6e6] font-sans">
      

      <main className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-[rgba(255,255,255,0.02)] p-4 sm:p-6 md:p-[18px] rounded-xl space-y-8">
          
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fff6e6]">
              Programs & Benefits
            </h1>
            <p className="text-[#f0dca6] text-base sm:text-lg leading-relaxed">
              Complete professional lifecycle — registration, verification, assessments, interviews, memberships and premium career services.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#fff6e6] mb-4">
              Core Benefits for Fresher & Experienced IT Engineers
            </h3>
            <BenefitList benefits={coreBenefits} />
          </div>

          <InfoCard>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#fff6e6]">
                How to enroll
              </h3>
              <StepList steps={enrollmentSteps} />
              <div className="pt-4">
                <ActionButton 
                  text="Register Now"
                  href="https://forms.gle/GAjeBmT6co1dmKM27"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
          </InfoCard>

          <InfoCard>
            <ContactCard 
              whatsappText={contactInfo.whatsapp.text}
              whatsappLink={contactInfo.whatsapp.link}
              email={contactInfo.email}
            />
          </InfoCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-[#3a0a0a]/30 p-4 rounded-lg border border-[rgba(255,255,255,0.05)]">
              <h4 className="font-semibold text-[#d4af37] mb-2">Professional Identity</h4>
              <p className="text-[#f0dca6] text-sm">Lifetime verified digital identity with QR code</p>
            </div>
            <div className="bg-[#3a0a0a]/30 p-4 rounded-lg border border-[rgba(255,255,255,0.05)]">
              <h4 className="font-semibold text-[#d4af37] mb-2">Career Support</h4>
              <p className="text-[#f0dca6] text-sm">Mentorship, assessments, and placement assistance</p>
            </div>
            <div className="bg-[#3a0a0a]/30 p-4 rounded-lg border border-[rgba(255,255,255,0.05)]">
              <h4 className="font-semibold text-[#d4af37] mb-2">Welfare Programs</h4>
              <p className="text-[#f0dca6] text-sm">Emergency funds, scholarships, and unemployment support</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Join;
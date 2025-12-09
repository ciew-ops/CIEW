import React, { useState } from 'react';
import { StepItem } from '../ui/institutes/StepItem';
import FormInput from '../ui/institutes/FormInput';
import { BenefitItem } from '../ui/institutes/BenefitItem';
import { SubmitButton } from '../ui/institutes/SubmitButton';


interface FormData {
  instituteName: string;
  ownerName: string;
  mobile: string;
  email: string;
  city: string;
}

const Institutes: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    instituteName: '',
    ownerName: '',
    mobile: '',
    email: '',
    city: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Demo: partner signup');
    setFormData({
      instituteName: '',
      ownerName: '',
      mobile: '',
      email: '',
      city: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const benefits = [
    'Revenue share for verification tasks and partner programs',
    'Official "CIEW Authorized Verification Center" certificate & badge',
    'Priority access to CIEW training content and placement drives',
    'Listed on CIEW partner map & city page'
  ];

  const steps = [
    'Institute signs partnership agreement and receives login credentials',
    'Engineer visits center for physical document check',
    'Institute uploads scans, selfie and marks physical verification',
    'CIEW pays partner commissions and provides partner support'
  ];

  return (
    <div className="min-h-screen bg-[#200101] text-[#fff6e6] font-sans">
     

      <main className="max-w-[980px] mx-auto px-5 py-5">
        <div className="bg-[rgba(255,255,255,0.02)] p-[18px] rounded-xl space-y-6">
          
          <div>
            <h1 className="text-3xl font-bold text-[#fff6e6] mb-3">
              Partner with CIEW
            </h1>
            <p className="text-[#f0dca6] leading-relaxed">
              Become an Authorized Verification Center and support fresher and experienced IT engineers by performing physical verification and enabling their professional identity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#fff6e6] mb-3">
              Benefits for Institutes
            </h3>
            <ul className="space-y-2 pl-5">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index}>
                  {benefit}
                </BenefitItem>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#fff6e6] mb-3">
              How it works
            </h3>
            <ol className="space-y-3 pl-5">
              {steps.map((step, index) => (
                <StepItem key={index} number={index + 1}>
                  {step}
                </StepItem>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#fff6e6] mb-4">
              Sign up your institute
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 max-w-2xl">
              <FormInput
                name="instituteName"
                value={formData.instituteName}
                onChange={handleInputChange}
                placeholder="Institute name"
                required
              />
              
              <FormInput
                name="ownerName"
                value={formData.ownerName}
                onChange={handleInputChange}
                placeholder="Owner name"
                required
              />
              
              <FormInput
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Mobile"
                type="tel"
                required
              />
              
              <FormInput
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                type="email"
                required
              />
              
              <FormInput
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                required
              />
              
              <SubmitButton text="Apply as Partner" />
            </form>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#fff6e6] mb-3">
              Partner Programs
            </h3>
            <p className="text-[#f0dca6] leading-relaxed">
              Onboarding is immediate; partner tiers include data-collection partner, verification center and mentor partners. Partners receive training and a partner dashboard.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#fff6e6] mb-3">
              Contact
            </h3>
            <p className="text-[#f0dca6]">
              WhatsApp:{' '}
              <a 
                href="https://chat.whatsapp.com/LzjAqRFLI0oBWcrVgbot8i" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:underline transition-colors duration-200"
              >
                Join community
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Institutes;
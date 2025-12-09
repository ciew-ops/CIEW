import React from 'react';
import MembershipTier from '../components/MembershipTier';

interface TierData {
  title: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

const Membership: React.FC = () => {
  const membershipTiers: TierData[] = [
    {
      title: "Associate Member (Freshers / Early Career)",
      description: "Perfect for those starting their IT career journey",
      features: [
        "Lifetime CIEW professional ID and QR-enabled verification report",
        "Adaptive skill assessments and basic employability score",
        "Access to CIEW bootcamps and mentorship circles (competitive selection)",
        "Priority listing for campus and entry-level hiring",
        "Access to learning discounts and partner offers"
      ]
    },
    {
      title: "Professional Member (Mid-level / Experienced IT Engineers)",
      description: "For professionals advancing their careers",
      features: [
        "All Associate benefits",
        "Advanced skill mapping and leadership tracks",
        "Eligibility for role-based licenses and governance roles",
        "Priority invites to pilot projects and national initiatives",
        "Mentorship and industry networking"
      ]
    },
    {
      title: "Fellow / Chartered Member (Senior / Leaders)",
      description: "For senior professionals and industry leaders",
      features: [
        "All Professional benefits",
        "Eligibility for governance seats, reviewer roles and advisory panels",
        "Recognition in national registers and public directories",
        "Access to policy consults, industry roundtables and high-value placements",
        "Opportunities to mentor, certify and lead CIEW bootcamps"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#200101] text-[#fff6e6] font-sans">
      

      <main className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-[rgba(255,255,255,0.02)] p-4 sm:p-6 md:p-[18px] rounded-xl space-y-6 sm:space-y-8">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fff6e6]">
              Membership Types & Benefits
            </h1>
            <p className="text-[#f0dca6] text-base sm:text-lg leading-relaxed">
              Choose the membership that fits your career stage. (Fees are not shown here.)
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {membershipTiers.map((tier, index) => (
              <MembershipTier
                key={index}
                title={tier.title}
                features={tier.features}
                isHighlighted={tier.highlight}
              />
            ))}
          </div>

          <div className="pt-4 border-t border-[rgba(255,255,255,0.05)]">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#fff6e6] mb-4">
              How to choose
            </h3>
            <div className="bg-[#3a0a0a]/30 rounded-lg p-4 sm:p-6">
              <p className="text-[#f0dca6] leading-relaxed text-base sm:text-lg">
                Select Associate if you are starting your career, Professional if you have industry experience and want role growth, and Fellow if you are a senior professional or leader ready to contribute to governance and mentoring.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#3a0a0a]/30 to-[#200101]/30 rounded-xl p-6 sm:p-8 border border-[#d4af37]/20">
            <div className="text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#fff6e6]">
                Ready to Join CIEW?
              </h3>
              <p className="text-[#f0dca6] max-w-2xl mx-auto">
                Start your professional journey with CIEW and unlock opportunities for growth, networking, and career advancement.
              </p>
              <div className="pt-4">
                <button className="bg-[#d4af37] text-[#3a0a0a] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#c49b2e] transition-colors duration-200 cursor-pointer">
                  Apply for Membership
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Membership;
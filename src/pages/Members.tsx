import React from 'react';
import InfoCard from '../ui/members/InfoCard';
import PartnerCategory from '../ui/members/PartnerCategory';
import GridSection from '../ui/members/GridSection';


const Members: React.FC = () => {
  const companyCategories = [
    {
      title: "Indian IT & Services",
      companies: [
        "Tata Consultancy Services (TCS)",
        "Infosys",
        "Wipro",
        "HCLTech",
        "Tech Mahindra",
        "LTI / LTIMindtree",
        "Cognizant India",
        "Mindtree",
        "Mphasis",
        "Persistent Systems",
        "Nagarro",
        "Hexaware",
        "Zensar"
      ]
    },
    {
      title: "Global MNCs (India Presence)",
      companies: [
        "Accenture",
        "IBM",
        "Capgemini",
        "Microsoft",
        "Google",
        "Amazon",
        "Oracle",
        "SAP",
        "Cisco",
        "Dell Technologies",
        "Intel",
        "Nvidia",
        "Qualcomm"
      ]
    },
    {
      title: "Product Companies & Startups",
      companies: [
        "Zoho",
        "Freshworks",
        "Razorpay",
        "Pine Labs",
        "MakeMyTrip",
        "Swiggy",
        "Zomato",
        "Flipkart",
        "Byju's",
        "PolicyBazaar"
      ]
    },
    {
      title: "Fintech & Payment Tech",
      companies: [
        "Paytm",
        "PhonePe",
        "Razorpay",
        "BharatPe",
        "MobiKwik"
      ]
    },
    {
      title: "Consulting & Professional Services (Tech Divisions)",
      companies: [
        "Deloitte (Tech)",
        "PwC (Tech)",
        "EY (Tech)",
        "KPMG (Tech)"
      ]
    },
    {
      title: "Global-only Tech Firms (Representative)",
      companies: [
        "Meta (Facebook)",
        "Apple",
        "Uber",
        "Airbnb",
        "Salesforce",
        "Stripe",
        "Twitter / X",
        "LinkedIn"
      ]
    }
  ];

  const collegeCategories = [
    {
      title: "National Institutes",
      items: [
        "IIT Kanpur",
        "IIT Roorkee",
        "IIT Delhi",
        "NIT Allahabad (Motilal Nehru)",
        "IIITs (selected campuses)",
        "Delhi University (select colleges)"
      ]
    },
    {
      title: "Regional & Private Colleges",
      items: [
        "Banaras Hindu University (BHU)",
        "Lucknow University",
        "Amity University (Lucknow/Noida)",
        "Galgotias University",
        "AKTU-affiliated colleges (Uttar Pradesh region)",
        "Local polytechnics and computer institutes (city partners)"
      ]
    }
  ];

  const trainingPartners = [
    "NIIT (regional centres)",
    "Aptech (regional centres)",
    "Local certified computer institutes (city-level partners)",
    "Open-source community groups and coding clubs"
  ];

  const uniquePositioningPoints = [
    "Focused vertical: IT profession only — higher accuracy and relevance",
    "Three-layer verification (physical + DigiLocker/API + institutional sign-off)",
    "Role-based licenses mapped to real employer responsibilities",
    "Bootcamps designed in partnership with employers to convert verified members into license-eligible professionals"
  ];

  return (
    <div className="min-h-screen bg-[#200101] text-[#fff6e6] font-sans">
 

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        <InfoCard>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d4af37] mb-3">
            Our Members & Partner Organizations
          </h1>
          <p className="text-[#f0dca6] text-base sm:text-lg leading-relaxed">
            CIEW works with a diverse ecosystem of IT companies, colleges, universities and training institutes. Below is a curated list of member organisations and institutional partners — we will keep this list updated as partnerships grow.
          </p>
        </InfoCard>

        <InfoCard>
          <h2 className="text-xl sm:text-2xl font-bold text-[#fff6e6] mb-3">
            Major IT Company Members
          </h2>
          <p className="text-[#f0dca6] text-base mb-6">
            Below are our partner companies grouped by category. Logos will be displayed for confirmed partners; text placeholders show representative organisations. If your organisation is a partner and you'd like a logo displayed, contact partnerships@ciew.org
          </p>

          <div className="space-y-6">
            {companyCategories.map((category, index) => (
              <PartnerCategory
                key={index}
                title={category.title}
                companies={category.companies}
              />
            ))}
          </div>

          <p className="text-[#f0dca6] text-sm mt-6 p-3 bg-[#3a0a0a]/30 rounded-lg">
            Note: This is a representative list. Partnerships are formalised through MoUs and displayed with explicit consent from organisations.
          </p>
        </InfoCard>

        <InfoCard>
          <h2 className="text-xl sm:text-2xl font-bold text-[#fff6e6] mb-3">
            Colleges & Universities (Representative)
          </h2>
          
          <GridSection categories={collegeCategories} />

          <p className="text-[#f0dca6] text-base mt-6">
            Colleges and universities join CIEW as institutional partners to bulk-upload alumni data, participate in placement drives and enable campus bootcamps.
          </p>
        </InfoCard>

        <InfoCard>
          <h2 className="text-xl sm:text-2xl font-bold text-[#fff6e6] mb-3">
            Training & Bootcamp Partners
          </h2>
          <ul className="space-y-2 ml-5">
            {trainingPartners.map((partner, index) => (
              <li key={index} className="text-[#fff6e6] text-base flex items-start">
                <span className="text-[#d4af37] mr-2">•</span>
                {partner}
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard>
          <h2 className="text-xl sm:text-2xl font-bold text-[#fff6e6] mb-3">
            Global Comparison & Unique Positioning
          </h2>
          <p className="text-[#f0dca6] text-base mb-4 leading-relaxed">
            Globally, professional registries and councils (eg. NMC for medical professionals, BCI for law, WES for credential evaluation) focus on either verification, licensing or career services. CIEW combines these functions into a single platform specialized for IT professionals — verification, role-based licensing, bootcamps, employer API and welfare — making it uniquely tailored to India's IT ecosystem.
          </p>
          <ul className="space-y-2 ml-5">
            {uniquePositioningPoints.map((point, index) => (
              <li key={index} className="text-[#f0dca6] text-base flex items-start">
                <span className="text-[#d4af37] mr-2">•</span>
                {point}
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard>
          <h2 className="text-xl sm:text-2xl font-bold text-[#fff6e6] mb-3">
            Want your organisation listed?
          </h2>
          <p className="text-[#f0dca6] text-base mb-4">
            If your company, college or institute is already a partner or you wish to join the CIEW ecosystem, please contact partnerships@ciew.org. All partner listings are published after receiving a formal agreement or consent.
          </p>
          <a
            href="mailto:partnerships@ciew.org"
            className="inline-block bg-[#d4af37] text-[#3a0a0a] px-6 py-3 rounded-lg font-semibold hover:bg-[#c49b2e] transition-colors duration-200"
          >
            Contact Partnerships
          </a>
        </InfoCard>
      </main>
    </div>
  );
};

export default Members;
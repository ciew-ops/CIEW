import React from 'react';
import LicenseCard from '../components/LicenseCard';
import FeatureList from '../components/FeatureList';

interface LicenseData {
  title: string;
  description: string;
  icon?: string;
}

interface FeatureGroup {
  title: string;
  features: string[];
}

const License: React.FC = () => {
  const licenses: LicenseData[] = [
    {
      title: "Software Developer License",
      description: "For professionals demonstrating coding proficiency, system design, code quality, and delivery in real projects. Holders are certified to lead software development tasks, contribute to architecture, and mentor junior developers. Assessment includes code challenge, design interview and portfolio evaluation."
    },
    {
      title: "Service Desk & Systems / Network Administration License",
      description: "For professionals managing enterprise support, system uptime, network operations and incident response. Holders demonstrate practical troubleshooting, configuration management, and adherence to SLAs. Assessment includes lab simulations, ticket-handling scenarios and operational audits."
    },
    {
      title: "Cyber Security Professional License",
      description: "For professionals in security operations, threat hunting, secure architecture and incident response. Holders demonstrate secure coding awareness, pentesting basics, SOC workflows and risk management. Assessment includes capture-the-flag labs, incident case studies and live simulations."
    }
  ];

  const bootcampHighlights: string[] = [
    "Small cohorts, mentor-to-member ratio focused",
    "Employer-vetted projects as part of assessment",
    "Live simulations, labs and recorded sessions",
    "Priority placement pipelines for top performers",
    "Direct pathway to role-based CIEW license"
  ];

  const licenseBenefits: string[] = [
    "Recognized professional status within India's IT ecosystem",
    "Employer trust — validated skills & accountability",
    "Access to leadership roles and specialized projects",
    "Priority listing on CIEW employer search"
  ];

  const featureGroups: FeatureGroup[] = [
    {
      title: "Bootcamp Highlights",
      features: bootcampHighlights
    },
    {
      title: "Why get a CIEW License?",
      features: licenseBenefits
    }
  ];

  return (
    <div className="min-h-screen bg-[#200101] text-[#fff6e6] font-sans">
    

      <main className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-[rgba(255,255,255,0.02)] p-4 sm:p-6 md:p-[18px] rounded-xl space-y-6 sm:space-y-8">
          
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fff6e6]">
              CIEW Professional Licenses
            </h1>
            <p className="text-[#f0dca6] text-base sm:text-lg leading-relaxed">
              CIEW issues role-based professional licenses that validate real-world skills, responsibilities and accountability. Licenses are awarded after verification, assessment and practical evaluation through bootcamps or employer-validated projects.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {licenses.map((license, index) => (
              <LicenseCard
                key={index}
                title={license.title}
                description={license.description}
              />
            ))}
          </div>

          <div className="pt-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#fff6e6] mb-4">
              Bootcamps: Fast-track to License
            </h3>
            <div className="bg-[#3a0a0a]/30 rounded-lg p-4 sm:p-6 mb-6">
              <p className="text-[#f0dca6] leading-relaxed text-base sm:text-lg">
                CIEW bootcamps are intensive, cohort-based programs designed to convert verified fresher and experienced IT engineers into license-eligible professionals. Bootcamps combine live instruction, hands-on labs, employer projects and mentor reviews. Seats are competitive and limited to ensure quality.
              </p>
            </div>

            <div className="space-y-6">
              {featureGroups.map((group, index) => (
                <div key={index}>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#fff6e6] mb-3">
                    {group.title}
                  </h3>
                  <FeatureList features={group.features} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#3a0a0a]/30 to-[#200101]/30 rounded-xl p-6 sm:p-8 border border-[#d4af37]/20 mt-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#fff6e6]">
                Start Your License Journey
              </h3>
              <p className="text-[#f0dca6] max-w-2xl mx-auto">
                Join a bootcamp or apply for license assessment to validate your professional skills and advance your IT career.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#d4af37] text-[#3a0a0a] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#c49b2e] transition-colors duration-200 cursor-pointer">
                  Apply for Bootcamp
                </button>
                <button className="bg-transparent border border-[#d4af37] text-[#d4af37] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#d4af37] hover:text-[#3a0a0a] transition-colors duration-200 cursor-pointer">
                  License Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default License;
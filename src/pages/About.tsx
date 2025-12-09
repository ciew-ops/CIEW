import { Link } from 'react-router-dom'; 
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import { FaRecycle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
const About = () => {
  return (
    <div className="min-h-screen bg-[#200101] text-[#fff6e6]">
  

      <main className="px-6 py-12 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-2xl shadow-2xl border border-white/10">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-6">
              About <span className="text-white">CIEW</span>
            </h1>
            <p className="text-xl text-[#f0dca6] leading-relaxed">
              Council for IT Engineers Welfare (CIEW) is an industry-led initiative to professionalize, 
              verify and support IT engineers across India. We provide a national registry, verified profiles, 
              employability programs, and welfare assistance for fresher and experienced IT engineers at all career stages.
            </p>
          </div>

          <section className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-12 bg-[#d4af37] rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Why CIEW?</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-[#3a0a0a] to-[#200101] p-6 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-[#d4af37]"><CiBank /></span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Professional Identity</h3>
                <p className="text-[#f0dca6]">
                  Most professions have councils (BCI, NMC, ICAI). IT engineers need an equivalent 
                  professional identity for recognition and governance.
                </p>
              </div>

              <div className="bg-gradient-to-b from-[#3a0a0a] to-[#200101] p-6 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-[#d4af37]"><IoBriefcaseOutline /></span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cost Efficiency</h3>
                <p className="text-[#f0dca6]">
                  Companies spend heavily on background checks; a verified central registry saves 
                  cost and time while improving hiring accuracy.
                </p>
              </div>

              <div className="bg-gradient-to-b from-[#3a0a0a] to-[#200101] p-6 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-[#d4af37]"><MdOutlineVerifiedUser /></span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Engineer Protection</h3>
                <p className="text-[#f0dca6]">
                  CIEW protects engineers with verification, governance, welfare and 
                  national-level recognition throughout their careers.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-12 bg-[#d4af37] rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">What We Offer</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-[#3a0a0a] to-[#200101] p-8 rounded-xl border-2 border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#d4af37] mb-4">Verified Identity</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-[#f0dca6]">
                    <span className="text-[#d4af37] mt-1">✓</span>
                    10th/12th/Graduation verification
                  </li>
                  <li className="flex items-start gap-2 text-[#f0dca6]">
                    <span className="text-[#d4af37] mt-1">✓</span>
                    DigiLocker integration
                  </li>
                  <li className="flex items-start gap-2 text-[#f0dca6]">
                    <span className="text-[#d4af37] mt-1">✓</span>
                    Offline verification checks
                  </li>
                  <li className="flex items-start gap-2 text-[#f0dca6]">
                    <span className="text-[#d4af37] mt-1">✓</span>
                    Profile consolidation
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-[#3a0a0a] to-[#200101] p-8 rounded-xl border-2 border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#d4af37] mb-4">Employability</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-[#f0dca6]">
                    <span className="text-[#d4af37] mt-1">✓</span>
                    Adaptive skill assessments
                  </li>
                  <li className="flex items-start gap-2 text-[#f0dca6]">
                    <span className="text-[#d4af37] mt-1">✓</span>
                    Interview readiness training
                  </li>
                  <li className="flex items-start gap-2 text-[#f0dca6]">
                    <span className="text-[#d4af37] mt-1">✓</span>
                    Recorded interview sessions
                  </li>
                  <li className="flex items-start gap-2 text-[#f0dca6]">
                    <span className="text-[#d4af37] mt-1">✓</span>
                    Placement coordination
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-[#3a0a0a] to-[#200101] p-8 rounded-xl border-2 border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#d4af37] mb-4">Welfare</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-[#f0dca6]">
                    <span className="text-[#d4af37] mt-1">✓</span>
                    Unemployment support
                  </li>
                  <li className="flex items-start gap-2 text-[#f0dca6]">
                    <span className="text-[#d4af37] mt-1">✓</span>
                    Emergency welfare funds
                  </li>
                  <li className="flex items-start gap-2 text-[#f0dca6]">
                    <span className="text-[#d4af37] mt-1">✓</span>
                    Professional mentoring
                  </li>
                  <li className="flex items-start gap-2 text-[#f0dca6]">
                    <span className="text-[#d4af37] mt-1">✓</span>
                    Community networks
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-12 bg-[#d4af37] rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Expanded Benefits</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Lifetime CIEW professional ID and QR-enabled verification report",
                "Priority access to vetted employers and placement drives",
                "Mentorship from senior IT professionals and leadership opportunities",
                "Access to scholarships, emergency welfare funds and career counseling",
                "Discounted partner services (training, certifications, cloud credits)",
                "Professional networking events and industry conferences"
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-xl border border-white/10 hover:border-[#d4af37]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#d4af37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg text-[#d4af37]">{index + 1}</span>
                    </div>
                    <p className="text-[#f0dca6]">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-12 bg-[#d4af37] rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Founding Principles</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  number: "01",
                  title: "Identity First",
                  description: "Professional, candidate-centric unique CIEW ID that follows engineers throughout their career journey.",
                  icon: <CiUser />
                },
                {
                  number: "02",
                  title: "Integrity",
                  description: "Multi-layer verification system ensuring authenticity and trust in every verified profile.",
                  icon: <MdOutlineVerifiedUser />
                },
                {
                  number: "03",
                  title: "Inclusivity",
                  description: "Campus-first approach with institute partnerships and volunteer contributor networks across India.",
                  icon: <HiOutlineGlobeEuropeAfrica  />
                },
                {
                  number: "04",
                  title: "Sustainability",
                  description: "Membership models, assessments, corporate APIs, and partner programs ensuring long-term viability.",
                  icon: <FaRecycle />
                }
              ].map((principle, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-[#3a0a0a] to-[#200101] p-8 rounded-xl border border-white/10 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-6xl font-bold text-[#d4af37]/20">{principle.number}</span>
                    <span className="text-4xl">{principle.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{principle.title}</h3>
                  <p className="text-[#f0dca6]">{principle.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16 p-8 bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-2xl border border-[#d4af37]/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Join the Movement?
              </h3>
              <p className="text-[#f0dca6] mb-6 max-w-2xl mx-auto">
                Become part of India's premier professional community for IT engineers. 
                Get verified, access exclusive benefits, and advance your career with CIEW.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/join"
                  className="px-8 py-4 bg-[#d4af37] text-[#3a0a0a] font-bold rounded-lg hover:bg-[#ffcf6b] transition-colors text-center"
                >
                  Get Verified Now
                </Link>
                <Link 
                  to="/membership"
                  className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-bold rounded-lg hover:bg-[#d4af37]/10 transition-colors text-center"
                >
                  View Membership Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
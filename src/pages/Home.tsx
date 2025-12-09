import React from "react";

const Home = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("registration submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b0202] to-[#200101] text-[#fff6e6]">
      <section className="px-7 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-[#3a0a0a] p-6 rounded-xl shadow-2xl">
              <h1 className="text-3xl lg:text-4xl font-bold text-[#d4af37] mb-4">
                National registry, verified profiles & career ecosystem for IT
                Engineers
              </h1>

              <p className="text-[#f0dca6] text-lg mb-6">
                CIEW builds professional identity, verified experience and
                employability for fresher and experienced IT engineers — from
                academic credentials to career progression. Join the movement:
                verification, mentorship, licensure and welfare under one
                trusted platform.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="join.html"
                  className="bg-[#d4af37] text-[#3a0a0a] px-6 py-3 rounded-lg font-bold hover:bg-[#ffcf6b] transition-colors"
                >
                  Get Verified
                </a>
                <a
                  href="verify.html"
                  className="border border-white/10 text-[#f0dca6] px-6 py-3 rounded-lg font-bold hover:bg-white/5 transition-colors"
                >
                  How it Works
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <strong className="block mb-2">Verified ID</strong>
                  <div className="text-sm text-[#f0dca6]">
                    10th / 12th / Graduation verification + CIEW professional ID
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-lg">
                  <strong className="block mb-2">Career Path</strong>
                  <div className="text-sm text-[#f0dca6]">
                    Skill assessments, interview readiness and a 90‑day job
                    support ecosystem
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-lg">
                  <strong className="block mb-2">Employer API</strong>
                  <div className="text-sm text-[#f0dca6]">
                    Consent-first BGV for hiring teams and recruiters
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-lg">
                  <strong className="block mb-2">Institute Partners</strong>
                  <div className="text-sm text-[#f0dca6]">
                    Offline verification centers, campus partnerships and
                    partner benefits
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#3a0a0a] p-6 rounded-xl shadow-2xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <strong className="block text-xl mb-2">Register Now</strong>
                  <div className="text-sm text-[#f0dca6]">
                    Create your free CIEW profile — for fresher and experienced
                    IT engineers
                  </div>
                </div>
                <div className="bg-[#3a2208] px-4 py-2 rounded-full font-bold text-sm">
                  New
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-[#fff6e6] placeholder-[#f0dca6]/50 focus:outline-none focus:border-[#d4af37]/50"
                />

                <input
                  type="tel"
                  placeholder="Mobile number"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-[#fff6e6] placeholder-[#f0dca6]/50 focus:outline-none focus:border-[#d4af37]/50"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-[#fff6e6] placeholder-[#f0dca6]/50 focus:outline-none focus:border-[#d4af37]/50"
                />

                <select className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-[#fff6e6] focus:outline-none focus:border-[#d4af37]/50">
                  <option className="bg-[#3a0a0a]">Choose city</option>
                  <option className="bg-[#3a0a0a]">Lucknow</option>
                  <option className="bg-[#3a0a0a]">Kanpur</option>
                  <option className="bg-[#3a0a0a]">Varanasi</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-[#d4af37] cursor-pointer text-[#3a0a0a] px-6 py-3 rounded-lg font-bold hover:bg-[#ffcf6b] transition-colors"
                >
                  Create Free Account
                </button>
              </form>

              <div className="mt-6 text-sm text-[#f0dca6]">
                Or register via the registration form:{" "}
                <a
                  href="https://forms.gle/GAjeBmT6co1dmKM27"
                  className="text-[#d4af37] hover:underline"
                >
                  Register
                </a>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-[#3a0a0a] p-6 rounded-xl shadow-2xl h-full">
              <h3 className="text-2xl font-bold text-[#d4af37] mb-4">
                Why CIEW matters
              </h3>

              <p className="text-sm text-[#f0dca6] mb-8">
                Every major profession has a council — lawyers, doctors,
                accountants. IT engineers need the same professional identity,
                verified experience, and welfare support. CIEW combines
                verification, registry, assessments, placement support and
                career welfare in one trusted platform.
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-bold mb-3">Quick Links</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3">
                  <a
                    href="institutes.html"
                    className="block text-sm text-[#f0dca6] hover:text-[#d4af37] transition-colors p-3 bg-white/5 rounded-lg text-center"
                  >
                    For Institutes
                  </a>
                  <a
                    href="verify.html"
                    className="block text-sm text-[#f0dca6] hover:text-[#d4af37] transition-colors p-3 bg-white/5 rounded-lg text-center"
                  >
                    Verification Flow
                  </a>
                  <a
                    href="membership.html"
                    className="block text-sm text-[#f0dca6] hover:text-[#d4af37] transition-colors p-3 bg-white/5 rounded-lg text-center"
                  >
                    Memberships & Licenses
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3">Contact</h4>
                <div className="space-y-2 text-sm text-[#f0dca6]">
                  <div>
                    WhatsApp:{" "}
                    <a
                      href="https://chat.whatsapp.com/LzjAqRFLI0oBWcrVgbot8i"
                      className="text-[#d4af37] hover:underline"
                    >
                      Join Community
                    </a>
                  </div>
                  <div>
                    Email:{" "}
                    <span className="text-[#d4af37]">contact@ciew.org</span>
                    (placeholder)
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Home;

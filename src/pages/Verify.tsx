import React, { useState } from "react";

const Verify: React.FC = () => {
  const [ciewId, setCiewId] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Demo: verification requested");
    setCiewId("");
    setSelectedCity("");
  };

  return (
    <div className="min-h-screen bg-[#200101] text-[#fff6e6] font-sans">
      <main className="max-w-[980px] mx-auto px-5 py-5">
        <h1 className="text-3xl font-bold mb-4">Verification Workflow</h1>
        <p className="text-[#f0dca6] mb-8">
          CIEW verification is a three-layer process designed to be fraud-proof
          and scalable for fresher and experienced IT engineers.
        </p>

        <div className="space-y-3 mb-8">
          <div className="bg-[rgba(255,255,255,0.02)] p-[18px] rounded-xl">
            <h2 className="text-[#d4af37] text-xl font-semibold mb-2">
              Step 1 — Basic Registration
            </h2>
            <p className="text-[#f0dca6]">
              A fresher or experienced IT engineer creates a free CIEW profile.
              A unique CIEW ID is generated and used for all future
              verifications.
            </p>
          </div>

          <div className="bg-[rgba(255,255,255,0.02)] p-[18px] rounded-xl">
            <h2 className="text-[#d4af37] text-xl font-semibold mb-2">
              Step 2 — Offline Center: Physical Document Check
            </h2>
            <p className="text-[#f0dca6]">
              Engineer visits an authorized verification center (local computer
              institute). Operator checks original documents (10th, 12th,
              graduation), selfie with documents and uploads scans. Center marks
              'Physically Verified'.
            </p>
          </div>

          <div className="bg-[rgba(255,255,255,0.02)] p-[18px] rounded-xl">
            <h2 className="text-[#d4af37] text-xl font-semibold mb-2">
              Step 3 — Online Verification (DigiLocker / Board APIs)
            </h2>
            <p className="text-[#f0dca6]">
              CIEW attempts automated verification via DigiLocker and
              board/university APIs. If match found → Auto‑verified.
            </p>
          </div>

          <div className="bg-[rgba(255,255,255,0.02)] p-[18px] rounded-xl">
            <h2 className="text-[#d4af37] text-xl font-semibold mb-2">
              Step 4 — College/School Portal
            </h2>
            <p className="text-[#f0dca6]">
              If automated verification fails, a verification request is sent to
              the school/college dashboard. Authorized school admin logs in,
              sees pending verifications and approves or rejects. Final status
              is updated.
            </p>
          </div>

          <div className="bg-[rgba(255,255,255,0.02)] p-[18px] rounded-xl">
            <h2 className="text-[#d4af37] text-xl font-semibold mb-2">
              Step 5 — Finalize & Badge
            </h2>
            <p className="text-[#f0dca6]">
              When the profile has physical + digital + institutional
              confirmations, the CIEW Verified badge is issued along with a
              QR-enabled verification report for employers. Companies request
              access via candidate-consent OTP.
            </p>
          </div>
        </div>

        <h2 className="text-[#d4af37] text-2xl font-semibold mb-3">
          Anti-duplication & Identity
        </h2>
        <p className="text-[#f0dca6] mb-8">
          CIEW uses Mobile + Email + DOB (+ optional Aadhaar) as composite key.
          Duplicate detection runs at upload; OTP verification by candidate
          locks the profile. Institutes cannot create duplicate IDs.
        </p>

        <h2 className="text-[#d4af37] text-2xl font-semibold mb-3">
          Request Verification
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-3">
            <input
              type="text"
              value={ciewId}
              onChange={(e) => setCiewId(e.target.value)}
              placeholder="CIEW ID or Email"
              required
              className="w-full px-3 py-2.5 rounded-lg border border-[rgba(255,255,255,0.04)] 
                         bg-transparent text-[#fff6e6] placeholder-[#f0dca6]
                         focus:outline-none focus:border-[rgba(255,255,255,0.1)]"
            />
          </div>

          <div className="mb-3">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[rgba(255,255,255,0.04)] 
                         bg-transparent text-[#fff6e6]
                         focus:outline-none focus:border-[rgba(255,255,255,0.1)]"
            >
              <option value="">Choose City</option>
              <option value="lucknow" className="bg-[#200101]">
                Lucknow
              </option>
              <option value="kanpur" className="bg-[#200101]">
                Kanpur
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#d4af37] text-[#3a0a0a] px-4 py-2.5 rounded-lg border-none 
                       font-medium hover:bg-[#c49b2e] transition-colors cursor-pointer"
          >
            Request Verification
          </button>
        </form>
      </main>
    </div>
  );
};

export default Verify;

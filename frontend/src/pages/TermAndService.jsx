import React from "react";

const TermsOfService = () => {
  const effectiveDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-7xl mt-20 mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 flex justify-center items-center gap-2">
          <span className="material-symbols-outlined text-5xl text-blue-600">
            gavel
          </span>
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Effective Date: {effectiveDate}
        </p>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          These terms govern your access to our 360° educational transformation
          services, aligning with our mission to empower institutions through
          NEP 2020-compliant solutions.
        </p>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Sidebar */}
        <aside className="md:col-span-1 sticky top-20 space-y-4">
          <h3 className="text-teal-600 font-semibold text-lg flex items-center gap-2">
            <span className="material-symbols-outlined">list</span>
            Quick Navigation
          </h3>
          <ul className="space-y-2 text-blue-600 text-sm">
            <li>
              <a href="#acceptance" className="hover:underline">
                1. Acceptance
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                2. Services
              </a>
            </li>
            <li>
              <a href="#institutional" className="hover:underline">
                3. Institutional Obligations
              </a>
            </li>
            <li>
              <a href="#ip" className="hover:underline">
                4. Intellectual Property
              </a>
            </li>
            <li>
              <a href="#liability" className="hover:underline">
                5. Liability
              </a>
            </li>
            <li>
              <a href="#termination" className="hover:underline">
                6. Termination
              </a>
            </li>
          </ul>
        </aside>

        {/* Content */}
        <main className="md:col-span-3 space-y-16">
          {/* Section 1 */}
          <section id="acceptance">
            <h2 className="text-2xl font-semibold text-teal-700 border-b pb-2 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-2">
              By engaging with EdVantage 360° Solutions' services, institutions
              agree to:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              <li>Comply with all NEP 2020 implementation guidelines</li>
              <li>Provide accurate information for academic audits</li>
              <li>Designate authorized personnel for training coordination</li>
            </ol>
          </section>

          {/* Section 2 */}
          <section id="services">
            <h2 className="text-2xl font-semibold text-teal-700 border-b pb-2 mb-4">
              2. Service Scope
            </h2>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Our 360° Framework Includes:
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <ul className="list-disc list-inside text-gray-700">
                <li>Academic ecosystem diagnostics</li>
                <li>Teacher capacity building programs</li>
                <li>Digital transformation roadmaps</li>
              </ul>
              <ul className="list-disc list-inside text-gray-700">
                <li>NEP 2020 compliance consulting</li>
                <li>Student outcome analytics</li>
                <li>Institutional branding strategies</li>
              </ul>
            </div>
            <p className="italic text-gray-600 mt-4">
              Note: Specific deliverables will be outlined in individual
              Statement of Work agreements.
            </p>
          </section>

          {/* Section 3 */}
          <section id="institutional">
            <h2 className="text-2xl font-semibold text-teal-700 border-b pb-2 mb-4">
              3. Institutional Responsibilities
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong className="text-gray-900">Timely Access:</strong>{" "}
                Provide necessary institutional data for audits within 15
                business days.
              </li>
              <li>
                <strong className="text-gray-900">Staff Participation:</strong>{" "}
                Ensure minimum 80% attendance in scheduled training sessions.
              </li>
              <li>
                <strong className="text-gray-900">Infrastructure:</strong>{" "}
                Maintain basic digital infrastructure for transformation
                programs.
              </li>
            </ul>
          </section>

          {/* Highlighted Clause */}
          <section className="bg-blue-50 border-l-4 border-blue-300 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined">warning</span>
              Important Notice
            </h3>
            <p className="text-blue-900">
              Educational institutions retain full ownership of student data. We
              process information only as necessary to deliver contracted
              services under strict confidentiality agreements.
            </p>
          </section>
        </main>
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-16">
        <h3 className="text-xl font-semibold mb-2">
          Questions about these terms?
        </h3>
        <p className="text-gray-700">
          Contact our legal team at{" "}
          <a
            href="mailto:edvantage360.info@gmail.com "
            className="text-blue-600 underline">
            9813198272
          </a>{" "}
          or
          <br />
          call our compliance officer at +91 8700356606
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;

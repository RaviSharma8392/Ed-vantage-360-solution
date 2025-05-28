import React from 'react';

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-5xl mt-10 mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mt-2">
          Last Updated: {lastUpdated}
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4 border-b pb-2 border-gray-200">
          Our Commitment to Your Privacy
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At EdVantage 360 Solutions, we uphold our mission to empower
          educational excellence by protecting your personal data with the same
          rigor we apply to transforming learning ecosystems. This policy
          outlines how we collect, use, and safeguard information in alignment
          with global data protection standards.
        </p>
      </section>

      <SectionHeader title="1. Information We Collect" />

      <section className="mb-10">
        <h3 className="text-xl font-medium text-blue-700 mb-2">
          A. From Educational Institutions:
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Contact details of administrators</li>
          <li>Institutional documents for academic audits</li>
          <li>Staff/student demographics (aggregated)</li>
          <li>Digital infrastructure details</li>
        </ul>

        <h3 className="text-xl font-medium text-blue-700 mt-6 mb-2">
          B. From Educators & Students:
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Professional qualifications</li>
          <li>Learning analytics</li>
          <li>Feedback on NEP 2020 implementation</li>
        </ul>
      </section>

      <SectionHeader title="2. How We Use Your Data" />

      <section className="mb-10 overflow-x-auto">
        <table className="min-w-full border text-left text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Purpose</th>
              <th className="py-2 px-4 border-b">Legal Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">
                Delivering academic audit reports
              </td>
              <td className="py-2 px-4 border-b">Contractual obligation</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-2 px-4 border-b">
                Customizing teacher training programs
              </td>
              <td className="py-2 px-4 border-b">Legitimate interest</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                NEP 2020 compliance consulting
              </td>
              <td className="py-2 px-4 border-b">Explicit consent</td>
            </tr>
          </tbody>
        </table>
      </section>

      <SectionHeader title="3. Data Sharing & Protection" />

      <section className="mb-10">
        <h4 className="text-lg font-semibold text-green-600 mb-2">
          We only share data with:
        </h4>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Accredited partner trainers (under NDAs)</li>
          <li>Government bodies for NEP compliance</li>
        </ul>

        <h4 className="text-lg font-semibold text-green-600 mb-2">
          Security Measures:
        </h4>
        <ol className="list-decimal list-inside text-gray-700">
          <li>AES-256 encryption for all stored data</li>
          <li>Annual penetration testing</li>
          <li>Role-based access controls</li>
        </ol>
      </section>

      <SectionHeader title="4. Your Rights" />

      <section className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <RightsCard text="Request access to your data" />
        <RightsCard text="Correct inaccuracies" />
        <RightsCard text="Withdraw consent" />
        <RightsCard text="Request deletion" />
      </section>

      <div className="bg-gray-100 p-4 rounded mb-10">
        <p className="text-gray-700">
          <strong>Submit requests to:</strong>{" "}
          <a
            href="mailto: director.edvantage360@gmail.com"
            className="text-blue-600 underline">
            director.edvantage360@gmail.com
          </a>
        </p>
      </div>

      <div className="text-center border-t pt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          "Empowering education through responsible data stewardship"
        </h3>
        <p className="text-gray-600">
          <strong>EdVantage 360 Solutions</strong>
          <br />
          Address: B2/901, Cherry County, Techzone - IV, Greater Noida West,
          Gautam Budh Nagar – 201301 | edvantage360.info@gmail.com | 9813198272
        </p>
      </div>
    </div>
  );
};

const SectionHeader = ({ title }) => (
  <h2 className="text-2xl font-semibold text-teal-600 mb-6 mt-12 border-b pb-2 border-gray-200">
    {title}
  </h2>
);

const RightsCard = ({ text }) => (
  <div className="bg-blue-50 text-blue-800 p-4 rounded shadow-sm flex items-center">
    <span className="text-lg">{text}</span>
  </div>
);

export default PrivacyPolicy;

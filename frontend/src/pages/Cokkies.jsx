import React from 'react';

const CookiePrivacyPolicy = () => {
  const effectiveDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-7xl mt-20 mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">
          Cookie & Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mt-2">Effective Date: {effectiveDate}</p>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          This policy explains how EdVantage 360 Solutions uses cookies and protects
          any information that you share with us during your digital engagement.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-16">
        {/* Section 1: Introduction */}
        <section id="introduction">
          <h2 className="text-2xl font-semibold text-teal-700 border-b pb-2 mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-700">
            We are committed to safeguarding the privacy of our users. This policy
            outlines our practices regarding the use of cookies and the protection of
            personally identifiable information (PII) collected through our platform.
          </p>
        </section>

        {/* Section 2: What Are Cookies */}
        <section id="cookies">
          <h2 className="text-2xl font-semibold text-teal-700 border-b pb-2 mb-4">
            2. What Are Cookies?
          </h2>
          <p className="text-gray-700 mb-2">
            Cookies are small text files placed on your device when you visit our site.
            They help us improve your user experience, monitor performance, and analyze usage.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Essential Cookies:</strong> Required for platform functionality</li>
            <li><strong>Analytics Cookies:</strong> Track usage to improve content</li>
            <li><strong>Preference Cookies:</strong> Remember your settings</li>
          </ul>
        </section>

        {/* Section 3: What We Collect */}
        <section id="data-collection">
          <h2 className="text-2xl font-semibold text-teal-700 border-b pb-2 mb-4">
            3. Data We Collect
          </h2>
          <p className="text-gray-700">
            We may collect the following information:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Institution name and contact details</li>
            <li>Browser and device information</li>
            <li>Pages visited and time spent</li>
            <li>User-submitted data (e.g., forms, assessments)</li>
          </ul>
        </section>

        {/* Section 4: How We Use It */}
        <section id="use-of-data">
          <h2 className="text-2xl font-semibold text-teal-700 border-b pb-2 mb-4">
            4. How We Use This Information
          </h2>
          <p className="text-gray-700">
            Data is used to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Improve educational service delivery</li>
            <li>Personalize platform experience</li>
            <li>Send occasional service-related updates</li>
          </ul>
        </section>

        {/* Section 5: Third Parties */}
        <section id="third-parties">
          <h2 className="text-2xl font-semibold text-teal-700 border-b pb-2 mb-4">
            5. Third-Party Services
          </h2>
          <p className="text-gray-700">
            We may use trusted third-party tools such as Google Analytics for
            performance monitoring. These providers have their own privacy policies,
            and we encourage reviewing them independently.
          </p>
        </section>

        {/* Section 6: Your Control */}
        <section id="your-control">
          <h2 className="text-2xl font-semibold text-teal-700 border-b pb-2 mb-4">
            6. Your Rights and Control
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>You may accept or decline cookies via your browser settings.</li>
            <li>You can request access to or deletion of your personal data.</li>
            <li>We honor Do Not Track (DNT) signals where supported.</li>
          </ul>
        </section>

        {/* Notice */}
        <section className="bg-blue-50 border-l-4 border-blue-300 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-blue-800 mb-2">
            Important Notice
          </h3>
          <p className="text-blue-900">
            We do not sell or lease your personal information to third parties. All
            data is processed in accordance with applicable data protection laws.
          </p>
        </section>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-2">Have Privacy Concerns?</h3>
          <p className="text-gray-700">
            Reach out to our data protection officer at{' '}
            <a href="mailto:privacy@edvantage360.com" className="text-blue-600 underline">privacy@edvantage360.com</a>{' '}
            or call +1 (555) 360-2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePrivacyPolicy;

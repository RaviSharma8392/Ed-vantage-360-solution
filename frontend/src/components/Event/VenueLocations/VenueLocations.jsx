import React from "react";
import { Mail, FileText, Award, CheckCircle, Users } from "lucide-react";

export default function SubmissionProcess() {
  return (
    <section className="bg-gray-950 text-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Submission Process */}
        <div>
          <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center md:text-left">
            Submission Process
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Schools aspiring to participate in the{" "}
            <span className="font-semibold text-yellow-300">
              EdVantage Global School Summit & Awards 2025 (GSSA)
            </span>{" "}
            are requested to submit their documentation and evidence of
            initiatives carried out in the last two years.
          </p>

          {/* Email */}
          <div className="flex items-center gap-3 mb-8 bg-gray-900 p-4 rounded-lg border border-yellow-600 shadow-md">
            <Mail className="w-6 h-6 text-yellow-400" />
            <p>
              📧 Email your entries to:{" "}
              <span className="font-semibold text-yellow-300">
                edvantage360.info@gmail.com
              </span>
            </p>
          </div>

          {/* Must Include List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2 text-yellow-300">
              <FileText className="w-6 h-6" /> Must Include:
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-300 text-base leading-relaxed">
              <li>
                <span className="font-semibold">Statement of Purpose</span> –
                Why the category was chosen (max 500 words).
              </li>
              <li>
                <span className="font-semibold">Evidence of Achievement</span> –
                Photos, certificates, videos, testimonials, project reports,
                internships with NGOs for the award chosen.
              </li>
              <li>
                <span className="font-semibold">Leadership Profile</span> – 200
                words write-up about the school leadership (Chairman/ Director/
                Principal).
              </li>
            </ul>
          </div>
        </div>

        {/* Jury & Selection */}
        <div>
          <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center md:text-left">
            Jury & Selection Process
          </h2>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-7 h-7 text-yellow-400" />
              <h3 className="text-2xl font-semibold text-yellow-300">
                A Panel of Experts
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              A panel of distinguished experts worldwide will evaluate all
              entries based on the following criteria:
            </p>

            {/* Evaluation Criteria */}
            <ul className="grid sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-3 bg-gray-800 p-4 rounded-lg border border-gray-700">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <p>
                  <span className="font-semibold">Relevance to category</span> –
                  20%
                </p>
              </li>
              <li className="flex items-start gap-3 bg-gray-800 p-4 rounded-lg border border-gray-700">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <p>
                  <span className="font-semibold">
                    Quality & impact of work
                  </span>{" "}
                  – 40%
                </p>
              </li>
              <li className="flex items-start gap-3 bg-gray-800 p-4 rounded-lg border border-gray-700">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <p>
                  <span className="font-semibold">Innovation & creativity</span>{" "}
                  – 20%
                </p>
              </li>
              <li className="flex items-start gap-3 bg-gray-800 p-4 rounded-lg border border-gray-700">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <p>
                  <span className="font-semibold">
                    Presentation & portfolio clarity
                  </span>{" "}
                  – 20%
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

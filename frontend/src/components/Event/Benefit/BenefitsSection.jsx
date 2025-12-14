import React from "react";
import { Award, BookOpen, Users, Briefcase, Star } from "lucide-react";

/* Icon map */
const ICON_MAP = {
  Award,
  BookOpen,
  Users,
  Briefcase,
  Star,
};

const BenefitsSection = ({
  title,
  benefits,
  summary,
  image,
  buttonLink,
  buttonLabel,
}) => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Image */}
        {image && (
          <div className="flex justify-center md:justify-start">
            <img
              src={image}
              alt="Trophy"
              className="w-72 md:w-[400px] drop-shadow-2xl"
            />
          </div>
        )}

        {/* Right Side Benefits */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
            {title}
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((b, i) => {
              const Icon = ICON_MAP[b.icon];

              return (
                <div
                  key={i}
                  className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="mb-3">
                    {Icon && <Icon className="w-8 h-8 text-yellow-400" />}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{b.title}</h3>
                  <p className="text-gray-400 text-sm">{b.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Summary Box */}
          {summary && (
            <div className="mt-12 bg-gray-900 p-6 rounded-lg border border-yellow-600 text-sm md:text-base leading-relaxed text-gray-200 shadow-md">
              <p>{summary}</p>
            </div>
          )}

          {/* CTA Button */}
          {buttonLink && (
            <div className="mt-12 text-center md:text-left">
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-all">
                {buttonLabel}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

import React from "react";
import {
  Mail,
  Phone,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const EventFooter = ({ footerData }) => {
  const {
    logo,
    organization,
    description,
    ngoPartner,
    partner,
    contacts,
    socials,
    bottomBar,
  } = footerData;

  return (
    <footer className="bg-black  hidden border-t text-gray-300 py-20 px-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Column 1: Logo + About */}
        <div className="flex flex-col gap-4">
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-10 bg-white rounded-lg p-2 shadow"
            loading="lazy"
          />
          <h3 className="text-2xl font-bold text-white mt-2">
            {organization.name}
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">{description}</p>
          {ngoPartner && (
            <p className="text-sm leading-relaxed text-gray-400 mt-2">
              Organised by{" "}
              <span className="font-semibold text-white">
                {ngoPartner.name}
              </span>
              {ngoPartner.partner && ` in collaboration with `}
              {ngoPartner.partner && (
                <span className="font-semibold text-white">
                  {ngoPartner.partner}
                </span>
              )}
              {ngoPartner.note && ` (${ngoPartner.note})`}
            </p>
          )}
        </div>

        {/* Column 2: Partner */}
        {partner && (
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Our Partner</h3>
            <p className="text-sm text-gray-400 mb-4">{partner.description}</p>
            <div className="flex items-center">
              <img
                src={partner.logo.src}
                alt={partner.logo.alt}
                className="h-14 w-auto bg-white rounded-lg p-2 shadow"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Column 3: Contact */}
        {contacts && (
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              {contacts.map((c, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {c.type === "email" && (
                    <Mail className="w-4 h-4 text-white" />
                  )}
                  {c.type === "phone" && (
                    <Phone className="w-4 h-4 text-white" />
                  )}
                  {c.type === "website" && (
                    <Globe className="w-4 h-4 text-white" />
                  )}
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white">
                      {c.value}
                    </a>
                  ) : (
                    <span>{c.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Column 4: Social Links */}
        {socials && (
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Stay Connected
            </h3>
            <p className="text-sm text-gray-400 mb-4">{socials.description}</p>
            <div className="flex gap-5 mb-6">
              {socials.links.facebook && (
                <a
                  href={socials.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                  aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
              )}
              {socials.links.instagram && (
                <a
                  href={socials.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                  aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
              )}
              {socials.links.linkedin && (
                <a
                  href={socials.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                  aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
            </div>
            {socials.website && (
              <a
                href={socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-sm">
                {socials.website}
              </a>
            )}
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500 leading-relaxed">
        <p>
          © {new Date().getFullYear()} {bottomBar.organization} All Rights
          Reserved.
        </p>
        {bottomBar.designer && (
          <p className="mt-2 text-gray-400">
            Designed, Managed & Developed with ❤️ by{" "}
            <a
              href={bottomBar.designer.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:underline">
              {bottomBar.designer.name}
            </a>
          </p>
        )}
      </div>
    </footer>
  );
};

export default EventFooter;

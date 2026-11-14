import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Instagram, 
  ShieldCheck, 
  Calendar, 
  Building2,
  ArrowUpRight
} from 'lucide-react';
import { SDFLogo } from './SDFLogo';
import { SDF_INFO } from '../data/foundationData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#05282E] text-[#F8F7EF] border-t border-[#087F78]/30 overflow-hidden">
      {/* Decorative ambient water light sweep */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#49CEC3] to-transparent opacity-60" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-[#087F78]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Official Registration Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-block" aria-label="Samrakshan Dhara Foundation">
              <SDFLogo size={56} showText={true} />
            </Link>

            <p className="text-sm text-[#E6EEE7]/80 leading-relaxed max-w-sm">
              The Living World — Nature. Humanity. Compassion. A continuous movement of care dedicated to environmental balance, animal protection, and community welfare.
            </p>

            {/* Official Legal Registry Box */}
            <div className="p-4 rounded-xl bg-[#073B43]/70 border border-[#49CEC3]/20 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#D5AD65] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#D5AD65]" />
                <span>Section 8 Non-Profit Organisation</span>
              </div>
              <div className="flex items-center gap-2 text-[#E6EEE7]/80">
                <Building2 className="w-3.5 h-3.5 text-[#49CEC3]" />
                <span>CIN: <span className="font-mono text-[#F8F7EF]">{SDF_INFO.cin}</span></span>
              </div>
              <div className="flex items-center gap-2 text-[#E6EEE7]/80">
                <Calendar className="w-3.5 h-3.5 text-[#49CEC3]" />
                <span>Incorporated: {SDF_INFO.incorporatedDate}</span>
              </div>
              <div className="flex items-center gap-2 text-[#E6EEE7]/80">
                <MapPin className="w-3.5 h-3.5 text-[#49CEC3]" />
                <span>{SDF_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D5AD65]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E6EEE7]/80">
              <li>
                <Link to="/" className="hover:text-[#49CEC3] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#49CEC3] transition-colors">
                  About SDF
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="hover:text-[#49CEC3] transition-colors">
                  Our Initiatives
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#49CEC3] transition-colors">
                  Vision Gallery
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="hover:text-[#49CEC3] transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#49CEC3] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Contact & Verified Channels (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D5AD65]">
              Official Channels
            </h4>

            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${SDF_INFO.email}`}
                className="flex items-center gap-2.5 text-[#E6EEE7]/90 hover:text-[#49CEC3] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#49CEC3] shrink-0" />
                <span className="text-xs">{SDF_INFO.email}</span>
              </a>

              <a
                href={SDF_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-[#F8F7EF] hover:text-[#49CEC3] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#D5AD65]" />
                <span>@samrakshan_dhara</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Stage Note */}
            <div className="pt-2 text-[11px] text-[#E6EEE7]/60 leading-relaxed italic border-t border-white/5">
              Samrakshan Dhara Foundation is in its preparatory stage. All programmes and activities are proposed, planned, and future-oriented.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E6EEE7]/60">
          <p>
            © {new Date().getFullYear()} {SDF_INFO.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-[#49CEC3] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link to="/terms" className="hover:text-[#49CEC3] transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

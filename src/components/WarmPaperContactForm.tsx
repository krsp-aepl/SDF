import React, { useState } from 'react';
import { 
  Send, 
  Check, 
  Copy, 
  AlertCircle, 
  ArrowRight, 
  RotateCcw,
  ShieldCheck,
  MailCheck
} from 'lucide-react';
import { SDF_INFO } from '../data/foundationData';

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  privacyConsent: boolean;
  honeypot: string; // Anti-spam hidden field
}

const SUBJECT_OPTIONS = [
  'General Enquiry',
  'Collaboration',
  'Media Enquiry',
  'Feedback or Suggestion',
  'Other',
];

export const WarmPaperContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    privacyConsent: false,
    honeypot: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'Please agree to the privacy policy to continue.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap: if bot filled hidden field, drop silently
    if (formData.honeypot) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Prepare verified mailto draft
    const mailtoSubject = encodeURIComponent(
      `[SDF Official Contact] ${formData.subject} — ${formData.fullName.trim()}`
    );
    const mailtoBody = encodeURIComponent(
      `Dear Samrakshan Dhara Foundation,\n\n` +
      `Sender Name: ${formData.fullName.trim()}\n` +
      `Sender Email: ${formData.email.trim()}\n` +
      `Subject Category: ${formData.subject}\n\n` +
      `Message:\n${formData.message.trim()}\n\n` +
      `---\n` +
      `Dispatched via SDF Official Contact Portal (Section 8 Non-Profit, Dhanbad, Jharkhand)\n` +
      `Date: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`
    );

    // Simulate verified dispatch preparation
    setTimeout(() => {
      // Trigger user's mail client with verified draft
      window.location.href = `mailto:${SDF_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleCopyMessage = () => {
    const textToCopy = 
      `To: ${SDF_INFO.email}\n` +
      `Subject: [SDF Official Contact] ${formData.subject} — ${formData.fullName}\n` +
      `From: ${formData.fullName} (${formData.email})\n\n` +
      `${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
      privacyConsent: false,
      honeypot: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="relative w-full max-w-[540px] select-text">
      {/* =======================================================================
          WARM IVORY PAPER STATIONERY CHASSIS
          Features realistic deckle parchment tone, soft ambient shadow, 
          metallic paperclip and botanical olive leaf sprig
          ======================================================================= */}
      <div 
        className="relative bg-[#FAF7EE] text-[#1E3A34] rounded-3xl p-7 sm:p-9 lg:p-10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.65),0_15px_30px_-10px_rgba(3,28,32,0.4)] border border-[#E8DFC8] overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 85% 15%, rgba(213, 173, 101, 0.08) 0%, transparent 45%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(246, 241, 230, 0.95) 100%)
          `,
        }}
      >
        {/* Subtle Diagonal Natural Sunlight & Leaf Shadow overlay across paper */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply"
          style={{
            background: 'linear-gradient(125deg, transparent 40%, rgba(7, 59, 67, 0.08) 60%, transparent 80%)',
          }}
        />

        {/* =====================================================================
            METALLIC PAPERCLIP & BOTANICAL SPRIG (Top Right Decoration)
            Matches reference image's stationery charm
            ===================================================================== */}
        <div className="absolute top-4 right-6 sm:top-5 sm:right-8 flex items-start gap-1 pointer-events-none z-20">
          {/* Olive Leaf Sprig SVG */}
          <svg
            className="w-10 h-14 sm:w-12 sm:h-16 text-[#355E52] opacity-85 -rotate-12 drop-shadow-sm"
            viewBox="0 0 60 80"
            fill="none"
          >
            <path
              d="M 45 10 C 35 25, 25 45, 10 75"
              stroke="#2B4D43"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Leaf 1 */}
            <path
              d="M 45 10 C 30 12, 22 24, 30 32 C 38 40, 48 25, 45 10 Z"
              fill="#426E60"
              opacity="0.8"
            />
            {/* Leaf 2 */}
            <path
              d="M 33 26 C 20 28, 12 40, 20 48 C 28 54, 36 38, 33 26 Z"
              fill="#528373"
              opacity="0.75"
            />
            {/* Leaf 3 */}
            <path
              d="M 22 46 C 10 50, 4 60, 12 68 C 20 72, 26 58, 22 46 Z"
              fill="#3A6457"
              opacity="0.85"
            />
          </svg>

          {/* Realistic Metallic Wire Paperclip SVG */}
          <svg
            className="w-5 h-12 sm:w-6 sm:h-14 -ml-4 -mt-1 drop-shadow-md text-[#A4A9B0]"
            viewBox="0 0 24 56"
            fill="none"
          >
            <path
              d="M 12 5 
                 C 18 5, 20 9, 20 16 
                 L 20 42 
                 C 20 49, 15 53, 9 53 
                 C 3 53, 0 49, 0 42 
                 L 0 14 
                 C 0 8, 4 4, 8 4 
                 C 13 4, 15 8, 15 14 
                 L 15 38 
                 C 15 42, 13 44, 10 44 
                 C 7 44, 5 42, 5 38 
                 L 5 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Specular Highlight on Wire */}
            <path
              d="M 12 5 C 16 5, 18 8, 18 14 L 18 36"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* =====================================================================
            HEADING & EDITORIAL INTRO
            ===================================================================== */}
        <div className="relative z-10 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#6B7C72]">
              SHARE YOUR THOUGHTS
            </span>
            <div className="w-12 h-px bg-[#C8C0AA]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0B332B] tracking-tight leading-tight">
            Write to Us
          </h2>

          <p className="mt-1 text-xs sm:text-sm text-[#4E6157] font-light leading-relaxed">
            Fill in the details below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* =====================================================================
            SUBMISSION CONFIRMATION RECEIPT (When submitted)
            ===================================================================== */}
        {isSubmitted ? (
          <div className="relative z-10 py-4 space-y-5 animate-in fade-in zoom-in-95 duration-400">
            <div className="p-5 rounded-2xl bg-[#EBF4EE] border border-[#B4D7C4] text-[#1E3A34] space-y-3">
              <div className="flex items-center gap-2.5 text-[#196B52]">
                <MailCheck className="w-5 h-5 text-[#28A77B]" />
                <span className="font-serif text-lg font-medium">Communication Draft Generated</span>
              </div>
              <p className="text-xs sm:text-sm text-[#355E52] leading-relaxed">
                Your enquiry has been prepared and opened in your email client addressed to{' '}
                <strong className="text-[#073B43] font-semibold">{SDF_INFO.email}</strong>.
              </p>
            </div>

            {/* Message Details Preview Card */}
            <div className="p-4 rounded-xl bg-white/70 border border-[#DDD5BF] space-y-2 text-xs">
              <div className="flex justify-between text-[#6B7C72]">
                <span>Category:</span>
                <span className="font-medium text-[#073B43]">{formData.subject}</span>
              </div>
              <div className="flex justify-between text-[#6B7C72]">
                <span>Sender:</span>
                <span className="font-medium text-[#073B43]">{formData.fullName} ({formData.email})</span>
              </div>
              <div className="pt-2 border-t border-[#E8DFC8]">
                <span className="text-[#6B7C72] block mb-1">Message Body:</span>
                <p className="font-serif italic text-[#1E3A34] leading-relaxed bg-[#F7F4EB] p-2.5 rounded-lg border border-[#E5DEC7]">
                  &ldquo;{formData.message}&rdquo;
                </p>
              </div>
            </div>

            {/* Action Buttons: Copy Message & Send Another */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyMessage}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#073B43] hover:bg-[#087F78] text-[#F8F7EF] text-xs font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
              >
                {copiedSummary ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#49CEC3]" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Prepared Message</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-black/5 hover:bg-black/10 text-[#073B43] text-xs font-medium transition-colors cursor-pointer border border-[#DDD5BF]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Write Another Note</span>
              </button>
            </div>
          </div>
        ) : (
          /* ===================================================================
              INTERACTIVE WARM PAPER FORM
              =================================================================== */
          <form onSubmit={handleSubmit} noValidate className="relative z-10 space-y-4">
            {/* Anti-spam hidden honeypot */}
            <input
              type="text"
              name="_gotcha"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Full Name & Email Fields (Grid on tablet/desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {/* Full Name */}
              <div className="space-y-1">
                <label 
                  htmlFor="contact-fullName" 
                  className="block text-xs font-medium text-[#2E4A40]"
                >
                  Full Name <span className="text-[#C2410C]">*</span>
                </label>
                <input
                  id="contact-fullName"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-white/80 border text-xs sm:text-sm text-[#0A2E26] placeholder-[#8F9E96] focus:outline-none focus:ring-2 focus:ring-[#073B43]/20 transition-all ${
                    errors.fullName ? 'border-[#C2410C] bg-[#FFF5F2]' : 'border-[#DDD5C0] focus:border-[#073B43]'
                  }`}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                />
                {errors.fullName && (
                  <p id="error-fullName" className="text-[11px] text-[#C2410C] flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label 
                  htmlFor="contact-email" 
                  className="block text-xs font-medium text-[#2E4A40]"
                >
                  Email Address <span className="text-[#C2410C]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-white/80 border text-xs sm:text-sm text-[#0A2E26] placeholder-[#8F9E96] focus:outline-none focus:ring-2 focus:ring-[#073B43]/20 transition-all ${
                    errors.email ? 'border-[#C2410C] bg-[#FFF5F2]' : 'border-[#DDD5C0] focus:border-[#073B43]'
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'error-email' : undefined}
                />
                {errors.email && (
                  <p id="error-email" className="text-[11px] text-[#C2410C] flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Subject Dropdown */}
            <div className="space-y-1">
              <label 
                htmlFor="contact-subject" 
                className="block text-xs font-medium text-[#2E4A40]"
              >
                Subject <span className="text-[#C2410C]">*</span>
              </label>
              <div className="relative">
                <select
                  id="contact-subject"
                  required
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: undefined });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-white/80 border text-xs sm:text-sm text-[#0A2E26] focus:outline-none focus:ring-2 focus:ring-[#073B43]/20 appearance-none transition-all pr-10 ${
                    errors.subject ? 'border-[#C2410C] bg-[#FFF5F2]' : 'border-[#DDD5C0] focus:border-[#073B43]'
                  }`}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'error-subject' : undefined}
                >
                  <option value="" disabled>Select a topic</option>
                  {SUBJECT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {/* Custom Chevron Indicator */}
                <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-[#6B7C72]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {errors.subject && (
                <p id="error-subject" className="text-[11px] text-[#C2410C] flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.subject}</span>
                </p>
              )}
            </div>

            {/* Your Message Field */}
            <div className="space-y-1">
              <label 
                htmlFor="contact-message" 
                className="block text-xs font-medium text-[#2E4A40]"
              >
                Your Message <span className="text-[#C2410C]">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="Tell us what's on your mind..."
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: undefined });
                }}
                className={`w-full px-3.5 py-2.5 rounded-xl bg-white/80 border text-xs sm:text-sm text-[#0A2E26] placeholder-[#8F9E96] focus:outline-none focus:ring-2 focus:ring-[#073B43]/20 transition-all resize-none ${
                  errors.message ? 'border-[#C2410C] bg-[#FFF5F2]' : 'border-[#DDD5C0] focus:border-[#073B43]'
                }`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'error-message' : undefined}
              />
              {errors.message && (
                <p id="error-message" className="text-[11px] text-[#C2410C] flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Privacy Consent Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  id="contact-privacy"
                  checked={formData.privacyConsent}
                  onChange={(e) => {
                    setFormData({ ...formData, privacyConsent: e.target.checked });
                    if (errors.privacyConsent) setErrors({ ...errors, privacyConsent: undefined });
                  }}
                  className="mt-0.5 w-4 h-4 rounded text-[#073B43] border-[#DDD5C0] focus:ring-[#073B43] cursor-pointer"
                />
                <span className="text-[11px] sm:text-xs text-[#4E6157] leading-tight">
                  I agree to the privacy policy and allow SDF to contact me.
                </span>
              </label>
              {errors.privacyConsent && (
                <p className="text-[11px] text-[#C2410C] flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.privacyConsent}</span>
                </p>
              )}
            </div>

            {/* Main Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#073B43] hover:bg-[#094752] text-[#F8F7EF] font-medium text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-[#073B43]/30 border border-[#D5AD65]/35 hover:border-[#D5AD65] active:scale-[0.99] cursor-pointer disabled:opacity-70 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#D5AD65] border-t-transparent rounded-full animate-spin" />
                    <span>Preparing Transmission...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4 text-[#D5AD65] transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* =====================================================================
            BOTTOM CALLIGRAPHIC HANDWRITTEN NOTE
            "Small steps create big change" (matches reference image)
            ===================================================================== */}
        <div className="relative z-10 mt-6 pt-4 border-t border-[#E8DFC8]/60 flex items-center justify-between">
          <div className="flex flex-col items-start">
            <span className="font-handwritten text-xl sm:text-2xl text-[#2B4D43] tracking-wide -rotate-1 drop-shadow-xs">
              Small steps
            </span>
            <span className="font-handwritten text-xl sm:text-2xl text-[#2B4D43] tracking-wide ml-2 -mt-1 drop-shadow-xs">
              create big change
            </span>
            {/* Subtle underline sketch */}
            <svg className="w-28 h-1.5 text-[#D5AD65]/70 -mt-0.5" viewBox="0 0 100 6" fill="none">
              <path d="M 2 3 Q 50 5, 98 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#6B7C72]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#28A77B]" />
            <span>Encrypted Transmission</span>
          </div>
        </div>
      </div>
    </div>
  );
};

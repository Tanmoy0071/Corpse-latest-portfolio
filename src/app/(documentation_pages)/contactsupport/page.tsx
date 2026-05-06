export default function ContactSupport() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 sm:px-6">
      
      <div className="w-full max-w-md sm:max-w-lg border border-white/10 rounded-2xl p-6 sm:p-8 text-center">

        {/* Icon */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ff3b3b]/10 flex items-center justify-center mx-auto mb-4 sm:mb-5">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff3b3b"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-white text-lg sm:text-xl font-semibold mb-2">
          Contact Support
        </h1>

        {/* Description */}
        <p className="text-white/50 text-xs mb-10 sm:text-sm leading-relaxed sm:mb-6 px-2 sm:px-4">
          Have a question or issue? Send us an email and we&apos;ll get back to you within 24–48 hours.
        </p>

        {/* Button */}
        <a
          href="mailto:support@corpsearena.com"
          className="flex items-center justify-center mt-10 gap-2 w-full py-3 sm:py-3.5 rounded-xl bg-[#ff3b3b] hover:bg-[#e03333] active:scale-[0.98] transition-all text-white text-sm sm:text-base font-medium"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 7l10 7 10-7" />
          </svg>
          support@corpsearena.com
        </a>

      </div>
    </main>
  );
}
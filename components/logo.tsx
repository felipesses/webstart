import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <div className="flex items-center gap-4">
        <svg
          className="w-8 h-8"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              cx="21.152%"
              cy="86.063%"
              fx="21.152%"
              fy="86.063%"
              r="79.941%"
              id="footer-logo"
            >
              <stop stopColor="#4FD1C5" offset="0%" />
              <stop stopColor="#81E6D9" offset="25.871%" />
              <stop stopColor="#338CF5" offset="100%" />
            </radialGradient>
          </defs>
          <rect
            width="32"
            height="32"
            rx="16"
            fill="url(#footer-logo)"
            fillRule="nonzero"
          />
        </svg>

        <p className="text-2xl bg-clip-text font-bold text-transparent  bg-gradient-to-r from-blue-500 to-teal-400">
          WebStart
        </p>
      </div>
    </Link>
  );
}

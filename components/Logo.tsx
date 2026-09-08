import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="CoreNovaIT home"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        className="shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="33%" stopColor="#EA4335" />
            <stop offset="66%" stopColor="#FBBC05" />
            <stop offset="100%" stopColor="#34A853" />
          </linearGradient>
        </defs>
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="9"
          fill="url(#logo-gradient)"
          opacity="0.16"
        />
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="9"
          stroke="url(#logo-gradient)"
          strokeWidth="1.4"
        />
        <path
          d="M20.5 10.5c-1.2-1.1-2.8-1.7-4.5-1.7-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7c1.7 0 3.3-.6 4.5-1.7"
          stroke="url(#logo-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="16.5" cy="15.5" r="1.6" fill="url(#logo-gradient)" />
      </svg>
      <span className="font-display text-lg font-bold tracking-tight text-text-primary">
        CoreNova<span className="text-gradient">IT</span>
      </span>
    </Link>
  );
}

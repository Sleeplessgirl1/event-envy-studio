const ChairsIcon = ({ size = 28, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Silla Versalles (izquierda) */}
    <g>
      <path d="M10 40 L10 54" />
      <path d="M22 40 L22 54" />
      <rect x="9" y="32" width="14" height="8" rx="1" />
      <path d="M11 32 L11 20 Q16 15 21 20 L21 32" />
    </g>
    {/* Silla Crossback (derecha) */}
    <g>
      <path d="M36 40 L36 54" />
      <path d="M50 40 L50 54" />
      <rect x="35" y="32" width="16" height="8" rx="1" />
      <path d="M37 32 L37 16 L49 16 L49 32" />
      <path d="M37 16 L49 32" />
      <path d="M49 16 L37 32" />
    </g>
  </svg>
);

export default ChairsIcon;

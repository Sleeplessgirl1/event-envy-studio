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
      <path d="M8 38 L8 52" />
      <path d="M18 38 L18 52" />
      <rect x="7" y="30" width="12" height="8" rx="1" />
      <path d="M9 30 L9 20 Q13 16 17 20 L17 30" />
    </g>
    {/* Silla Crossback (centro) */}
    <g>
      <path d="M26 38 L26 52" />
      <path d="M38 38 L38 52" />
      <rect x="25" y="30" width="14" height="8" rx="1" />
      <path d="M27 30 L27 16 L37 16 L37 30" />
      <path d="M27 16 L37 30" />
      <path d="M37 16 L27 30" />
    </g>
    {/* Silla Moderna (derecha) */}
    <g>
      <path d="M46 38 L44 52" />
      <path d="M56 38 L58 52" />
      <rect x="45" y="30" width="12" height="8" rx="2" />
      <path d="M46 30 L46 22 Q51 18 56 22 L56 30" />
    </g>
  </svg>
);

export default ChairsIcon;

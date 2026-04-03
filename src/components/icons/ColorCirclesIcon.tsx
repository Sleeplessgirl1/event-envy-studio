const ColorCirclesIcon = ({ size = 28, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    className={className}
  >
    <circle cx="22" cy="28" r="14" fill="#8C133C" opacity="0.85" />
    <circle cx="38" cy="22" r="14" fill="#88775D" opacity="0.85" />
    <circle cx="34" cy="38" r="14" fill="#625E3D" opacity="0.85" />
  </svg>
);

export default ColorCirclesIcon;

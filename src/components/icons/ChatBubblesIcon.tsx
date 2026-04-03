const ChatBubblesIcon = ({ size = 28, className = "" }: { size?: number; className?: string }) => (
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
    {/* Globo trasero */}
    <path d="M40 18 Q52 18 52 28 Q52 38 40 38 L38 38 L42 46 L34 38 Q24 38 24 28 Q24 18 40 18Z" />
    {/* Globo frontal */}
    <path d="M24 12 Q12 12 12 22 Q12 32 24 32 L26 32 L22 40 L30 32 Q40 32 40 22 Q40 12 24 12Z" />
  </svg>
);

export default ChatBubblesIcon;

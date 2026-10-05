/** Klub qalqoni — initsiallar bilan, rasm ishlatilmaydi */
export default function Shield({ initials, className = "" }) {
  return (
    <svg
      viewBox="0 0 64 72"
      className={className}
      role="img"
      aria-label={`${initials} qalqoni`}
    >
      <path
        d="M32 2 L60 12 V38 C60 54 48 65 32 70 C16 65 4 54 4 38 V12 Z"
        fill="currentColor"
        opacity="0.14"
      />
      <path
        d="M32 2 L60 12 V38 C60 54 48 65 32 70 C16 65 4 54 4 38 V12 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fill="currentColor"
        fontSize="19"
        fontWeight="800"
        fontFamily="Unbounded, sans-serif"
      >
        {initials}
      </text>
    </svg>
  )
}
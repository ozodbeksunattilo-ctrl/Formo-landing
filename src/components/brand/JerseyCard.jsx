import { useId } from "react"
import { prefersReducedMotion } from "../../hooks/useReveal"
import { JERSEY_PATH } from "./jerseyShape"
import { JERSEY_VARIANTS } from "./JerseyPhoto"

/**
 * Aylantiriladigan forma (telefon mockup uchun).
 *
 * Endi OLD va ORQA tomon alohida chiziladi (SVG):
 * - OLD: ko'krakda raqam
 * - ORQA: tepada ism, ostida katta raqam
 *
 * Rang `index` orqali JERSEY_VARIANTS dan olinadi.
 * Eslatma: bu yerda `containerType` ishlatilmaydi — u rasm
 * kengligini 0 ga tushirib, formani ko'rinmas qilib qo'yardi.
 */
function JerseyFace({ side, name, number, color, ink, idPrefix, className, label }) {
  const isBack = side === "back"
  const nameSize = Math.max(8, Math.min(15, 96 / Math.max(name.length, 1) + 2))
  const numberSize = number.length > 1 ? 66 : 76

  return (
    <svg
      viewBox="24 8 192 232"
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : "true"}
      className={className}
      style={{ display: "block", backfaceVisibility: "hidden" }}
    >
      <defs>
        <linearGradient id={`${idPrefix}-shade`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.16" />
          <stop offset="1" stopColor="#000" stopOpacity="0.28" />
        </linearGradient>
      </defs>

      <path d={JERSEY_PATH} fill={color} />
      <path d={JERSEY_PATH} fill={`url(#${idPrefix}-shade)`} />

      {/* Yon chiziqlar */}
      <path d="M74,92 L74,228 M166,92 L166,228" stroke={ink} strokeOpacity="0.35" strokeWidth="2" />
      {/* Yeng manjetlari */}
      <path d="M45,88 L63,100 M195,88 L177,100" stroke={ink} strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
      {/* Yoqa */}
      {isBack ? (
        <path d="M102,20 Q120,32 138,20" fill="none" stroke={ink} strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" />
      ) : (
        <path d="M102,20 L120,46 L138,20" fill="none" stroke={ink} strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      )}

      {isBack ? (
        <>
          {name && (
            <text x="120" y="62" textAnchor="middle" fill={ink} fontSize={nameSize} fontWeight="800" letterSpacing="1" style={{ fontFamily: "inherit" }}>
              {name}
            </text>
          )}
          {number && (
            <text x="120" y={name ? 134 : 110} textAnchor="middle" fill={ink} fontSize={numberSize} fontWeight="800" style={{ fontFamily: "inherit" }}>
              {number}
            </text>
          )}
        </>
      ) : (
        number && (
          <text x="120" y="92" textAnchor="middle" fill={ink} fontSize="30" fontWeight="800" style={{ fontFamily: "inherit" }}>
            {number}
          </text>
        )
      )}
    </svg>
  )
}

export default function JerseyCard({
  name = "",
  number = "",
  side = "front",
  alt = "",
  className = "",
  photoClassName = "",
  index = 0,
}) {
  const uid = useId().replace(/:/g, "")
  const variant = JERSEY_VARIANTS[index] || JERSEY_VARIANTS[0]
  const ink = variant.id === "white" ? "#0B1020" : "#FFFFFF"

  const nameText = String(name).trim().toUpperCase()
  const numberText = String(number).trim()

  const flipTransition = prefersReducedMotion()
    ? "none"
    : "transform 800ms cubic-bezier(0.22, 1, 0.36, 1)"

  const common = {
    name: nameText,
    number: numberText,
    color: variant.dot,
    ink,
    className: photoClassName,
  }

  return (
    <div className={`relative ${className}`} style={{ perspective: "1400px" }}>
      <div
        className="relative"
        data-jersey-flip={side}
        style={{
          transformStyle: "preserve-3d",
          transform: side === "back" ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: flipTransition,
        }}
      >
        {/* OLD TOMON */}
        <div className="relative" style={{ backfaceVisibility: "hidden" }}>
          <JerseyFace {...common} side="front" idPrefix={`${uid}f`} label={alt} />
        </div>

        {/* ORQA TOMON */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <JerseyFace {...common} side="back" idPrefix={`${uid}b`} />
        </div>
      </div>
    </div>
  )
}

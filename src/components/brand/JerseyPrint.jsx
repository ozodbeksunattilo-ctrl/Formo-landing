import { prefersReducedMotion } from "../../hooks/useReveal"
import { JERSEY_VARIANTS } from "./JerseyPhoto"
import jerseyFront from "../../assets/jersey-photo.png"
import jerseyBack from "../../assets/jersey-back.png"

/**
 * Forma fotosurati ustiga ism va raqam yoziladi — OLD va ORQA tomon.
 *
 * - OLD: ko'krakda ism (kichik) va raqam
 * - ORQA: tepada katta ism, ostida katta raqam
 *
 * Matn SVG qatlamida (viewBox 1000x1000 = rasm o'lchami), shuning uchun
 * rasm qancha kattalashsa/kichraysa ham matn joyida qoladi.
 * Rang filtri faqat rasmga tushadi, yozuvga emas.
 */
const FONT = { fontFamily: "inherit", fontWeight: 800 }

function fitName(name, maxWidth, maxSize, minSize) {
  const size = maxWidth / Math.max(name.length * 0.74, 1)
  return Math.round(Math.max(minSize, Math.min(maxSize, size)))
}

function PrintLayer({ side, name, number, ink, outline }) {
  const common = {
    textAnchor: "middle",
    fill: ink,
    stroke: outline,
    strokeWidth: 3,
    strokeLinejoin: "round",
    paintOrder: "stroke",
    style: FONT,
  }

  if (side === "front") {
    return (
      <>
        {name && (
          <text x="522" y="168" fontSize={fitName(name, 150, 26, 14)} letterSpacing="2" {...common}>
            {name}
          </text>
        )}
        {number && (
          <text x="522" y={name ? 252 : 215} fontSize={number.length > 1 ? 92 : 104} {...common}>
            {number}
          </text>
        )}
      </>
    )
  }

  return (
    <>
      {name && (
        <text x="494" y="130" fontSize={fitName(name, 158, 44, 18)} letterSpacing="2" {...common}>
          {name}
        </text>
      )}
      {number && (
        <text x="494" y={name ? 262 : 215} fontSize={number.length > 1 ? 128 : 148} {...common}>
          {number}
        </text>
      )}
    </>
  )
}

function Face({ src, filter, side, name, number, ink, outline, alt }) {
  return (
    <div className="relative aspect-square h-full">
      <img
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        draggable={false}
        className="absolute inset-0 h-full w-full select-none object-contain"
        style={{
          filter,
          transition: prefersReducedMotion() ? "none" : "filter 700ms ease",
        }}
      />
      <svg
        viewBox="0 0 1000 1000"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        <PrintLayer side={side} name={name} number={number} ink={ink} outline={outline} />
      </svg>
    </div>
  )
}

export default function JerseyPrint({
  name = "",
  number = "",
  side = "front",
  index = 0,
  alt = "",
  altBack = "",
  className = "",
}) {
  const variant = JERSEY_VARIANTS[index] || JERSEY_VARIANTS[0]
  const isWhite = variant.id === "white"
  const ink = isWhite ? "#0B1020" : "#FFFFFF"
  const outline = isWhite ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.5)"

  const nameText = String(name).trim().toUpperCase()
  const numberText = String(number).trim()

  const common = { name: nameText, number: numberText, ink, outline, filter: variant.filter }

  return (
    <div className={`relative ${className}`} style={{ perspective: "1400px" }}>
      <div
        className="relative h-full w-full"
        data-jersey-flip={side}
        style={{
          transformStyle: "preserve-3d",
          transform: side === "back" ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: prefersReducedMotion()
            ? "none"
            : "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* OLD TOMON */}
        <div
          className="absolute inset-0 flex justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Face {...common} side="front" src={jerseyFront} alt={alt} />
        </div>

        {/* ORQA TOMON */}
        <div
          className="absolute inset-0 flex justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Face {...common} side="back" src={jerseyBack} alt={altBack} />
        </div>
      </div>
    </div>
  )
}

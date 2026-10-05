import logoWord from "../../assets/logo-word.png"
import logoFull from "../../assets/logo-full.png"

/**
 * "Formo" brend belgisi.
 *
 * variant="word" (sartarcha) — headerda: "Formo" so'zmarkasi (ichida "F" bor)
 * variant="full"  (pastda)  — katta italic "F" belgisi + "Formo" so'zmarkasi
 *
 * Ikkalasi ham shaffof fonli PNG (src/assets/logo-word.png, logo-full.png).
 */
export default function Logo({ variant = "word", className = "" }) {
  if (variant === "full") {
    return (
      <img
        src={logoFull}
        alt="Formo"
        width={480}
        height={279}
        className={`h-28 w-auto sm:h-32 ${className}`}
      />
    )
  }

  return (
    <img
      src={logoWord}
      alt="Formo"
      width={480}
      height={50}
      className={`h-5 w-auto sm:h-6 ${className}`}
    />
  )
}
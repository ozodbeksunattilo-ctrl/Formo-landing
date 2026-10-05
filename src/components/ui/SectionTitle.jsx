import Reveal from "./Reveal"

/** Bo'lim sarlavhasi — har bo'limda bitta g'oya, ko'p bo'sh joy. */
export default function SectionTitle({ eyebrow, title, subtitle, className = "" }) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-[28px] leading-[1.15] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
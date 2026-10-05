import { useEffect, useRef, useState } from "react"
import { Check, Globe } from "lucide-react"
import { LOCALES, LOCALE_ORDER, useLocale } from "../i18n"

/**
 * Til tanlagichi.
 *
 * variant="icon"    — sarlavhadagi globa tugmasi + ochiladigan menyu
 * variant="inline"  — qator ko'rinishidagi tugmalar (mobil menyu, footer)
 */
export default function LanguageSwitcher({ variant = "icon" }) {
  const { locale, setLocale, content } = useLocale()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  // Tashqariga bosilganda yoki Escape da yopiladi
  useEffect(() => {
    if (!open) return

    const onPointerDown = (event) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  const options = LOCALE_ORDER.map((code) => ({ code, ...LOCALES[code].lang }))

  if (variant === "inline") {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {options.map((option) => (
          <button
            key={option.code}
            type="button"
            onClick={() => setLocale(option.code)}
            aria-pressed={option.code === locale}
            className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border px-3 text-sm font-semibold transition-colors ${
              option.code === locale
                ? "border-accent bg-accent/15 text-accent"
                : "border-surface2 text-muted hover:border-accent2 hover:text-text"
            }`}
          >
            {option.code.toUpperCase()}
            <span className="hidden sm:inline">{option.name}</span>
          </button>
        ))}
      </div>
    )
  }

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={content.lang.label}
        className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-surface2 text-text transition-colors hover:border-accent2"
      >
        <Globe size={20} aria-hidden="true" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={content.lang.label}
          className="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-xl border border-surface2 bg-surface p-1 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.8)]"
        >
          {options.map((option) => (
            <button
              key={option.code}
              type="button"
              role="menuitemradio"
              aria-checked={option.code === locale}
              onClick={() => {
                setLocale(option.code)
                setOpen(false)
              }}
              className={`flex min-h-[48px] w-full items-center justify-between gap-2 rounded-lg px-3 text-left text-sm transition-colors ${
                option.code === locale
                  ? "bg-accent/15 font-semibold text-accent"
                  : "text-muted hover:bg-surface2/60 hover:text-text"
              }`}
            >
              <span className="flex flex-col">
                <span className="text-xs font-bold tracking-wide">
                  {option.code.toUpperCase()}
                </span>
                <span>{option.name}</span>
              </span>
              {option.code === locale && <Check size={16} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
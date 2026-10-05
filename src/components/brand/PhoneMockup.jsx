import { useEffect, useId, useState } from "react"
import { JERSEY_VARIANTS } from "./JerseyPhoto"
import JerseyPrint from "./JerseyPrint"
import { useLocale } from "../../i18n"
import { scrollToSection } from "../../hooks/useIntent"
import { prefersReducedMotion } from "../../hooks/useReveal"

/**
 * Konstruktor ilova ekrani mockup'i — telefon ramkasi ichida.
 *
 * - Rang nuqtalari bosiladi (bosilmaguncha ranglar o'zi almashadi)
 * - Ism va raqam maydonlari haqiqiy input — kiritilgani futbolkaga yoziladi
 * - "Old / Orqa" tugmalari formani aylantirib, ikkala tomonni ko'rsatadi
 * - "Buyurtma berish" haqiqiy buyurtma blokiga olib boradi
 */
const NAME_MAX = 12
const NUMBER_MAX = 2

export default function PhoneMockup() {
  const { t, content } = useLocale()
  const uid = useId()
  const [colorIndex, setColorIndex] = useState(0)
  const [manual, setManual] = useState(false)
  const [side, setSide] = useState("front")
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const colorNames = content.jersey.variants

  // Avtomatik rang almashuvi — foydalanuvchi aralashguncha
  useEffect(() => {
    if (manual || prefersReducedMotion()) return
    const timer = setInterval(() => {
      setColorIndex((i) => (i + 1) % JERSEY_VARIANTS.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [manual])

  const pickColor = (i) => {
    setColorIndex(i)
    setManual(true)
  }

  const changeName = (e) => {
    // faqat harf, bo'sh joy, tire va apostrof
    const clean = e.target.value.replace(/[^\p{L}\s'’-]/gu, "").slice(0, NAME_MAX)
    setName(clean)
    setManual(true)
  }

  const changeNumber = (e) => {
    setNumber(e.target.value.replace(/\D/g, "").slice(0, NUMBER_MAX))
    setManual(true)
  }

  const showSide = (next) => {
    setSide(next)
    setManual(true)
  }

  const nameId = `${uid}-name`
  const numberId = `${uid}-number`
  const printedName = name.trim() || "—"
  const printedNumber = number.trim() || "—"

  const inputClass =
    "min-h-[44px] w-full rounded-xl border border-surface2 bg-surface/70 px-3 text-[16px] font-semibold text-text placeholder:text-muted/70 focus:border-accent"

  return (
    <div className="mx-auto w-[270px] sm:w-[290px]">
      {/* Telefon */}
      <div className="rounded-[2rem] border-4 border-surface2 bg-navy p-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]">
        {/* Ekran */}
        <div className="overflow-hidden rounded-[1.5rem] bg-bg">
          {/* Ilova bar */}
          <div className="flex items-center justify-between px-3 py-2">
            <span className="font-heading text-xs text-accent">Formo</span>

            <div className="flex items-center gap-1.5">
              <span className="rounded-full bg-accent2/15 px-2 py-0.5 text-[10px] font-semibold text-accent2">
                {content.mockup.ar}
              </span>
            </div>
          </div>

          {/* Forma ko'rinishi — ism/raqam yoziladi, old/orqa */}
          <div className="relative mx-3 flex h-56 items-center justify-center rounded-2xl bg-surface/60">
            <JerseyPrint
              className="h-52 w-52 drop-shadow-[0_10px_24px_rgba(0,0,0,0.5)]"
              side={side}
              index={colorIndex}
              name={name}
              number={number}
              alt={t("jersey.altMockup", { name: colorNames[colorIndex] })}
              altBack={t("jersey.altBack", { name: printedName, number: printedNumber })}
            />
          </div>

          {/* Old / Orqa */}
          <div
            role="group"
            aria-label={t("jersey.flip")}
            className="mx-3 mt-2 grid grid-cols-2 gap-1 rounded-xl bg-surface/60 p-1"
          >
            {["front", "back"].map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => showSide(key)}
                aria-pressed={side === key}
                className={`min-h-[40px] rounded-lg text-[12px] font-semibold transition-colors ${
                  side === key
                    ? "bg-accent text-bg"
                    : "text-muted hover:text-text"
                }`}
              >
                {t(`jersey.side.${key}`)}
              </button>
            ))}
          </div>

          {/* Ism va raqam */}
          <div className="mt-3 px-3">
            <div className="grid grid-cols-[1fr_72px] gap-2">
              <div>
                <label
                  htmlFor={nameId}
                  className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-muted"
                >
                  {content.mockup.name}
                </label>
                <input
                  id={nameId}
                  type="text"
                  value={name}
                  onChange={changeName}
                  maxLength={NAME_MAX}
                  autoComplete="off"
                  autoCapitalize="characters"
                  spellCheck={false}
                  placeholder={content.mockup.namePlaceholder}
                  className={`${inputClass} uppercase`}
                />
              </div>

              <div>
                <label
                  htmlFor={numberId}
                  className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-muted"
                >
                  {content.mockup.number}
                </label>
                <input
                  id={numberId}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={number}
                  onChange={changeNumber}
                  maxLength={NUMBER_MAX}
                  autoComplete="off"
                  placeholder={content.mockup.numberPlaceholder}
                  className={`${inputClass} text-center`}
                />
              </div>
            </div>

            <p className="mt-1.5 text-[10px] leading-snug text-muted">
              {content.mockup.hint}
            </p>
          </div>

          {/* Rang tanlagich */}
          <div className="mt-2 px-3">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">
                {content.mockup.colour}
              </p>
              <p className="text-[10px] font-semibold text-accent">
                {colorNames[colorIndex]}
              </p>
            </div>

            <div className="mt-1 flex gap-0.5">
              {JERSEY_VARIANTS.map((variant, i) => (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => pickColor(i)}
                  aria-label={t("jersey.pick", { name: colorNames[i] })}
                  aria-pressed={i === colorIndex}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
                >
                  <span
                    aria-hidden="true"
                    className={`block rounded-full border-2 transition-transform ${
                      i === colorIndex ? "border-accent" : "border-white/25"
                    }`}
                    style={{ backgroundColor: variant.dot, width: 22, height: 22 }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Buyurtma berish — haqiqiy tugma */}
          <div className="px-3 pb-3 pt-2">
            <button
              type="button"
              onClick={() => scrollToSection("cta")}
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border-2 border-accent bg-accent/10 px-3 text-[12px] font-semibold text-accent transition-colors hover:bg-accent/20"
            >
              {content.mockup.order}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

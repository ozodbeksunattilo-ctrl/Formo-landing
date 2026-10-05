import { useState } from "react"
import { ArrowRight, Sparkles, Truck } from "lucide-react"
import { useLocale } from "../i18n"
import { scrollToSection } from "../hooks/useIntent"
import Button from "./ui/Button"
import JerseyPhoto, { JERSEY_VARIANTS } from "./brand/JerseyPhoto"

export default function Hero() {
  const { t, content } = useLocale()
  const [colorIndex, setColorIndex] = useState(0)
  const [manualColor, setManualColor] = useState(false)

  const colorNames = content.jersey.variants
  const colorName = colorNames[colorIndex]

  const pickColor = (i) => {
    setColorIndex(i)
    setManualColor(true)
  }

  const go = (event, href) => {
    event.preventDefault()
    scrollToSection(href.slice(1))
  }

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Yumshoq fon yorug'ligi */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-container items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-28">
        {/* Matn */}
        <div className="order-2 lg:order-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent2/40 bg-accent2/10 px-3 py-1.5 text-xs font-semibold text-accent2">
            <Sparkles size={14} aria-hidden="true" />
            {t("hero.badge")}
          </p>

          <h1
            id="hero-title"
            className="font-heading text-[32px] font-extrabold leading-[1.1] sm:text-[40px] lg:text-[48px]"
          >
            {t("hero.title")}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {t("hero.subtitle")}
          </p>

          {/* Tugmalar */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={t("hero.primaryHref")}
              onClick={(e) => go(e, t("hero.primaryHref"))}
              size="lg"
              className="w-full sm:w-auto"
            >
              {t("hero.primaryCta")}
              <ArrowRight size={20} aria-hidden="true" />
            </Button>
            <Button
              href={t("hero.secondaryHref")}
              onClick={(e) => go(e, t("hero.secondaryHref"))}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              {t("hero.secondaryCta")}
            </Button>
          </div>

          {/* Ishonch qatori */}
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <li className="flex items-center gap-2">
              <Truck size={16} className="text-accent2" aria-hidden="true" />
              {content.hero.trust[0]}
            </li>
            <li className="flex items-center gap-2">
              <Sparkles size={16} className="text-accent2" aria-hidden="true" />
              {content.hero.trust[1]}
            </li>
          </ul>
        </div>

        {/* Futbolka — mobilda tepada, desktopda o'ngda */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto w-[260px] sm:w-[320px] lg:w-full lg:max-w-md">
            {/* Fon halosasi */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-full bg-accent2/15 blur-[70px]"
            />

            {/* Odiy forma rasmi — faqat rangi o'zgaradi */}
            <JerseyPhoto
              className="w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
              alt={t("jersey.alt", { name: colorName })}
              animate={!manualColor}
              index={colorIndex}
              onIndexChange={setColorIndex}
            />

            {/* Rang tanlash */}
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-0.5 rounded-full border border-surface2 bg-bg/90 px-2 py-1.5 backdrop-blur">
              {JERSEY_VARIANTS.map((variant, i) => (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => pickColor(i)}
                  aria-label={t("jersey.show", { name: colorNames[i] })}
                  aria-pressed={i === colorIndex}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-105"
                >
                  <span
                    aria-hidden="true"
                    className={`block rounded-full border-2 transition-transform ${
                      i === colorIndex
                        ? "scale-110 border-accent"
                        : "border-white/25"
                    }`}
                    style={{
                      backgroundColor: variant.dot,
                      width: 26,
                      height: 26,
                    }}
                  />
                </button>
              ))}
              <span className="ml-1.5 pr-1.5 text-xs font-semibold text-muted">
                {colorName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import { Droplet, Hash, Palette, Scan, ShieldCheck, Sparkles, Type } from "lucide-react"
import { useLocale } from "../i18n"
import { useIntent } from "../hooks/useIntent"
import PhoneMockup from "./brand/PhoneMockup"
import Reveal from "./ui/Reveal"
import SectionTitle from "./ui/SectionTitle"

const FEATURE_ICONS = [Palette, Droplet, Type, Hash, ShieldCheck, Scan, Sparkles]

export default function Builder() {
  const { copy } = useIntent()
  const { t, content } = useLocale()

  return (
    <section id="builder" aria-labelledby="builder-title">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Telefon mockup */}
          <Reveal className="order-2 lg:order-1">
            <PhoneMockup />
          </Reveal>

          {/* Imkoniyatlar */}
          <div className="order-1 lg:order-2">
            <SectionTitle
              eyebrow={t("builder.eyebrow")}
              title={copy.builderTitle}
              subtitle={copy.builderSubtitle}
            />

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {content.builder.features.map((feature, i) => {
                const Icon = FEATURE_ICONS[i] || Palette

                return (
                  <Reveal
                    as="li"
                    key={feature}
                    delay={i * 60}
                    className="flex items-center gap-3 rounded-xl border border-surface2 bg-surface/50 px-4 py-3"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent2/15 text-accent2">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-text">{feature}</span>
                  </Reveal>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
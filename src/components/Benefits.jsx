import { Clock, Palette, RefreshCcw, Ruler } from "lucide-react"
import { useLocale } from "../i18n"
import Reveal from "./ui/Reveal"
import SectionTitle from "./ui/SectionTitle"

const ICONS = [Palette, Clock, Ruler, RefreshCcw]

export default function Benefits() {
  const { t, content } = useLocale()

  return (
    <section id="benefits" aria-labelledby="benefits-title">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionTitle
          eyebrow={t("benefits.eyebrow")}
          title={t("benefits.title")}
          subtitle={t("benefits.subtitle")}
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.benefits.items.map((item, i) => {
            const Icon = ICONS[i] || Palette

            return (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 70}
                className="rounded-2xl border border-surface2 bg-surface/50 p-5"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
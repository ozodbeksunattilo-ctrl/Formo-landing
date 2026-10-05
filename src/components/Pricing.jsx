import { Check } from "lucide-react"
import { useLocale } from "../i18n"
import { useIntent } from "../hooks/useIntent"
import Reveal from "./ui/Reveal"
import SectionTitle from "./ui/SectionTitle"

export default function Pricing() {
  const { copy } = useIntent()
  const { t, content } = useLocale()

  return (
    <section id="pricing" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionTitle
          eyebrow={t("pricing.eyebrow")}
          title={copy.pricingTitle}
          subtitle={copy.pricingSubtitle}
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.pricing.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.name}
              delay={i * 70}
              className={`relative flex flex-col rounded-2xl border-2 p-6 ${
                item.popular
                  ? "border-accent bg-accent/10 shadow-glow"
                  : "border-surface2 bg-surface/50"
              }`}
            >
              {item.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-bg">
                  {t("pricing.popular")}
                </span>
              )}

              <h3 className="font-heading text-base font-semibold text-text">
                {item.name}
              </h3>
              <p className="mt-3 font-heading text-[28px] font-extrabold text-accent">
                {item.price}
              </p>

              <ul className="mt-5 space-y-2">
                {content.pricing.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                    <Check
                      size={16}
                      className="shrink-0 text-accent2"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                aria-label={t("pricing.orderAria", { item: item.name })}
                className={`mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border-2 px-4 text-center text-sm font-semibold transition-colors ${
                  item.popular
                    ? "border-accent bg-accent/20 text-accent hover:bg-accent/30"
                    : "border-surface2 text-text hover:border-accent hover:text-accent"
                }`}
              >
                {t("pricing.order")}
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-6">
          <p className="text-sm text-muted">
            {t("pricing.note")} · {t("pricing.sizeNote")}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
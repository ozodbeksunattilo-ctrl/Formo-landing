import { useLocale } from "../i18n"
import Reveal from "./ui/Reveal"
import SectionTitle from "./ui/SectionTitle"

export default function HowItWorks() {
  const { t, content } = useLocale()

  return (
    <section
      id="how"
      aria-labelledby="how-title"
      className="border-t border-surface2/40 bg-navy/40"
    >
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionTitle
          eyebrow={t("how.eyebrow")}
          title={t("how.title")}
          subtitle={t("how.subtitle")}
        />

        <ol className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {content.how.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.num}
              delay={i * 90}
              className="relative rounded-2xl border border-surface2 bg-surface/50 p-6"
            >
              <span
                aria-hidden="true"
                className="font-heading text-5xl font-extrabold text-accent/25"
              >
                {step.num}
              </span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.desc}
              </p>
              <span className="sr-only">
                {step.num}
                {content.how.stepSuffix}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
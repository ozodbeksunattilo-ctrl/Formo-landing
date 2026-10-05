import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLocale } from "../i18n"
import Reveal from "./ui/Reveal"
import SectionTitle from "./ui/SectionTitle"

export default function Faq() {
  const { t, content } = useLocale()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="border-t border-surface2/40 bg-navy/40"
    >
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionTitle
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
          subtitle={t("faq.subtitle")}
        />

        <div className="mt-10 divide-y divide-surface2 overflow-hidden rounded-2xl border border-surface2 bg-surface/50">
          {content.faq.items.map((item, i) => {
            const open = openIndex === i

            return (
              <Reveal key={item.q} delay={i * 50}>
                <div>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="font-heading text-base font-semibold text-text">
                        {item.q}
                      </span>
                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className={`shrink-0 text-accent transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    hidden={!open}
                    className="px-5 pb-5"
                  >
                    <p className="text-sm leading-relaxed text-muted">{item.a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
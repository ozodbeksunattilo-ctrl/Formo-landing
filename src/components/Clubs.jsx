import { ArrowRight } from "lucide-react"
import { useLocale } from "../i18n"
import Shield from "./brand/Shield"
import Reveal from "./ui/Reveal"
import SectionTitle from "./ui/SectionTitle"

const SHIELD_COLORS = [
  "text-accent",
  "text-accent2",
  "text-danger",
  "text-accent",
  "text-accent2",
  "text-accent",
]

export default function Clubs() {
  const { t, content } = useLocale()

  return (
    <section
      id="clubs"
      aria-labelledby="clubs-title"
      className="border-t border-surface2/40 bg-navy/40"
    >
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionTitle
          eyebrow={t("clubs.eyebrow")}
          title={t("clubs.title")}
          subtitle={t("clubs.subtitle")}
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.clubs.list.map((club, i) => (
            <Reveal
              as="li"
              key={club.name}
              delay={i * 60}
              className="group flex flex-col rounded-2xl border border-surface2 bg-surface/50 p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-center gap-4">
                <Shield
                  initials={club.initials}
                  className={`h-14 w-12 shrink-0 ${SHIELD_COLORS[i % SHIELD_COLORS.length]}`}
                />
                <div>
                  <h3 className="font-heading text-base font-semibold text-text">
                    {club.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted">
                    {t("clubs.typesCount")}
                  </p>
                </div>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {content.clubs.types.map((type) => (
                  <li
                    key={type}
                    className="rounded-full bg-surface2 px-3 py-1 text-xs font-medium text-muted"
                  >
                    {type}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                aria-label={t("clubs.viewAria", { club: club.name })}
                className="mt-5 inline-flex min-h-[48px] items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent2"
              >
                {t("clubs.view")}
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
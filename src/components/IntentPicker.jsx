import { Baby, Trophy, User, Users } from "lucide-react"
import { useLocale } from "../i18n"
import { scrollToSection, useIntent } from "../hooks/useIntent"
import Reveal from "./ui/Reveal"
import SectionTitle from "./ui/SectionTitle"

const ICONS = {
  self: User,
  team: Users,
  kid: Baby,
  club: Trophy,
}

export default function IntentPicker() {
  const { intent, setIntent, copy } = useIntent()
  const { t, content } = useLocale()

  const cards = content.intent.cards

  const choose = (id) => {
    setIntent(id)
    // Tanlangan bo'limga silliq scroll
    scrollToSection(copy.target)
  }

  const selectedCard = cards.find((card) => card.id === intent)

  // Matnni {v} bo'yicha uchga bo'lib, tanlov nomini urg'u bilan ko'rsatamiz
  const selectedParts = t("intent.selected").split("{v}")

  return (
    <section
      id="intent"
      aria-labelledby="intent-title"
      className="border-t border-surface2/40 bg-navy/40"
    >
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionTitle
          eyebrow={t("intent.eyebrow")}
          title={t("intent.title")}
          subtitle={t("intent.subtitle")}
        />

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const Icon = ICONS[card.id] || User
            const active = intent === card.id

            return (
              <Reveal as="li" key={card.id} delay={i * 70}>
                <button
                  type="button"
                  onClick={() => choose(card.id)}
                  aria-label={card.aria}
                  aria-pressed={active}
                  className={`group flex h-full w-full flex-col items-start gap-3 rounded-2xl border-2 p-5 text-left transition-colors duration-200 ${
                    active
                      ? "border-accent bg-accent/10"
                      : "border-surface2 bg-surface/50 hover:border-accent2 hover:bg-surface2/50"
                  }`}
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                      active
                        ? "bg-accent/20 text-accent"
                        : "bg-surface2 text-accent2 group-hover:text-text"
                    }`}
                  >
                    <Icon size={24} aria-hidden="true" />
                  </span>

                  <span className="font-heading text-lg font-semibold leading-snug text-text">
                    {card.title}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">
                    {card.desc}
                  </span>
                </button>
              </Reveal>
            )
          })}
        </ul>

        {intent && selectedCard && (
          <p className="mt-6 text-sm text-muted">
            {selectedParts[0]}
            <span className="font-semibold text-accent">{selectedCard.title}</span>
            {selectedParts[1]}
          </p>
        )}
      </div>
    </section>
  )
}
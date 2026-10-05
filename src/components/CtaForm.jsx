import { useState } from "react"
import { CheckCircle2, Send } from "lucide-react"
import { useLocale } from "../i18n"
import { contacts } from "../data/contacts"
import { useIntent } from "../hooks/useIntent"
import Reveal from "./ui/Reveal"

const DIGITS = 9

/** Yuboriladigan xabar matni */
function buildMessage(t, phone, intent, cards) {
  const label = cards.find((card) => card.id === intent)?.title
  const lines = [t("telegram.hello"), t("telegram.phone", { phone })]
  if (label) lines.push(t("telegram.chosen", { label }))
  return lines.join("\n")
}

export default function CtaForm() {
  const { copy, intent } = useIntent()
  const { t, content } = useLocale()
  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const digits = event.target.value.replace(/\D/g, "").slice(0, DIGITS)
    setValue(digits)
    setError("")
    setSent(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (value.length !== DIGITS) {
      setError(t("cta.error"))
      return
    }
    setError("")

    // Telegram orqali yuborish — bot token kerak emas
    const url = `${contacts.telegram}?text=${encodeURIComponent(
      buildMessage(t, value, intent, content.intent.cards),
    )}`
    window.open(url, "_blank", "noopener")

    setSent(true)
  }

  return (
    <section id="cta" aria-labelledby="cta-title">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <Reveal className="rounded-3xl border-2 border-accent/40 bg-accent/5 p-6 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="cta-title"
              className="font-heading text-[28px] font-extrabold leading-tight sm:text-3xl lg:text-4xl"
            >
              {copy.ctaTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {copy.ctaSubtitle}
            </p>

            {sent ? (
              <div
                role="status"
                className="mx-auto mt-8 flex max-w-md items-center gap-3 rounded-2xl border border-accent2/50 bg-accent2/10 p-5 text-left"
              >
                <CheckCircle2
                  size={26}
                  className="shrink-0 text-accent2"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold text-text">{t("cta.success")}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="mx-auto mt-8 max-w-md"
              >
                <label
                  htmlFor="phone"
                  className="mb-2 block text-left text-sm font-medium text-muted"
                >
                  {t("cta.label")}
                </label>

                <div className="flex items-stretch gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-flex min-h-[48px] items-center rounded-xl border-2 border-surface2 bg-surface/60 px-4 font-semibold text-muted"
                  >
                    +998
                  </span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    value={value}
                    onChange={handleChange}
                    placeholder={t("cta.placeholder")}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "phone-error" : "phone-hint"}
                    className="min-h-[48px] flex-1 rounded-xl border-2 border-surface2 bg-surface/60 px-4 text-base text-text placeholder:text-muted/70 focus:border-accent focus:outline-none"
                  />
                </div>

                {error ? (
                  <p id="phone-error" role="alert" className="mt-2 text-left text-sm text-danger">
                    {error}
                  </p>
                ) : (
                  <p id="phone-hint" className="mt-2 text-left text-xs text-muted">
                    {t("cta.hint")}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border-2 border-accent bg-accent/10 px-6 text-base font-semibold text-accent shadow-glow transition-colors hover:bg-accent/20"
                >
                  <Send size={18} aria-hidden="true" />
                  {copy.ctaBtn}
                </button>

                <p className="mt-3 text-xs text-muted">
                  {t("cta.sentVia", {
                    tg: contacts.telegramHandle,
                    extra: intent ? t("cta.sentViaExtra") : "",
                  })}
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
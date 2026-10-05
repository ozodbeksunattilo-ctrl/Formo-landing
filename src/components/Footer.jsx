import { Instagram, MessageCircle, Phone } from "lucide-react"
import { useLocale } from "../i18n"
import { contacts } from "../data/contacts"
import LanguageSwitcher from "./LanguageSwitcher"
import Logo from "./brand/Logo"

export default function Footer() {
  const { t, content } = useLocale()

  return (
    <footer className="border-t border-surface2/40 bg-navy/50">
      <div className="mx-auto max-w-container px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Logo */}
          <div className="max-w-xs">
            <Logo variant="full" />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Havolalar */}
          <nav aria-label={t("navAria")}>
            <ul className="space-y-2">
              {content.footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-[48px] items-center text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Aloqa */}
          <div>
            <p className="text-sm font-semibold text-text">{t("footer.contacts")}</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={contacts.telegram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t("footer.telegramAria")}
                  className="inline-flex min-h-[48px] items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Telegram
                  <span className="text-muted/70">{contacts.telegramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={contacts.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t("footer.instagramAria")}
                  className="inline-flex min-h-[48px] items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                  <Instagram size={16} aria-hidden="true" />
                  Instagram
                  <span className="text-muted/70">{contacts.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contacts.phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex min-h-[48px] items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                  <Phone size={16} aria-hidden="true" />
                  {contacts.phone}
                </a>
              </li>
            </ul>

            <div className="mt-4">
              <LanguageSwitcher variant="inline" />
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-surface2/40 pt-6 text-xs text-muted">
          {t("footer.rights", { year: contacts.year })}
        </p>
      </div>
    </footer>
  )
}
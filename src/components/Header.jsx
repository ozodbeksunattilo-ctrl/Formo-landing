import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useLocale } from "../i18n"
import Button from "./ui/Button"
import LanguageSwitcher from "./LanguageSwitcher"
import Logo from "./brand/Logo"
import { scrollToSection } from "../hooks/useIntent"

export default function Header() {
  const { t, content } = useLocale()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = content.nav

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Mobilda menyu ochilganda sahifa scroll qilinmasin
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const go = (event, href) => {
    event.preventDefault()
    setOpen(false)
    scrollToSection(href.slice(1))
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-surface2/70 bg-bg/90 backdrop-blur-md"
          : "border-transparent bg-bg"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-container items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => go(e, "#top")}
          aria-label={t("homeAria")}
          className="flex min-h-[48px] items-center rounded-xl"
        >
          <Logo />
        </a>

        {/* Desktop havolalar */}
        <nav aria-label={t("navAria")} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  className="inline-flex min-h-[48px] items-center rounded-lg px-3 text-sm font-medium text-muted transition-colors hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          <Button
            href="#intent"
            onClick={(e) => go(e, "#intent")}
            size="sm"
            className="hidden sm:inline-flex"
          >
            {content.menu.start}
          </Button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? content.menu.close : content.menu.open}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-surface2 text-text lg:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobilda menyu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label={t("navAria")}
          className="border-t border-surface2/70 bg-bg lg:hidden"
        >
          <ul className="mx-auto flex max-w-container flex-col px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  className="flex min-h-[48px] items-center rounded-lg px-2 text-base text-muted transition-colors hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <LanguageSwitcher variant="inline" />
            </li>
            <li className="pb-2 pt-1 sm:hidden">
              <Button
                href="#intent"
                onClick={(e) => go(e, "#intent")}
                className="w-full"
              >
                {content.menu.start}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
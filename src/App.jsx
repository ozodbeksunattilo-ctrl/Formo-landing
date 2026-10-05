import Header from "./components/Header"
import Hero from "./components/Hero"
import IntentPicker from "./components/IntentPicker"
import Benefits from "./components/Benefits"
import HowItWorks from "./components/HowItWorks"
import Builder from "./components/Builder"
import Clubs from "./components/Clubs"
import Pricing from "./components/Pricing"
import Faq from "./components/Faq"
import CtaForm from "./components/CtaForm"
import Footer from "./components/Footer"
import { LocaleProvider, useT } from "./i18n"
import { IntentProvider } from "./hooks/useIntent"

function SkipLink() {
  const t = useT()

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:border-2 focus:border-accent focus:bg-surface focus:px-4 focus:py-2 focus:text-accent"
    >
      {t("skip")}
    </a>
  )
}

export default function App() {
  return (
    <LocaleProvider>
      <IntentProvider>
        {/* Skip link — klaviatura foydalanuvchilari uchun */}
        <SkipLink />

        <Header />

        <main id="main">
          <Hero />
          <IntentPicker />
          <Benefits />
          <HowItWorks />
          <Builder />
          <Clubs />
          <Pricing />
          <Faq />
          <CtaForm />
        </main>

        <Footer />
      </IntentProvider>
    </LocaleProvider>
  )
}
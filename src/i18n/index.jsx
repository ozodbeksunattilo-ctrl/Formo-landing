import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import uz from "./uz"
import ru from "./ru"
import en from "./en"
import { trackLocale } from "../utils/analytics"

/** Barcha tillar — kalit kod bo'yicha */
export const LOCALES = { uz, ru, en }

/** Tanlash menyusida ko'rsatiladigan tartib */
export const LOCALE_ORDER = ["uz", "ru", "en"]

export const DEFAULT_LOCALE = "uz"

const STORAGE_KEY = "formo_lang"

/**
 * true — tashrifchi brauzeri ruscha/inglizcha bo'lsa, o'sha til ochiladi.
 * false — har doim o'zbekcha (asosiy bozor), foydalanuvchi o'zi almashtiradi.
 */
export const DETECT_BROWSER_LOCALE = false

const LocaleContext = createContext(null)

/** localStorage -> (ixtiyoriy) brauzer tili -> o'zbekcha */
function detectLocale() {
  if (typeof window === "undefined") return DEFAULT_LOCALE

  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && LOCALES[saved]) return saved
  } catch {
    /* localStorage bloklangan bo'lishi mumkin */
  }

  if (DETECT_BROWSER_LOCALE) {
    const base = (window.navigator?.language || "").slice(0, 2).toLowerCase()
    if (LOCALES[base]) return base
  }

  return DEFAULT_LOCALE
}

function setMeta(selector, value) {
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement("meta")
    const [, key, name] = selector.match(/\[(name|property)="(.+)"\]/)
    tag.setAttribute(key, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute("content", value)
}

/** "hero.title" -> matn; {placeholder} larni almashtiradi */
function resolve(content, path, vars) {
  const value = path
    .split(".")
    .reduce((acc, key) => (acc == null ? acc : acc[key]), content)

  if (typeof value !== "string") {
    if (typeof window !== "undefined" && window.console) {
      console.warn("[Formo][i18n] kalit topilmadi:", path)
    }
    return ""
  }

  if (!vars) return value
  return value.replace(/\{(\w+)\}/g, (match, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : match,
  )
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(detectLocale)

  const content = LOCALES[locale] || LOCALES[DEFAULT_LOCALE]

  // <html lang>, sarlavha va SEO meta larni tilga moslaymiz
  useEffect(() => {
    document.documentElement.lang = content.htmlLang
    document.title = content.meta.title
    setMeta('meta[name="description"]', content.meta.description)
    setMeta('meta[property="og:title"]', content.meta.title)
    setMeta('meta[property="og:description"]', content.meta.ogDescription)
  }, [content])

  const setLocale = useCallback((next) => {
    if (!LOCALES[next] || next === locale) return
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
    trackLocale(next)
  }, [locale])

  const t = useCallback((path, vars) => resolve(content, path, vars), [content])

  const value = useMemo(
    () => ({ locale, setLocale, content, t }),
    [locale, setLocale, content, t],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (ctx) return ctx

  // Provider'siz ishlatilganda — o'zbekcha bilan ishlaydi
  const content = LOCALES[DEFAULT_LOCALE]
  return {
    locale: DEFAULT_LOCALE,
    setLocale: () => {},
    content,
    t: (path, vars) => resolve(content, path, vars),
  }
}

export function useT() {
  return useLocale().t
}
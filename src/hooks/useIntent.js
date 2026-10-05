import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { trackIntent } from "../utils/analytics"
import { useLocale } from "../i18n"

const STORAGE_KEY = "formo_intent"

const IntentContext = createContext(null)

export function IntentProvider({ children }) {
  const { content } = useLocale()
  const [intent, setIntentState] = useState(null)

  // Sahifa ochilganda avvalgi tanlovni tiklash
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved && content.intentCopy[saved]) setIntentState(saved)
    } catch {
      /* localStorage bloklangan bo'lishi mumkin — e'tiborsiz qoldiramiz */
    }
  }, [content])

  const setIntent = useCallback(
    (value) => {
      if (!content.intentCopy[value]) return
      setIntentState(value)
      try {
        localStorage.setItem(STORAGE_KEY, value)
      } catch {
        /* ignore */
      }
      trackIntent(value)
    },
    [content],
  )

  const value = useMemo(() => {
    return {
      intent,
      setIntent,
      // Tanlovga qarab o'zgaradigan matnlar
      copy: content.intentCopy[intent] || content.intentCopy.default,
      hasIntent: Boolean(intent),
    }
  }, [intent, setIntent, content])

  return createElement(IntentContext.Provider, { value }, children)
}

export function useIntent() {
  const ctx = useContext(IntentContext)
  const { content } = useLocale()

  if (ctx) return ctx

  // Provider'siz ishlatilganda (masalan, test) — minimal fallback
  return {
    intent: null,
    setIntent: () => {},
    copy: content.intentCopy.default,
    hasIntent: false,
  }
}

/** Tanlangan bo'limga silliq scroll qilish (sticky header hisobiga) */
export function scrollToSection(id) {
  const node = document.getElementById(id)
  if (!node) return
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  node.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" })
}
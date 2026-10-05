import { useEffect, useRef, useState } from "react"

/** Foydalanuvchi kamaytirilgan animatsiyani yoqdimi? */
export function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/** Element ko'rinishga kirganda yengil fade-up animatsiyasi beradi. */
export function useReveal(options = {}) {
  const { threshold = 0.12, rootMargin = "0px 0px -40px 0px" } = options
  const ref = useRef(null)
  const [visible, setVisible] = useState(() => prefersReducedMotion())

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (prefersReducedMotion()) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, visible }
}
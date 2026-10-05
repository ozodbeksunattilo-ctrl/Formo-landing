export function trackIntent(value) {
  // Placeholder: keyingi bosqichda analytics (GA4/umami) ga ulanish mumkin
  if (typeof window !== "undefined" && window.console) {
    console.info("[Formo][trackIntent]", value)
  }
}

export function trackLocale(value) {
  if (typeof window !== "undefined" && window.console) {
    console.info("[Formo][trackLocale]", value)
  }
}
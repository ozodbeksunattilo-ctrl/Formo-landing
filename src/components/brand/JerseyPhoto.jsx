import { useEffect, useState } from "react"
import { prefersReducedMotion } from "../../hooks/useReveal"
import jerseyPhoto from "../../assets/jersey-photo.png"

/**
 * Forma fotosurati — kulrang asl rasm duotone effekt orqali
 * 4 xil rangga o'tadi (har 3 soniyada).
 *
 * Nega `sepia`? Rasm monoxrom, oddiy `hue-rotate` kulrang ranga
 * ta'sir qilmaydi. `sepia(1)` rasmni iliq "sariq" rangga aylantiradi,
 * keyin `hue-rotate` bilan kerakli rangga buriladi.
 *
 * Rangning nomi (matn) tarjimaga bog'langan — u yerda `content.jersey.variants`.
 */
export const JERSEY_VARIANTS = [
  {
    id: "teal",
    dot: "#19A7A1",
    filter: "sepia(1) hue-rotate(142deg) saturate(3.8) brightness(1.06)",
  },
  {
    id: "red",
    dot: "#B8323F",
    filter: "sepia(1) hue-rotate(318deg) saturate(3.8) brightness(1.06)",
  },
  {
    id: "blue",
    dot: "#2B4FD6",
    filter: "sepia(1) hue-rotate(191deg) saturate(3.8) brightness(1.06)",
  },
  {
    id: "white",
    dot: "#F3F5F9",
    filter: "grayscale(1) brightness(1.5) contrast(1.06)",
  },
]

export default function JerseyPhoto({
  className = "",
  alt = "Formo futbol formasi — futbolka va shortik",
  animate = false,
  index: fixedIndex,
  onIndexChange,
}) {
  const [index, setIndex] = useState(fixedIndex ?? 0)

  // Faqat bitta variantni ko'rsatish kerak bo'lsa (indeks tashqaridan beriladi)
  useEffect(() => {
    if (fixedIndex !== undefined) setIndex(fixedIndex)
  }, [fixedIndex])

  // Avtomatik rang almashuvi
  useEffect(() => {
    if (!animate || prefersReducedMotion()) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % JERSEY_VARIANTS.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [animate])

  useEffect(() => {
    onIndexChange?.(index)
  }, [index, onIndexChange])

  const variant = JERSEY_VARIANTS[index]

  return (
    <img
      src={jerseyPhoto}
      alt={alt}
      width={1000}
      height={1000}
      draggable={false}
      className={`select-none object-contain ${className}`}
      style={{
        filter: variant.filter,
        transition: prefersReducedMotion() ? "none" : "filter 700ms ease",
      }}
    />
  )
}
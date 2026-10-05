import { useReveal } from "../../hooks/useReveal"

/**
 * Bo'lim elementi ko'rinishga kirganda yengil fade-up animatsiyasi.
 * prefers-reduced-motion yoqilgan bo'lsa, animatsiya umuman ishlamaydi.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
  ...rest
}) {
  const { ref, visible } = useReveal()

  return (
    <Tag
      ref={ref}
      data-fade=""
      className={`${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
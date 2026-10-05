/**
 * Asosiy tugma. Barcha ishlatiladigan tugmalar shu orqali — bitta usul, bitta stil.
 * variant: primary (oltin, glow) | secondary (outline) | ghost
 * Barcha variantlarda min-height 48px — barmoq uchun qulay.
 */
export default function Button({
  as: Tag = "a",
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-center " +
    "min-h-[48px] px-6 transition-colors duration-200 select-none"

  const variants = {
    primary:
      "border-2 border-accent bg-accent/10 text-accent shadow-glow hover:bg-accent/20",
    secondary:
      "border-2 border-surface2 bg-surface/40 text-text hover:border-accent2 hover:text-accent2",
    ghost: "text-muted hover:text-accent",
  }

  const sizes = {
    sm: "text-sm px-4",
    md: "text-base",
    lg: "text-lg px-8",
  }

  return (
    <Tag
      href={href}
      className={`${base} ${variants[variant] || variants.primary} ${
        sizes[size] || sizes.md
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
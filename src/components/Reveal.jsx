import { useEffect, useRef, useState } from "react"

export default function Reveal({
  children,
  className = "",
  delay = 0,
  once = true,
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "transition-all duration-700 ease-out",
        isVisible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-8 opacity-0 blur-sm",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  )
}
import { useRef } from 'react'

export function useMagnetic(strength = 0.18) {
  const ref = useRef(null)

  function onPointerMove(event) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const element = ref.current
    if (!element) return
    const rect = element.getBoundingClientRect()
    const x = (event.clientX - rect.left - rect.width / 2) * strength
    const y = (event.clientY - rect.top - rect.height / 2) * strength
    element.style.transform = `translate(${x}px, ${y}px)`
  }

  function onPointerLeave() {
    if (ref.current) ref.current.style.transform = ''
  }

  return { ref, onPointerMove, onPointerLeave }
}

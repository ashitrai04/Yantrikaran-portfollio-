import { useEffect, useRef, useState } from 'react'

/**
 * Mounts children only once the wrapper element is near the viewport.
 * Keeps children mounted afterwards (no re-boot on scroll) so GLTF cache stays warm.
 *
 *   <LazyMount className="absolute inset-0" rootMargin="300px">
 *     <SubmarineScene ... />
 *   </LazyMount>
 */
export default function LazyMount({ children, rootMargin = '300px', className = '', placeholder = null }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible || !ref.current) return
    const el = ref.current
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            io.disconnect()
            break
          }
        }
      },
      { rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [visible, rootMargin])

  return (
    <div ref={ref} className={className}>
      {visible ? children : placeholder}
    </div>
  )
}

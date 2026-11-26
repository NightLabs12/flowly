import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/index.jsx'

export default function InfoDialog({ open, title, children, onClose }) {
  const { t } = useLanguage()
  const closeRef = useRef(null)
  const previousFocus = useRef(null)

  useEffect(() => {
    if (!open) return

    previousFocus.current = document.activeElement
    closeRef.current?.focus()

    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      previousFocus.current?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <h2 id="dialog-title" className="dialog-title">{title}</h2>
        <div className="dialog-body">{children}</div>
        <button ref={closeRef} className="btn btn-primary" type="button" onClick={onClose}>
          {t.common.close}
        </button>
      </div>
    </div>
  )
}

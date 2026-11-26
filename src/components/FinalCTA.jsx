import { useState } from 'react'
import InfoDialog from './InfoDialog.jsx'
import Reveal from './Reveal.jsx'
import { useMagnetic } from '../hooks/useMagnetic.js'
import { useLanguage } from '../i18n/index.jsx'

export default function FinalCTA() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const cta = useMagnetic()

  return (
    <section className="section final-cta" id="get-started" aria-labelledby="final-title">
      <div className="shell">
        <Reveal className="final-inner">
          <p className="section-label">{t.final.label}</p>
          <h2 id="final-title" className="final-title">{t.final.title}</h2>
          <p className="final-text">{t.final.text}</p>
          <button
            className="btn btn-primary is-magnetic"
            type="button"
            ref={cta.ref}
            onPointerMove={cta.onPointerMove}
            onPointerLeave={cta.onPointerLeave}
            onClick={() => setOpen(true)}
          >
            {t.final.cta}
          </button>
          <p className="final-note">{t.final.note}</p>
        </Reveal>
      </div>

      <InfoDialog open={open} title={t.final.dialogTitle} onClose={() => setOpen(false)}>
        <p>{t.final.dialogBody}</p>
      </InfoDialog>
    </section>
  )
}

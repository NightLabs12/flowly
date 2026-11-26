import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import DashboardMockup from './DashboardMockup.jsx'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/index.jsx'

const tabIds = ['overview', 'tasks', 'progress', 'calendar']

export default function ProductPreview() {
  const { t } = useLanguage()
  const [view, setView] = useState('overview')
  const reduce = useReducedMotion()

  function onKeyDown(event, index) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const direction = event.key === 'ArrowRight' ? 1 : -1
    const next = (index + direction + tabIds.length) % tabIds.length
    setView(tabIds[next])
    document.getElementById(`tab-${tabIds[next]}`)?.focus()
  }

  return (
    <section className="section preview-section" id="product" aria-labelledby="preview-title">
      <div className="shell">
        <Reveal className="section-head">
          <p className="section-label">{t.preview.label}</p>
          <h2 id="preview-title" className="section-title">{t.preview.title}</h2>
          <p className="section-intro">{t.preview.intro}</p>
        </Reveal>

        <Reveal className="preview-frame">
          <div className="preview-tabs" role="tablist" aria-label={t.preview.viewsLabel}>
            {tabIds.map((id, index) => (
              <button
                key={id}
                id={`tab-${id}`}
                className={view === id ? 'preview-tab is-active' : 'preview-tab'}
                type="button"
                role="tab"
                aria-selected={view === id}
                aria-controls="preview-panel"
                tabIndex={view === id ? 0 : -1}
                onClick={() => setView(id)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                {t.preview.tabs[index]}
              </button>
            ))}
          </div>

          <div
            id="preview-panel"
            className="preview-panel"
            role="tabpanel"
            aria-labelledby={`tab-${view}`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={view}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reduce ? 0 : 0.24, ease: 'easeOut' }}
              >
                <DashboardMockup view={view} />
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="preview-note">{t.preview.note}</p>
        </Reveal>
      </div>
    </section>
  )
}

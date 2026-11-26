import DashboardMockup from './DashboardMockup.jsx'
import MotionHeadline from './MotionHeadline.jsx'
import Reveal from './Reveal.jsx'
import { useMagnetic } from '../hooks/useMagnetic.js'
import { useLanguage } from '../i18n/index.jsx'

export default function Hero() {
  const { t } = useLanguage()
  const primary = useMagnetic()

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <MotionHeadline />
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <a
              className="btn btn-primary is-magnetic"
              href="#get-started"
              ref={primary.ref}
              onPointerMove={primary.onPointerMove}
              onPointerLeave={primary.onPointerLeave}
            >
              {t.hero.ctaPrimary}
            </a>
            <a className="btn btn-secondary" href="#product">{t.hero.ctaSecondary}</a>
          </div>
          <p className="hero-note">{t.hero.note}</p>
        </div>

        <Reveal className="hero-visual" delay={100}>
          <DashboardMockup compact />
        </Reveal>
      </div>
    </section>
  )
}

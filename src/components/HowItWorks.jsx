import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/index.jsx'

export default function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section className="section steps-section" id="how-it-works" aria-labelledby="steps-title">
      <div className="shell">
        <Reveal className="section-head">
          <p className="section-label">{t.steps.label}</p>
          <h2 id="steps-title" className="section-title">{t.steps.title}</h2>
        </Reveal>

        <ol className="steps">
          {t.steps.items.map((step, index) => (
            <Reveal as="li" className="step" key={index} delay={index * 80}>
              <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="step-copy">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

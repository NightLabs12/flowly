import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/index.jsx'

const icons = ['planning', 'collaboration', 'progress', 'workspace', 'workflow']

export default function Features() {
  const { t } = useLanguage()

  return (
    <section className="section features" id="features" aria-labelledby="features-title">
      <div className="shell">
        <Reveal className="section-head">
          <p className="section-label">{t.features.label}</p>
          <h2 id="features-title" className="section-title">{t.features.title}</h2>
        </Reveal>

        <div className="feature-grid">
          <Reveal className="feature-flagship">
            <span className="feature-icon"><Icon name="tasks" /></span>
            <h3>{t.features.flagship.name}</h3>
            <p>{t.features.flagship.description}</p>
            <div className="feature-mini" aria-hidden="true">
              {t.features.miniRows.map((row, index) => (
                <div className="feature-mini-row" key={index}>
                  <span className={index === 0 ? 'feature-mini-check is-done' : 'feature-mini-check'} />
                  <span>{row.label}</span>
                  <span className="feature-mini-tag">{row.tag}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <ul className="feature-list">
            {t.features.items.map((feature, index) => (
              <Reveal as="li" className="feature-item" key={icons[index]} delay={index * 60}>
                <span className="feature-icon"><Icon name={icons[index]} /></span>
                <div>
                  <h3>{feature.name}</h3>
                  <p>{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

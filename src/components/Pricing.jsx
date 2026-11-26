import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/index.jsx'

export default function Pricing() {
  const { t } = useLanguage()

  return (
    <section className="section pricing-section" id="pricing" aria-labelledby="pricing-title">
      <div className="shell">
        <Reveal className="section-head">
          <p className="section-label">{t.pricing.label}</p>
          <h2 id="pricing-title" className="section-title">{t.pricing.title}</h2>
        </Reveal>

        <div className="pricing-grid">
          {t.pricing.plans.map((plan, index) => (
            <Reveal className="pricing-card" key={index} delay={index * 80}>
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-price">
                <strong>{plan.price}</strong>
                <span>{plan.period}</span>
              </p>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <a className="btn btn-primary plan-cta" href="#get-started">{plan.cta}</a>
            </Reveal>
          ))}
        </div>
        <p className="pricing-note">{t.pricing.note}</p>
      </div>
    </section>
  )
}

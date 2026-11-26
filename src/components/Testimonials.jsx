import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/index.jsx'

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="section testimonials-section" aria-labelledby="testimonials-title">
      <div className="shell">
        <Reveal className="section-head">
          <p className="section-label">{t.testimonials.label}</p>
          <h2 id="testimonials-title" className="section-title">{t.testimonials.title}</h2>
        </Reveal>

        <ul className="testimonial-grid">
          {t.testimonials.cards.map((item, index) => (
            <Reveal as="li" className="testimonial-card" key={index} delay={index * 70}>
              <span className="demo-label">{t.testimonials.demoLabel}</span>
              <blockquote>{item.quote}</blockquote>
              <div className="testimonial-person">
                <span className="testimonial-avatar" aria-hidden="true">DU</span>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
        <p className="testimonials-note">{t.testimonials.note}</p>
      </div>
    </section>
  )
}

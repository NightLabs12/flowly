import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/index.jsx'

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="shell faq-grid">
        <Reveal className="faq-intro">
          <p className="section-label">{t.faq.label}</p>
          <h2 id="faq-title" className="section-title">{t.faq.title}</h2>
          <p className="section-intro">{t.faq.intro}</p>
        </Reveal>

        <Reveal className="faq-list" delay={80}>
          {t.faq.items.map((item, index) => {
            const open = openIndex === index
            return (
              <div className={open ? 'faq-item is-open' : 'faq-item'} key={index}>
                <h3>
                  <button
                    id={`faq-question-${index}`}
                    className="faq-question"
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-sign" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  aria-hidden={!open}
                >
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

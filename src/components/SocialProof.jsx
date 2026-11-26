import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n/index.jsx'

const logos = ['[Logo demo 1]', '[Logo demo 2]', '[Logo demo 3]', '[Logo demo 4]', '[Logo demo 5]']

export default function SocialProof() {
  const { t } = useLanguage()

  return (
    <section className="social-proof" aria-label={t.proof.ariaLabel}>
      <div className="shell">
        <Reveal>
          <p className="proof-heading">{t.proof.heading}</p>
          <ul className="proof-logos">
            {logos.map((logo) => (
              <li key={logo}>{logo}</li>
            ))}
          </ul>
          <p className="proof-note">{t.proof.note}</p>
        </Reveal>
      </div>
    </section>
  )
}

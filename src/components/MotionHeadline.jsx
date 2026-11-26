import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../i18n/index.jsx'

export default function MotionHeadline() {
  const reduce = useReducedMotion()
  const { t } = useLanguage()

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.06,
        delayChildren: reduce ? 0 : 0.08,
      },
    },
  }

  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.5, ease: [0.2, 0.8, 0.2, 1] },
    },
  }

  return (
    <h1 id="hero-title" className="hero-title" aria-label={t.hero.ariaLabel}>
      <motion.span
        className="headline-inner"
        variants={container}
        initial="hidden"
        animate="show"
        aria-hidden="true"
      >
        {t.hero.titleWords.map(({ text, accent }, index) => (
          <motion.span className="headline-word" variants={item} key={`${text}-${index}`}>
            <span className={accent ? 'accent-word' : undefined}>{text}</span>
          </motion.span>
        ))}
      </motion.span>
    </h1>
  )
}

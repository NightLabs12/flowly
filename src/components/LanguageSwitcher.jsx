import { useLanguage } from '../i18n/index.jsx'

function FlagIndonesia() {
  return (
    <svg className="lang-flag" viewBox="0 0 60 40" aria-hidden="true" focusable="false">
      <rect width="60" height="40" fill="#ffffff" />
      <rect width="60" height="20" fill="#ce1126" />
      <rect x="0.5" y="0.5" width="59" height="39" fill="none" stroke="#d3d0e4" strokeWidth="1" />
    </svg>
  )
}

function FlagEnglish() {
  return (
    <svg className="lang-flag" viewBox="0 0 60 30" aria-hidden="true" focusable="false">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#ffffff" strokeWidth="6" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#c8102e" strokeWidth="2.5" />
      <path d="M30 0 V30 M0 15 H60" stroke="#ffffff" strokeWidth="10" />
      <path d="M30 0 V30 M0 15 H60" stroke="#c8102e" strokeWidth="6" />
      <rect x="0.5" y="0.5" width="59" height="29" fill="none" stroke="#d3d0e4" strokeWidth="1" />
    </svg>
  )
}

const options = [
  { code: 'id', label: 'ID', ariaKey: 'switchToId', Flag: FlagIndonesia },
  { code: 'en', label: 'EN', ariaKey: 'switchToEn', Flag: FlagEnglish },
]

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="language-switcher" role="group" aria-label={t.nav.switchLabel}>
      {options.map(({ code, label, ariaKey, Flag }) => (
        <button
          key={code}
          type="button"
          className={language === code ? 'lang-option is-active' : 'lang-option'}
          aria-pressed={language === code}
          aria-label={`${label}: ${t.nav[ariaKey]}`}
          lang={code}
          onClick={() => setLanguage(code)}
        >
          <Flag />
          <span>{label}</span>
        </button>
      ))}
    </div>
  )
}

import { useEffect, useState } from 'react'
import { FlowMark } from './Mark.jsx'
import InfoDialog from './InfoDialog.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { useLanguage } from '../i18n/index.jsx'

export default function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  const links = [
    { href: '#features', label: t.nav.features },
    { href: '#how-it-works', label: t.nav.howItWorks },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#faq', label: t.nav.faq },
  ]

  useEffect(() => {
    if (!open) return
    function onKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <FlowMark />
          <span>Flowly</span>
        </a>

        <nav
          id="primary-nav"
          className={open ? 'nav is-open' : 'nav'}
          aria-label={t.nav.mainNav}
        >
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button
              className="btn btn-text"
              type="button"
              onClick={() => {
                setOpen(false)
                setLoginOpen(true)
              }}
            >
              {t.nav.login}
            </button>
            <a className="btn btn-primary" href="#get-started" onClick={() => setOpen(false)}>
              {t.nav.cta}
            </a>
          </div>
        </nav>

        <div className="header-controls">
          <LanguageSwitcher />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={open ? 'bar bar-top is-open' : 'bar bar-top'} />
            <span className={open ? 'bar bar-bottom is-open' : 'bar bar-bottom'} />
          </button>
        </div>
      </div>

      <InfoDialog open={loginOpen} title={t.loginDialog.title} onClose={() => setLoginOpen(false)}>
        <p>{t.loginDialog.body}</p>
      </InfoDialog>
    </header>
  )
}

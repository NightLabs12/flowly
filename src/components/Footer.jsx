import { useState } from 'react'
import { FlowMark } from './Mark.jsx'
import InfoDialog from './InfoDialog.jsx'
import { useLanguage } from '../i18n/index.jsx'

export default function Footer() {
  const { t } = useLanguage()
  const [dialog, setDialog] = useState(null)

  const links = [
    { href: '#features', label: t.nav.features },
    { href: '#how-it-works', label: t.nav.howItWorks },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#faq', label: t.nav.faq },
  ]

  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand-block">
          <a className="brand" href="#top">
            <FlowMark />
            <span>Flowly</span>
          </a>
          <p>{t.footer.description}</p>
        </div>

        <nav className="footer-nav" aria-label={t.nav.footerNav}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="footer-social">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p>{t.footer.copyright}</p>
        <div className="footer-legal">
          <button type="button" onClick={() => setDialog('privacy')}>{t.footer.privacy}</button>
          <button type="button" onClick={() => setDialog('terms')}>{t.footer.terms}</button>
          <span>{t.footer.socialNote}</span>
        </div>
      </div>

      <InfoDialog
        open={dialog !== null}
        title={dialog === 'privacy' ? t.footer.privacy : t.footer.terms}
        onClose={() => setDialog(null)}
      >
        <p>{t.footer.dialogBody}</p>
      </InfoDialog>
    </footer>
  )
}

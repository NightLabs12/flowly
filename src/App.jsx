import Navbar from './components/Navbar.jsx'
import MotionProgress from './components/MotionProgress.jsx'
import Hero from './components/Hero.jsx'
import SocialProof from './components/SocialProof.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import ProductPreview from './components/ProductPreview.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import { useLanguage } from './i18n/index.jsx'

export default function App() {
  const { t } = useLanguage()

  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <MotionProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <ProductPreview />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

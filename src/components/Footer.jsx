import { Sparkles } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageContext'
import logo from '../assets/images/gogo-shine-logo.png'
const QUICK_LINKS = [
  { key: 'nav.services', href: '#services' },
  { key: 'nav.why', href: '#why-us' },
  { key: 'nav.process', href: '#process' },
  { key: 'nav.testimonials', href: '#testimonials' },
  { key: 'nav.contact', href: '#contact' },
]

const SERVICE_KEYS = ['home', 'office', 'deep', 'carpet', 'construction', 'window']

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-teal-900 text-teal-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1.5">
              <img src={logo} className="w-26 h-20" alt="gojo shine logo" />
              <span className="font-heading text-2xl font-extrabold text-white">
                {t('brandShort')}
              </span>
            </div>
            <p className="mt-4 max-w-sm leading-relaxed text-teal-200/80">{t('footer.blurb')}</p>
          </div>

          {/* Quick links */}
          <nav aria-label={t('footer.quickLinks')}>
            <h3 className="font-heading font-bold text-white">{t('footer.quickLinks')}</h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <a href={href} className="text-teal-200/80 transition hover:text-gold-400">
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white">{t('footer.servicesTitle')}</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_KEYS.map((key) => (
                <li key={key}>
                  <a href="#services" className="text-teal-200/80 transition hover:text-gold-400">
                    {t(`services.${key}.title`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-teal-800 pt-6 text-center text-sm text-teal-200/60">
          © 2026 {t('brand')} — {t('footer.rights')}
        </div>
      </div>
    </footer>
  )
}

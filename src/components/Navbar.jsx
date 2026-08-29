import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Sparkles, X } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageContext'
import logo from '../assets/images/gogo-shine-logo.png'
const NAV_LINKS = [
  { key: 'nav.services', href: '#services' },
  { key: 'nav.why', href: '#why-us' },
  { key: 'nav.process', href: '#process' },
  { key: 'nav.testimonials', href: '#testimonials' },
  { key: 'nav.contact', href: '#contact' },
]

/**
 * Fashion wordmark: first word in the adaptive header color, the rest wrapped
 * in a shimmering gold gradient with an italic flourish. Splits on the first
 * space so it works for both the English and Amharic brand strings.
 */
function Wordmark({ brand, sizeClass = 'text-2xl', leadClass }) {
  const [lead, ...rest] = brand.trim().split(' ')
  const tail = rest.join(' ')
  return (
    <span className={`font-heading ${sizeClass} font-extrabold tracking-tight`}>
      <span className={leadClass}>{lead}</span>
      {tail && (
        <span className="ml-1.5 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 bg-clip-text italic text-transparent drop-shadow-[0_1px_6px_rgba(212,169,71,0.35)]">
          {tail}
        </span>
      )}
    </span>
  )
}

/** Pill-style EN | አማ switcher. Persistence is handled by LanguageContext. */
function LanguageToggle({ className = '' }) {
  const { language, setLanguage } = useTranslation()
  const options = [
    { code: 'en', label: 'EN' },
    { code: 'am', label: 'አማ' },
  ]
  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`flex items-center rounded-full border border-teal-200 bg-white/80 p-1 ${className}`}
    >
      {options.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
          aria-label={code === 'en' ? 'Switch to English' : 'ወደ አማርኛ ቀይር'}
          className={`rounded-full px-3 py-1 text-sm font-semibold transition-colors duration-200 ${
            language === code
              ? 'bg-teal-700 text-white shadow-soft'
              : 'text-teal-700 hover:bg-teal-50'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-teal-800/95 shadow-lift backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Wordmark — white while over the dark hero photo, teal once scrolled */}
        <img src={logo} className="w-26 h-20" alt="" />
        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-white/90 hover:text-gold-300'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageToggle />
          <a href="#contact" className="btn-gold px-5 py-2.5 text-sm">
            {t('cta.book')}
          </a>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="rounded-lg border border-teal-200 bg-white p-2 text-teal-800 shadow-soft transition-colors hover:bg-teal-50"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-teal-900/40 lg:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 max-w-[85vw] flex-col bg-white p-6 shadow-lift lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-5 w-5 text-gold-500" aria-hidden="true" />
                  <Wordmark brand={t('brandShort')} sizeClass="text-xl" leadClass="text-teal-800" />
                </span>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="rounded-lg p-2 text-teal-800 hover:bg-teal-50"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <ul className="mt-8 flex flex-col gap-1">
                {NAV_LINKS.map(({ key, href }) => (
                  <li key={key}>
                    <a
                      href={href}
                      onClick={closeMenu}
                      className="block rounded-xl px-4 py-3 font-medium text-teal-800 hover:bg-mint"
                    >
                      {t(key)}
                    </a>
                  </li>
                ))}
              </ul>

              <a href="#contact" onClick={closeMenu} className="btn-gold mt-auto w-full">
                {t('cta.book')}
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

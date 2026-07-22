import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const STORAGE_KEY = 'yesuf-lang'

const LanguageContext = createContext(null)

/** Read the saved language, defaulting to Amharic. */
function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'am') return saved
  } catch {
    /* localStorage unavailable (e.g. privacy mode) — fall through to default */
  }
  return 'am'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  // Keep <html lang> in sync for accessibility, and toggle the Amharic font class.
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.classList.toggle('font-amharic', language === 'am')
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      /* ignore */
    }
  }, [language])

  /**
   * t('services.home.title') → looks up the dotted path in the active language,
   * falling back to English, then to the key itself.
   */
  const t = useCallback(
    (key) => {
      const lookup = (lang) =>
        key.split('.').reduce((obj, part) => (obj == null ? undefined : obj[part]), translations[lang])
      const value = lookup(language) ?? lookup('en')
      return value ?? key
    },
    [language]
  )

  const value = useMemo(
    () => ({ language, setLanguage, t, isAmharic: language === 'am' }),
    [language, t]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used within a LanguageProvider')
  return ctx
}

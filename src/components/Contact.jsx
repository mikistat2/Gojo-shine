import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageContext'

const SERVICE_KEYS = ['home', 'office', 'deep', 'carpet', 'construction', 'window']

const CONTACT_PHONE = '+251 96 563 5149'
const CONTACT_EMAIL = 'hello@gojoshinecleaning.com'

/* Brand icons drawn inline — lucide-react no longer ships brand logos. */
const TelegramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M21.94 3.15a1.5 1.5 0 0 0-1.53-.26L2.7 9.84a1.42 1.42 0 0 0 .1 2.68l4.42 1.42 1.7 5.44a1.42 1.42 0 0 0 2.35.6l2.44-2.35 4.28 3.14a1.42 1.42 0 0 0 2.23-.86l2.25-15.32a1.5 1.5 0 0 0-.53-1.44ZM9.98 15.06l-.62 3.11-1.2-3.85 8.72-6.54-6.9 7.28Z" />
  </svg>
)
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  </svg>
)
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
)
const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

const SOCIALS = [
  { name: 'Telegram', href: 'https://t.me/gojoshinecleaning', Icon: TelegramIcon },
  { name: 'Facebook', href: 'https://facebook.com/gojoshinecleaning', Icon: FacebookIcon },
  { name: 'Instagram', href: 'https://instagram.com/gojoshinecleaning', Icon: InstagramIcon },
  { name: 'TikTok', href: 'https://tiktok.com/@gojoshinecleaning', Icon: TikTokIcon },
]

const inputClasses =
  'w-full rounded-xl border border-teal-200 bg-white px-4 py-3 text-teal-900 placeholder:text-teal-700/40 transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30'

export default function Contact() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [showToast, setShowToast] = useState(false)
  const toastTimer = useRef(null)

  useEffect(() => () => clearTimeout(toastTimer.current), [])

  const setField = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((err) => ({ ...err, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = t('form.errors.name')
    // Accepts Ethiopian formats like +251 9XX XXX XXX or 09XX XXX XXX
    if (!/^\+?[0-9\s-]{9,15}$/.test(form.phone.trim())) next.phone = t('form.errors.phone')
    if (!form.service) next.service = t('form.errors.service')
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    // TODO: wire this up to a real API / backend endpoint.
    // For now we just show the success state and reset the form.
    setForm({ name: '', phone: '', service: '', message: '' })
    setShowToast(true)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setShowToast(false), 5000)
  }

  const infoRows = [
    { Icon: Phone, label: t('contact.phone'), value: CONTACT_PHONE, href: 'tel:+251911234567' },
    { Icon: Mail, label: t('contact.email'), value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { Icon: MapPin, label: t('contact.location'), value: t('contact.locationValue') },
    { Icon: Clock, label: t('contact.hours'), value: t('contact.hoursValue') },
  ]

  return (
    <section id="contact" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-teal-100 bg-mint/50 p-6 shadow-soft sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-teal-800">
                  {t('form.name')}
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={setField('name')}
                  placeholder={t('form.namePlaceholder')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={inputClasses}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1.5 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-teal-800">
                  {t('form.phone')}
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={setField('phone')}
                  placeholder={t('form.phonePlaceholder')}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  className={inputClasses}
                />
                {errors.phone && (
                  <p id="phone-error" role="alert" className="mt-1.5 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-teal-800">
                {t('form.service')}
              </label>
              <select
                id="service"
                value={form.service}
                onChange={setField('service')}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? 'service-error' : undefined}
                className={`${inputClasses} ${form.service ? '' : 'text-teal-700/40'}`}
              >
                <option value="" disabled>
                  {t('form.service')}
                </option>
                {SERVICE_KEYS.map((key) => (
                  <option key={key} value={key} className="text-teal-900">
                    {t(`services.${key}.title`)}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p id="service-error" role="alert" className="mt-1.5 text-sm text-red-600">
                  {errors.service}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-teal-800">
                {t('form.message')}
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={setField('message')}
                placeholder={t('form.messagePlaceholder')}
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button type="submit" className="btn-gold mt-6 w-full sm:w-auto">
              {t('form.submit')}
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col justify-between gap-8 rounded-2xl bg-teal-700 p-6 text-white shadow-soft sm:p-8"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold">{t('contact.infoTitle')}</h3>
              <ul className="mt-7 space-y-6">
                {infoRows.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="rounded-xl bg-teal-600 p-3">
                      <Icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-sm font-medium text-teal-200">{label}</div>
                      {href ? (
                        <a href={href} className="mt-0.5 block font-semibold hover:text-gold-300">
                          {value}
                        </a>
                      ) : (
                        <div className="mt-0.5 font-semibold">{value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-medium text-teal-200">{t('contact.follow')}</div>
              <div className="mt-3 flex gap-3">
                {SOCIALS.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="rounded-full bg-teal-600 p-3 transition hover:bg-gold-500 hover:text-teal-900"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="status"
            aria-live="polite"
            className="fixed bottom-6 left-1/2 z-[60] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-3 rounded-2xl bg-teal-800 px-5 py-4 text-white shadow-lift"
          >
            <CheckCircle2 className="h-6 w-6 shrink-0 text-gold-400" aria-hidden="true" />
            <p className="font-medium">{t('form.success')}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

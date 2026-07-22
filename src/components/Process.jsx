import { motion, useReducedMotion } from 'framer-motion'
import { CalendarCheck, Smile, SprayCan } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageContext'

const STEPS = [
  { key: 'step1', Icon: CalendarCheck },
  { key: 'step2', Icon: SprayCan },
  { key: 'step3', Icon: Smile },
]

export default function Process() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  return (
    <section id="process" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">{t('process.title')}</h2>
          <p className="section-subtitle">{t('process.subtitle')}</p>
        </div>

        {/* Horizontal timeline on desktop, vertical on mobile */}
        <ol className="relative mt-16 flex flex-col gap-12 md:flex-row md:gap-8">
          {/* Connector line */}
          <div
            aria-hidden="true"
            className="absolute left-7 top-0 h-full w-0.5 bg-teal-100 md:left-0 md:top-7 md:h-0.5 md:w-full"
          />
          {STEPS.map(({ key, Icon }, i) => (
            <motion.li
              key={key}
              initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
              className="relative flex flex-1 items-start gap-5 md:flex-col md:items-center md:text-center"
            >
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white shadow-soft">
                <Icon className="h-6 w-6" aria-hidden="true" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 font-heading text-xs font-bold text-teal-900">
                  {i + 1}
                </span>
              </div>
              <div className="pt-1 md:pt-0">
                <h3 className="font-heading text-xl font-bold text-teal-800">
                  {t(`process.${key}.title`)}
                </h3>
                <p className="mt-2 max-w-xs leading-relaxed text-teal-700/70 md:mx-auto">
                  {t(`process.${key}.desc`)}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

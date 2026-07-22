import { motion, useReducedMotion } from 'framer-motion'
import { BadgeDollarSign, CalendarClock, Leaf, ShieldCheck } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageContext'
import backgroundimage from '../assets/images/why-us-bg.png'

const FEATURES = [
  { key: 'staff', Icon: ShieldCheck },
  { key: 'eco', Icon: Leaf },
  { key: 'schedule', Icon: CalendarClock },
  { key: 'pricing', Icon: BadgeDollarSign },
]

export default function WhyUs() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="why-us"
      className="relative scroll-mt-20 bg-mint py-20 sm:py-25 mt-16"
      /* NOTE: no overflow-hidden here — that's what lets her head escape */
    >
      {/* Overflowing figure: bottom-anchored, taller than the section so the top spills out */}
      <img
        src={backgroundimage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 z-0 select-none
                   right-2 h-[118%] w-auto max-w-none
                   sm:right-6 sm:h-[122%]
                   lg:right-12 lg:h-[128%]
                   hidden md:block mb-2"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
        <div className="text-center">
          <h2 className="section-title ">{t('why.title')}</h2>
          <p className="section-subtitle">{t('why.subtitle')}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ key, Icon }, i) => (
            <motion.div
              key={key}
              initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="rounded-2xl bg-white p-7 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="mx-auto inline-flex rounded-full bg-teal-700 p-4 text-white">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-teal-800">
                {t(`why.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-teal-700/70">
                {t(`why.${key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageContext'
import cleaningImg from '../assets/images/cleaning-img-overfloww.png'

export default function CtaBanner() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-visible bg-teal-700 py-16 sm:py-20">
      {/* Soft decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-visible"
      >
        <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-teal-600/60 blur-xl" />
        
      </div>

      <motion.div
        initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:text-left"
      >
        <div>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {t('banner.title')}
          </h2>
          <p className="mt-3 text-lg text-teal-100">
            {t('banner.subtitle')}
          </p>
          <a
            href="#contact"
            className="btn-gold mt-6 inline-flex items-center gap-2"
          >
            {t('cta.book')}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Overflowing image */}
        <div className="relative">
          <img
            src={cleaningImg}
            alt="cleaner-badge"
            className="relative -mt-28 h-72 lg:-mt-36 lg:h-96 z-20"
          />
        </div>
      </motion.div>
    </section>
  )
}
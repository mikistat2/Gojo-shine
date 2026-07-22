import { motion, useReducedMotion } from 'framer-motion'
import { Sparkle } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageContext'
import houseCleaningImg from '../assets/images/house-cleaning.png'
import officeCleaningImg from '../assets/images/office-cleaning.avif'
import deepCleaningImg from '../assets/images/deep-cleaning.png'
import carpetCleaningImg from '../assets/images/carpet-cleaning.png'
import constructionCleaningImg from '../assets/images/postconstruction-cleaning.avif'
import windowCleaningImg from '../assets/images/window-cleaning.png'

/* Each card gets a related backdrop photo (Unsplash), fading into deep teal under the text. */
const SERVICES = [
  {
    key: 'home',
    image: houseCleaningImg,
  },
  {
    key: 'office',
    image: officeCleaningImg,
  },
  {
    key: 'deep',
    image: deepCleaningImg,
  },
  {
    key: 'carpet',
    image: carpetCleaningImg,
  },
  {
    key: 'construction',
    image: constructionCleaningImg,
  },
  {
    key: 'window',
    image: windowCleaningImg,
  },
]

export default function Services() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  return (
    <section id="services" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ key, image }, i) => (
            <motion.article
              key={key}
              initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              {/* Backdrop photo, zooming slightly on hover, fading into deep teal behind the text */}
              <div aria-hidden="true" className="absolute inset-0">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/55 via-60% to-teal-900/90" />
              </div>

              <div className="relative p-7 pt-52">
                {/* Sparkle accent revealed on hover */}
                <Sparkle
                  aria-hidden="true"
                  className="absolute right-5 top-5 h-4 w-4 text-gold-400 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:animate-sparkle-pop"
                />
                <h3 className="font-heading text-xl font-bold text-white">
                  {t(`services.${key}.title`)}
                </h3>
                <p className="mt-2.5 leading-relaxed text-teal-50/85">
                  {t(`services.${key}.desc`)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

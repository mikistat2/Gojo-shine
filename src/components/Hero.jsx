import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageContext'
import bgImg1 from '../assets/images/hero-bg-1.png'
import bgImg2 from '../assets/images/hero-bg-2.png'
import bgImg3 from '../assets/images/hero-bg-3.jpg'


const STATS = [
  { valueKey: 'stats.clientsValue', labelKey: 'stats.clients' },
  { valueKey: 'stats.yearsValue', labelKey: 'stats.years' },
  { valueKey: 'stats.satisfactionValue', labelKey: 'stats.satisfaction' },
]

/* Rotating hero backdrop photos (Unsplash). The teal overlay keeps text readable. */
const HERO_IMAGES = [
  bgImg1,
  bgImg2,
  bgImg3,
]

const SLIDE_INTERVAL_MS = 6000

/** Crossfading, slowly-zooming (Ken Burns) background slideshow. */
function BackgroundSlideshow({ reduceMotion }) {
  const [active, setActive] = useState(0)

  // Preload all slides so the first crossfade doesn't flash.
  useEffect(() => {
    HERO_IMAGES.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => setActive((a) => (a + 1) % HERO_IMAGES.length), SLIDE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [reduceMotion])

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
            i === active ? 'opacity-100 animate-kenburns' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      {/* Readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-900/90 via-teal-800/70 to-teal-900/75" />
    </div>
  )
}

export default function Hero() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  const fadeUp = (delay) => ({
    initial: reduceMotion ? {} : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  })

  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <BackgroundSlideshow reduceMotion={reduceMotion} />

      {/* Soft decorative accents above the photo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-teal-400/10 blur-2xl animate-float-slow" />
        <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-gold-400/10 blur-2xl animate-float" />
        <div className="absolute right-1/4 top-24 h-3 w-3 rounded-full bg-gold-400/70" />
        <div className="absolute left-1/4 top-56 h-2 w-2 rounded-full bg-teal-200/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div {...fadeUp(0)}>
           
        </motion.div>

        {/* Headline with a one-time shine sweep */}
        <motion.h1
          {...fadeUp(0.1)}
          className="relative mx-auto mt-6 max-w-4xl overflow-hidden font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          {t('hero.title')}
          {!reduceMotion && (
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1/3 animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          )}
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-6 max-w-2xl text-lg text-teal-50/90 sm:text-xl"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#contact" className="btn-gold w-full sm:w-auto">
            {t('cta.quote')}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#services"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 py-3 font-heading font-semibold text-white transition duration-200 hover:bg-white hover:text-teal-800 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
          >
            {t('cta.services')}
          </a>
        </motion.div>

        {/* Trust stats */}
        <motion.dl
          {...fadeUp(0.45)}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {STATS.map(({ valueKey, labelKey }) => (
            <div
              key={labelKey}
              className="rounded-2xl border border-white/20 bg-white/10 px-6 py-5 shadow-soft backdrop-blur"
            >
              <dd className="font-heading text-3xl font-extrabold text-gold-400">{t(valueKey)}</dd>
              <dt className="mt-1 text-sm font-medium text-teal-50/80">{t(labelKey)}</dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}

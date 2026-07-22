import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { CircleAlert, Sparkles } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageContext'
import beforeCarpet from '../assets/images/before-carpet.png'
import afterCarpet from '../assets/images/after-carpet.png'
import beforeKitchen from '../assets/images/before-ckichen.png'
import afterKitchen from '../assets/images/after-ckichen.png'
import beforeCoutch from '../assets/images/before-couch.png'
import afterCoutch from '../assets/images/after-coutch.png'

/* Verified Unsplash photo pairs: a genuinely messy "before" and a spotless "after". */
const ROOMS = [
  {
    key: 'carpet',
    before:
      beforeCarpet,
    after:
      afterCarpet,
  },
  {
    key: 'kitchen',
    before:
      beforeKitchen,
    after:
      afterKitchen,
  },
  {
    key: 'Couch',
    before:
      beforeCoutch,
    after:
      afterCoutch,
  },
]

const FLIP_EVERY_MS = 5200
const STAGGER_MS = 1400

/** One face of a flip card (photo + label + Before/After badge). */
function Face({ image, label, badge, isAfter, flipped }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-2xl shadow-lift [backface-visibility:hidden]"
      style={isAfter ? { transform: 'rotateY(180deg)' } : undefined}
      aria-hidden={isAfter ? !flipped : flipped}
    >
      <div
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Bottom fade for the room label */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-teal-950/90 to-transparent" />

      {/* Before / After badge */}
      <span
        className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-heading text-sm font-bold shadow-soft ${
          isAfter ? 'bg-gold-500 text-teal-900' : 'bg-teal-950/80 text-white backdrop-blur'
        }`}
      >
        {isAfter ? (
          <Sparkles className="h-4 w-4" aria-hidden="true" />
        ) : (
          <CircleAlert className="h-4 w-4" aria-hidden="true" />
        )}
        {badge}
      </span>

      <span className="absolute bottom-4 left-4 font-heading text-lg font-bold text-white">
        {label}
      </span>
    </div>
  )
}

/** A card that flips in 3D between the messy and clean photo. */
function FlipCard({ room, index }) {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const [flipped, setFlipped] = useState(false)

  // Staggered auto-flip so the cards ripple rather than flip in unison.
  useEffect(() => {
    if (reduceMotion) return
    let interval
    const kickoff = setTimeout(() => {
      setFlipped(true)
      interval = setInterval(() => setFlipped((f) => !f), FLIP_EVERY_MS)
    }, 2200 + index * STAGGER_MS)
    return () => {
      clearTimeout(kickoff)
      clearInterval(interval)
    }
  }, [index, reduceMotion])

  const label = t(`beforeAfter.rooms.${room.key}` || room.key)

  return (
    <div className="h-80 [perspective:1400px]">
      {/* The flip itself is a plain CSS transition — animating the transform via JS
          can momentarily flatten the 3D context and show a mirrored face. */}
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${label} — ${flipped ? t('beforeAfter.after') : t('beforeAfter.before')}`}
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setFlipped((f) => !f)
          }
        }}
        style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        className="relative h-full w-full cursor-pointer rounded-2xl transition-transform duration-[900ms] ease-[cubic-bezier(0.32,0.72,0.35,1)] [transform-style:preserve-3d]"
      >
        <Face
          image={room.before}
          label={label}
          badge={t('beforeAfter.before')}
          isAfter={false}
          flipped={flipped}
        />
        <Face
          image={room.after}
          label={label}
          badge={t('beforeAfter.after')}
          isAfter
          flipped={flipped}
        />
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden bg-teal-800 py-20 sm:py-24">
      {/* Soft decorative circles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal-700/70 blur-2xl" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-teal-900/60 blur-2xl" />
        <Sparkles className="absolute left-[12%] top-16 h-5 w-5 text-gold-400/60" />
        <Sparkles className="absolute bottom-16 right-[14%] h-6 w-6 text-gold-400/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {t('beforeAfter.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-teal-100/80 sm:text-lg">
            {t('beforeAfter.subtitle')}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room, i) => (
            <FlipCard key={room.key} room={room} index={i} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm font-medium text-teal-100/70">
          {t('beforeAfter.hint')}
        </p>
      </div>
    </section>
  )
}

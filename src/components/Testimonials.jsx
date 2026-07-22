import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Sparkles, Star } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageContext'
import testi1 from '../assets/images/testi-1.jpg'
import testi2 from '../assets/images/testi-2.jpg'
import testi4 from '../assets/images/testi-4.webp'
import testi5 from '../assets/images/testi-5.webp'
import testi6 from '../assets/images/test-3.jpg'

import testi12 from '../assets/images/testi-6.jpg'
/**
 * Per-testimonial backdrop photo (the space we cleaned for that client) and
 * the matching service, aligned by index with translations.testimonials.items.
 * All images verified Unsplash shots already used elsewhere on the site.
 */
const META = [
  {
    // Hanna — regular home cleaning, bright living room
    image: testi2,
    serviceKey: 'home',
  },
  {
    // Dawit — office cleaned after hours
    image: testi1,
    serviceKey: 'office',
  },
  {
    // Selamawit — post-renovation, move-in ready home
    image: testi4,
    serviceKey: 'construction',
  },
  {
    // Yonas — sofas revived
    image: testi5,
    serviceKey: 'carpet',
  },
  {
    // Meron — restaurant kitchen deep clean
    image: testi12,
    serviceKey: 'deep',
  },
]

function Stars() {
  return (
    <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" aria-hidden="true" />
      ))}
    </div>
  )
}

function TestimonialCard({ item, meta, serviceLabel }) {
  return (
    <figure className="relative flex h-[26rem] w-80 shrink-0 flex-col overflow-hidden rounded-2xl shadow-lift sm:w-96">
      {/* The client's cleaned space as the card backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${meta.image})` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-teal-950/95 via-teal-900/80 via-45% to-teal-900/25"
      />

      <div className="relative flex h-full flex-col p-7">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
          {serviceLabel}
        </span>

        <div className="mt-auto">
          <Stars />
          <blockquote className="mt-3 leading-relaxed text-white/95">“{item.quote}”</blockquote>
          <figcaption className="mt-5 border-t border-white/20 pt-4">
            <div className="font-heading font-bold text-white">{item.name}</div>
            <div className="text-sm text-teal-100/70">{item.role}</div>
          </figcaption>
        </div>
      </div>
    </figure>
  )
}

const CARD_GAP = 24 // matches the gap-6 between cards

export default function Testimonials() {
  const { t } = useTranslation()
  const items = t('testimonials.items')

  const trackRef = useRef(null)
  // manual: once a button is pressed, the auto-marquee stops for good
  const [manual, setManual] = useState(false)
  const stateRef = useRef({ manual: false, offset: 0, half: 0 })

  /** Slide one card forward (dir=1, rightward content moving left) or back (dir=-1). */
  const nav = (dir) => {
    const el = trackRef.current
    if (!el) return
    const s = stateRef.current

    // First press: freeze the CSS marquee exactly where it is and take over.
    if (!s.manual) {
      const x = new DOMMatrix(getComputedStyle(el).transform).m41
      s.half = el.scrollWidth / 2
      s.offset = x
      s.manual = true
      el.style.animation = 'none'
      el.style.transform = `translateX(${x}px)`
      setManual(true)
    }

    const firstCard = el.querySelector('figure')
    if (!firstCard) return
    const step = firstCard.getBoundingClientRect().width + CARD_GAP

    // Normalize into (-half, 0] — the two rows are identical, so shifting by
    // one row width is invisible. Done without transition, then animate the step.
    let cur = s.offset
    while (cur <= -s.half) cur += s.half
    while (cur > 0) cur -= s.half
    let target = cur - dir * step
    if (target > 0) {
      cur -= s.half
      target = cur - dir * step
    }
    el.style.transition = 'none'
    el.style.transform = `translateX(${cur}px)`
    void el.offsetWidth // force reflow so the jump isn't animated
    el.style.transition = 'transform 600ms cubic-bezier(0.32, 0.72, 0.35, 1)'
    el.style.transform = `translateX(${target}px)`
    s.offset = target
  }

  const renderRow = (hidden) => (
    <div className="flex shrink-0 gap-6 pr-6" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <TestimonialCard
          key={item.name}
          item={item}
          meta={META[i % META.length]}
          serviceLabel={t(`services.${META[i % META.length].serviceKey}.title`)}
        />
      ))}
    </div>
  )

  return (
    <section id="testimonials" className="scroll-mt-20 overflow-hidden bg-mint py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-subtitle">{t('testimonials.subtitle')}</p>
        </div>
      </div>

      {/* Slow, seamless right-to-left marquee. Two identical rows are rendered and the
          track shifts by exactly half its width, so the loop never jumps.
          Pauses on hover; once an arrow button is pressed it becomes button-only. */}
      <div className="mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div
          ref={trackRef}
          className={`flex w-max ${manual ? '' : 'animate-marquee hover:[animation-play-state:paused]'}`}
        >
          {renderRow(false)}
          {renderRow(true)}
        </div>
      </div>

      {/* Manual navigation — first press stops the auto-scroll */}
      <div className="mt-10 flex justify-center gap-4">
        <button
          type="button"
          onClick={() => nav(-1)}
          aria-label={t('testimonials.prev')}
          className="rounded-full border border-teal-200 bg-white p-3 text-teal-700 shadow-soft transition hover:bg-teal-700 hover:text-white hover:-translate-y-0.5"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => nav(1)}
          aria-label={t('testimonials.next')}
          className="rounded-full border border-teal-200 bg-white p-3 text-teal-700 shadow-soft transition hover:bg-teal-700 hover:text-white hover:-translate-y-0.5"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}

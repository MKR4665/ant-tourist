import React, { useState, useEffect, useRef } from 'react'
import { FaStar } from 'react-icons/fa'

const STATS = [
  { target: 5000, suffix: '+', label: 'Happy Customers' },
  { target: 1200, suffix: '+', label: 'Trips Completed' },
  { target: 4.8,  suffix: '/5', label: 'Average Rating', isFloat: true },
  { target: 100,  suffix: '+', label: 'Premium Vehicles' },
]

function useCountUp(target, isFloat, duration = 1800, started) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      const value = isFloat ? +(eased * target).toFixed(1) : Math.floor(eased * target)
      setCount(value)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, isFloat, duration])
  return count
}

function StatItem({ stat, started }) {
  const count = useCountUp(stat.target, stat.isFloat, 1800, started)
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 800,
        fontSize: '28px',
        color: '#a3c455',
        margin: 0,
      }}>
        {stat.isFloat ? count.toFixed(1) : count.toLocaleString()}{stat.suffix}
      </p>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: '12px',
        color: '#9ca0a8',
        marginTop: '4px',
        marginBottom: 0,
      }}>
        {stat.label}
      </p>
    </div>
  )
}

const REVIEWS = [
  {
    name: 'Rajesh Kumar',
    verified: 'Verified on Google',
    initials: 'RK',
    color: '#789736',
    rating: 5,
    text: 'The easiest booking experience I\'ve ever had. The sleeper bus from Delhi was super clean and arrived on time!',
  },
  {
    name: 'Priya Sharma',
    verified: 'Verified on Google',
    initials: 'PS',
    color: '#4a54e8',
    rating: 5,
    text: 'We hired a tempo traveller for a family trip to Manali. The vehicle was excellent, AC was working perfectly. Will definitely use again.',
  },
  {
    name: 'Amit Singh',
    verified: 'Verified on Google',
    initials: 'AS',
    color: '#e8804a',
    rating: 5,
    text: 'Best bus rental in Delhi NCR. Got the best price, no hidden charges, and 24/7 support. Our wedding trip was smooth!',
  },
]

export default function HomeTravelerStoriesSection() {
  const statsRef = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="traveler-stories"
      style={{
        background: '#ececec',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '64px 0px',
      }}
    >
      {/* ── HEADING BLOCK — 1280px max, centered ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px 16px',
          gap: '64px',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        {/* Frame 16 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '8px',
            width: '100%',
          }}
        >
          {/* Heading 2 — center aligned */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              width: '100%',
            }}
          >
            <h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 900,
                fontSize: '30px',
                lineHeight: '36px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: '#4D4D4D',
                margin: 0,
              }}
            >
              What Our Travellers Say
            </h2>
          </div>

          {/* Subtitle — center aligned */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px',
              width: '100%',
            }}
          >
            <p
              style={{
                width: '408px',
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: '#4D4D4D',
                margin: 0,
              }}
            >
              Every trip has a story, read them here.
            </p>
          </div>
        </div>
      </div>

      {/* ── CARDS ROW — 1217.98px, left: 33px, gap: 17px ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0px',
          gap: '17px',
          width: '100%',
          maxWidth: '1248px',
          margin: '48px auto 0',
          boxSizing: 'border-box',
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
      >
        {REVIEWS.map((r, idx) => (
          <div
            key={r.name}
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '32px',
              gap: '16px',
              flex: '1 1 0',
              minWidth: '0',
              minHeight: '245px',
              background: '#FFFFFF',
              border: '1px solid #F1F5F9',
              borderRadius: '24px',
            }}
          >
            {/* ── Stars row ── */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0px',
                gap: '3px',
                width: '132px',
                height: '24px',
              }}
            >
              {Array.from({ length: r.rating }).map((_, i) => (
                <FaStar key={i} style={{ width: '24px', height: '24px', color: '#FF8000' }} />
              ))}
            </div>

            {/* ── Review text ── */}
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                color: '#475569',
                margin: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              "{r.text}"
            </p>

            {/* ── Author row ── */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '8px 0px 0px',
                gap: '16px',
                alignSelf: 'stretch',
                height: '48px',
              }}
            >
              {/* Avatar circle */}
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  background: r.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '13px',
                  color: '#FFFFFF',
                  flexShrink: 0,
                }}
              >
                {r.initials}
              </div>

              {/* Name + Verified */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#0F172A',
                  }}
                >
                  {r.name}
                </span>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: '#4D4D4D',
                  }}
                >
                  {r.verified}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Stats bar — animated counter ── */}
      <div
        ref={statsRef}
        style={{
          width: '100%',
          maxWidth: '1248px',
          margin: '32px auto 0',
          padding: '0 16px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            borderRadius: '20px',
            background: '#1a1c22',
            padding: '24px',
          }}
        >
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} started={started} />
          ))}
        </div>
      </div>
    </section>
  )
}

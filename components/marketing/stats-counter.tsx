'use client'

import React, { useEffect, useRef, useState } from 'react'

interface StatItem {
  value: number
  suffix: string
  label: string
}

const STATS: StatItem[] = [
  { value: 50000, suffix: '+', label: 'Documents Protected' },
  { value: 250000, suffix: '+', label: 'Distributions Tracked' },
  { value: 1200, suffix: '+', label: 'Leaks Detected' },
  { value: 99.9, suffix: '%', label: 'Uptime' },
]

function formatNumber(n: number): string {
  if (n >= 1000 && n % 1 === 0) {
    return n.toLocaleString()
  }
  if (n % 1 !== 0) {
    return n.toFixed(1)
  }
  return n.toString()
}

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const startTime = performance.now()

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(target * eased)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(target)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
      {formatNumber(count)}{suffix}
    </span>
  )
}

export function StatsCounter() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((stat, idx) => (
          <div key={idx} className="text-center">
            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm text-gray-400 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

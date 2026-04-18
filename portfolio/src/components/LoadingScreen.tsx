import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

const WORDS = ['Design', 'Create', 'Inspire']
const DURATION_MS = 2700

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const onCompleteRef = useRef(onComplete)

  // Keep ref updated to avoid stale closures
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  // Word cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => {
        if (prev < WORDS.length - 1) return prev + 1
        return prev
      })
    }, 900)
    return () => clearInterval(interval)
  }, [])

  // Counter and progress calculation
  useEffect(() => {
    let startTime: number | null = null
    let animationFrameId: number

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      const currentProgress = Math.min((elapsed / DURATION_MS) * 100, 100)
      setProgress(currentProgress)

      if (currentProgress < 100) {
        animationFrameId = requestAnimationFrame(updateCounter)
      } else {
        setTimeout(() => {
          onCompleteRef.current()
        }, 400)
      }
    }

    animationFrameId = requestAnimationFrame(updateCounter)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
    >
      {/* ── Element 1: "Portfolio" Label ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute top-8 left-8 md:top-12 md:left-12 text-xs md:text-sm text-[#888888] uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      {/* ── Element 2: Rotating Words ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-instrument italic text-[#f5f5f5]/80"
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ── Element 3: Counter ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-6xl md:text-8xl lg:text-9xl font-instrument text-[#f5f5f5] tabular-nums"
      >
        {Math.round(progress).toString().padStart(3, '0')}
      </motion.div>

      {/* ── Element 4: Progress Bar ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1f1f1f]/50">
        <motion.div
          className="h-full origin-left"
          style={{
            background: 'linear-gradient(90deg, #ff5a1f 0%, #cc400c 100%)',
            boxShadow: '0 0 12px rgba(255, 90, 31, 0.5)'
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.1, ease: 'linear' }}
        />
      </div>
    </motion.div>
  )
}

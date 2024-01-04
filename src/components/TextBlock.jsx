import '@fontsource-variable/figtree'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export default function TextBlock ({ sentences }) {
  const [pos, setPos] = useState(0)
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [pos])

  const container = useRef(null)

  const { contextSafe } = useGSAP({ scope: container })

  const handleNext = contextSafe(() => {
    if (gsap.isTweening('.good')) {
      gsap.killTweensOf('.good')
    }
    if (pos < sentences.length) { setPos(pos + 1) }
    gsap.set('.good', {
      opacity: 0,
      y: '+2rem'
    })
    gsap.to('.good', {
      opacity: 1,
      duration: 0.4,
      ease: 'power1.inOut',
      y: 0
    })
  })

  const handlePrevious = () => {
    if (pos > 0) { setPos(pos - 1) }
  }
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      handleNext()
    } else if (e.key === 'ArrowLeft') {
      handlePrevious()
    }
  }
  return (
    <div ref={container} className='w-[80em]'>
      <p className='text-[2.5rem] dark:text-opacity-80 dark:text-white font-[300] font-ft good'>{sentences[pos]}</p>
    </div>
  )
}

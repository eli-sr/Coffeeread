import '@fontsource-variable/figtree'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export default function TextBlock ({ sentences }) {
  const [pos, setPos] = useState(0)
  const onNext = () => {
    if (pos >= sentences.length) return false
    setPos(pos + 1)
    return true
  }

  const onPrevious = () => {
    if (pos <= 0) return false
    setPos(pos - 1)
    return true
  }
  return (
    <div className='w-[80em]'>
      <Text sentence={sentences[pos]} onNext={onNext} onPrevious={onPrevious} />
    </div>
  )
}

function Text ({ sentence, onNext, onPrevious }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [sentence])

  useEffect(() => {
    animate('+2rem')
  }, [])

  const scope = useRef(null)
  const { contextSafe } = useGSAP({ scope })

  const nextKeys = ['ArrowRight', ' ', 'ArrowDown']
  console.log('nextkeys', nextKeys)
  const previousKeys = ['ArrowLeft', 'ArrowUp']

  const animate = contextSafe((yPos) => {
    gsap.set(scope.current, { opacity: 0, y: yPos })
    gsap.to(scope.current, {
      opacity: 1,
      duration: 0.4,
      ease: 'power1.inOut',
      y: 0
    })
  })

  const restartAnimation = contextSafe(() => {
    if (gsap.isTweening(scope.current)) { gsap.killTweensOf(scope.current) }
  })

  const handleKeyDown = (e) => {
    if (nextKeys.includes(e.key)) {
      if (onNext()) {
        restartAnimation()
        animate('+2rem')
      }
    } else if (previousKeys.includes(e.key)) {
      if (onPrevious()) {
        restartAnimation()
        animate('-2rem')
      }
    }
  }

  return (
    <p ref={scope} className='text-[2.5rem] dark:text-opacity-80 dark:text-white font-[300] font-ft good'>{sentence}</p>
  )
}

import '@fontsource-variable/figtree'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const nextKeys = ['ArrowRight', ' ', 'ArrowDown']
const previousKeys = ['ArrowLeft', 'ArrowUp']

export default function TextBlock ({ sentences }) {
  const [pos, setPos] = useState(0)
  const [isNext, setIsNext] = useState(true)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [pos])

  const handleKeyDown = (e) => {
    if (nextKeys.includes(e.key) && pos < sentences.length) {
      setPos(pos + 1)
      setIsNext(true)
    } else if (previousKeys.includes(e.key) && pos > 0) {
      setPos(pos - 1)
      setIsNext(false)
    }
  }

  return (
    <div className='w-[80em]'>
      <Text sentence={sentences[pos]} isNext={isNext} />
    </div>
  )
}

function Text ({ sentence, isNext }) {
  useEffect(() => {
    isNext ? animate('+2rem') : animate('-2rem')
  }, [sentence])

  const scope = useRef(null)
  const { contextSafe } = useGSAP({ scope })

  const animate = contextSafe((yPos) => {
    if (gsap.isTweening(scope.current)) { gsap.killTweensOf(scope.current) }
    gsap.set(scope.current, { opacity: 0, y: yPos })
    gsap.to(scope.current, {
      opacity: 1,
      duration: 0.4,
      ease: 'power1.inOut',
      y: 0
    })
  })

  return (
    <p ref={scope} className='text-[2.5rem] dark:text-opacity-80 dark:text-white font-[300] font-ft'>
      {sentence}
    </p>
  )
}

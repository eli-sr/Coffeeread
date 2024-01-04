import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Text ({ sentence, isNext }) {
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

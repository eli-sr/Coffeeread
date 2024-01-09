import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { IonIcon } from '@ionic/react'
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons'

export default function SearchBar () {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const scope = useRef(null)
  useGSAP(() => {
    gsap.set(scope.current, { opacity: 0, y: '-10px' })
    gsap.to(scope.current, {
      opacity: 1,
      duration: 0.3,
      ease: 'power1.inOut',
      y: 0
    })
  }, { scope })

  return (
    <div className='flex flex-row items-center' ref={scope}>
      <div className='p-3 border rounded-xl dark:border-white dark:border-opacity-45'>
        <form onSubmit={handleSubmit}>
          <input type='text' className='text-lg bg-transparent outline-none w-72 dark:opacity-80' placeholder='Buscar en texto...' />
        </form>
      </div>
      <div className='flex flex-row ml-2 space-x-1'>
        <IonIcon icon={chevronDownOutline} className='text-2xl transition-opacity duration-300 dark:opacity-45 dark:hover:opacity-100' />
        <IonIcon icon={chevronUpOutline} className='text-2xl transition-opacity duration-300 dark:opacity-45 dark:hover:opacity-100' />
      </div>
    </div>
  )
}

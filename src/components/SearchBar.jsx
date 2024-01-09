import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { IonIcon } from '@ionic/react'
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons'
import search from '../utils/search'
import { useReadStore } from '../store/store'

export default function SearchBar () {
  const [hits, setHits] = useState([])
  const [hitPos, setHitPos] = useState(0)
  const { sentences, setPos } = useReadStore()
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

  useEffect(() => {
    if (hits.length === 0) return
    setPos(hits[hitPos])
  }, [hitPos])

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const query = form.get('query')
    const newHits = search(sentences, query)
    if (newHits.length === 0) return
    setHits(newHits)
    setHitPos(0)
    setPos(newHits[0])
  }
  const handleNextHit = () => {
    if (hitPos >= hits.length - 1) {
      setHitPos(0)
      return
    }
    setHitPos(hitPos + 1)
  }

  const handlePreviousHit = () => {
    if (hitPos < 1) {
      setHitPos(hits.length - 1)
      return
    }
    setHitPos(hitPos - 1)
  }

  return (
    <div className='relative flex flex-row items-center' ref={scope}>
      <div className='p-3 border rounded-xl dark:border-white dark:border-opacity-45'>
        <form onSubmit={handleSubmit}>
          <input type='text' name='query' className='text-lg bg-transparent outline-none w-72 dark:opacity-80' placeholder='Buscar en texto...' />
        </form>
      </div>
      <div className='flex flex-row ml-2 space-x-1'>
        <button onClick={handleNextHit}>
          <IonIcon icon={chevronDownOutline} className='text-2xl transition-opacity duration-300 dark:opacity-45 dark:hover:opacity-100' />
        </button>
        <button onClick={handlePreviousHit}>
          <IonIcon icon={chevronUpOutline} className='text-2xl transition-opacity duration-300 dark:opacity-45 dark:hover:opacity-100' />
        </button>
      </div>
      {hits.length !== 0
        ? <span className='fixed -right-8 opacity-45'>{hitPos + 1}/{hits.length}</span>
        : null}
    </div>
  )
}

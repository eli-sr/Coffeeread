import { useEffect, useState } from 'react'
import { IonIcon } from '@ionic/react'
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons'
import search from '../utils/search'
import { useInputStore, useReadStore } from '../store/store'
import { motion } from 'framer-motion'

export default function SearchBar () {
  const [hits, setHits] = useState([])
  const [hitPos, setHitPos] = useState(0)
  const { sentences, setPos } = useReadStore()
  const { setFocused, setNotFocused } = useInputStore()

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

  const handleFocus = () => setFocused()
  const handleBlur = () => setNotFocused()

  return (
    <motion.div
      className='relative flex flex-row items-center'
      initial={{ opacity: 0, y: '-10px' }}
      animate={{ opacity: 1, y: 1 }}
      exit={{ opacity: 0, y: '-10px' }}
      transition={{ duration: 0.3 }}
    >
      <div className='p-3 border rounded-xl dark:border-white dark:border-opacity-45'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='query'
            className='text-lg bg-transparent outline-none w-72 dark:opacity-80'
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder='Buscar en texto...'
          />
        </form>
      </div>
      <div className='flex flex-row ml-2 space-x-1'>
        <button onClick={handleNextHit} className='flex items-center'>
          <IonIcon icon={chevronDownOutline} className='text-2xl transition-opacity duration-300 dark:opacity-45 dark:hover:opacity-100' />
        </button>
        <button onClick={handlePreviousHit} className='flex items-center'>
          <IonIcon icon={chevronUpOutline} className='text-2xl transition-opacity duration-300 dark:opacity-45 dark:hover:opacity-100' />
        </button>
      </div>
      {hits.length !== 0
        ? <span className='fixed -right-8 opacity-45'>{hitPos + 1}/{hits.length}</span>
        : null}
    </motion.div>
  )
}

import { IonIcon } from '@ionic/react'
import { useReadStore } from '../store/store'
import SearchBar from './SearchBar'
import ThemeSwitch from './ThemeSwitch'
import FontSwitch from './FontSwitch'
import { documentOutline, searchOutline } from 'ionicons/icons'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Header () {
  const [showBar, setShowBar] = useState(false)
  const { setSentences, setPos } = useReadStore()
  const handleNewText = () => {
    setSentences([])
    setPos(0)
    localStorage.removeItem('sentences')
    localStorage.removeItem('pos')
  }
  const handleShowBar = () => setShowBar(!showBar)
  return (
    <motion.div
      className='fixed flex flex-col items-center w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <header>
        <ul className='flex flex-row items-center py-6 space-x-5'>
          <li>
            <button onClick={handleNewText} title='Nuevo texto'>
              <IonIcon icon={documentOutline} className='text-2xl transition duration-300 hover:opacity-100 dark:opacity-45 opacity-70' />
            </button>
          </li>
          <li>
            <button onClick={handleShowBar} title='Buscar en texto'>
              <IonIcon icon={searchOutline} className='text-2xl transition duration-300 hover:opacity-100 dark:opacity-45 opacity-70' />
            </button>
          </li>
          <li>
            <ThemeSwitch />
          </li>
          <li>
            <FontSwitch />
          </li>
        </ul>
      </header>
      <AnimatePresence>
        {showBar ? <SearchBar /> : null}
      </AnimatePresence>
    </motion.div>
  )
}

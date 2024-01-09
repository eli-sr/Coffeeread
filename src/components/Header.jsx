import { IonIcon } from '@ionic/react'
import { useReadStore } from '../store/store'
import SearchBar from './SearchBar'
import ThemeSwitch from './ThemeSwitch'
import { documentOutline, searchOutline } from 'ionicons/icons'
import { useState } from 'react'

export default function Header () {
  const [showBar, setShowBar] = useState(false)
  const { setSentences } = useReadStore()
  const handleNewText = () => setSentences([])
  const handleShowBar = () => setShowBar(!showBar)
  return (
    <div className='fixed flex flex-col items-center w-full'>
      <header>
        <ul className='flex flex-row items-center py-6 space-x-5'>
          <li>
            <button onClick={handleNewText} title='Nuevo texto'>
              <IonIcon icon={documentOutline} className='text-2xl transition duration-300 hover:opacity-100 opacity-45' />
            </button>
          </li>
          <li>
            <button onClick={handleShowBar} title='Buscar en texto'>
              <IonIcon icon={searchOutline} className='text-2xl transition duration-300 hover:opacity-100 opacity-45' />
            </button>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </header>
      {showBar ? <SearchBar /> : null}
    </div>
  )
}

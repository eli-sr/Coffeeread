import { IonIcon } from '@ionic/react'
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons'

export default function SearchBar () {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='flex flex-row items-center'>
      <div className='p-3 border rounded-xl dark:border-white dark:border-opacity-45'>
        <form onSubmit={handleSubmit}>
          <input type='text' className='text-lg bg-transparent outline-none w-72 dark:opacity-80' placeholder='Buscar en texto...' />
        </form>
      </div>
      <div className='flex flex-row ml-2 space-x-1'>
        <IonIcon icon={chevronDownOutline} className='text-2xl transition-opacity dark:opacity-80 dark:hover:opacity-100' />
        <IonIcon icon={chevronUpOutline} className='text-2xl transition-opacity dark:opacity-80 dark:hover:opacity-100' />
      </div>
    </div>
  )
}

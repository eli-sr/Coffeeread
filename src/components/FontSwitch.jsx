import { IonIcon } from '@ionic/react'
import { textOutline } from 'ionicons/icons'
import { useFontStore } from '../store/store'

export default function FontSwitch () {
  const { toogleFont } = useFontStore()
  const handleClick = () => toogleFont()

  return (
    <button onClick={handleClick} title='Cambiar fuente para dislexia'>
      <IonIcon icon={textOutline} className='text-2xl transition duration-300 hover:opacity-100 dark:opacity-45 opacity-70' />
    </button>
  )
}

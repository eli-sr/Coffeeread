import { IonIcon } from '@ionic/react'
import { moonOutline, sunnyOutline } from 'ionicons/icons'
import { useThemeStore } from '../store/store'

export default function ThemeSwitch () {
  const { toogleTheme, darkTheme } = useThemeStore()
  const handleClick = () => toogleTheme()
  return (
    <button onClick={handleClick} title='Cambiar tema'>
      <IonIcon icon={darkTheme ? sunnyOutline : moonOutline} className='text-2xl transition duration-300 hover:opacity-100 opacity-45' />
    </button>
  )
}

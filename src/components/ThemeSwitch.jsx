import { IonIcon } from '@ionic/react'
import { moonOutline, sunnyOutline } from 'ionicons/icons'
import { useThemeStore } from '../store/store'

export default function ThemeSwitch () {
  const { toogleTheme, darkTheme } = useThemeStore()
  const handleClick = () => toogleTheme()
  return (
    <button onClick={handleClick}>
      <IonIcon icon={darkTheme ? sunnyOutline : moonOutline} className='text-2xl' />
    </button>
  )
}

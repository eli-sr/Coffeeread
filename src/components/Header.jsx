import { useReadStore } from '../store/store'
import SearchBar from './SearchBar'
import ThemeSwitch from './ThemeSwitch'

export default function Header () {
  const { setSentences } = useReadStore()
  const handleNewText = () => {
    setSentences([])
  }
  return (
    <header className='fixed top-0 flex justify-center w-full'>
      <ul className='flex flex-row items-center space-x-5'>
        <li>
          <button onClick={handleNewText} className='p-2 text-black bg-white rounded'>Nuevo texto</button>
        </li>
        <li>
          <SearchBar />
        </li>
        <li>
          <ThemeSwitch />
        </li>
      </ul>

    </header>
  )
}

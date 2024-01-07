import { useReadStore } from '../store/store'
import SearchBar from './SearchBar'

export default function Header () {
  const { setSentences } = useReadStore()
  const handleNewText = () => {
    setSentences([])
  }
  return (
    <header className='fixed top-0 flex justify-center w-full'>
      <ul>
        <li>
          <button onClick={handleNewText} className='p-2 text-black bg-white rounded'>Nuevo texto</button>
        </li>
        <li>
          <SearchBar />
        </li>
      </ul>

    </header>
  )
}

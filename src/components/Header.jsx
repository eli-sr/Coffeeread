import { useTextStore } from '../store/store'
import SearchBar from './SearchBar'

export default function Header () {
  const { setText } = useTextStore()
  const handleNewText = () => {
    setText('')
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

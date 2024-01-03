import { useTextStore } from '../store/store'

export default function Header () {
  const { setText } = useTextStore()
  const handleNewText = () => {
    setText('')
  }
  return (
    <header className='fixed top-0 h-20'>
      <h1>read</h1>
      <button onClick={handleNewText} className='p-2 text-black bg-white rounded'>Nuevo texto</button>
    </header>
  )
}

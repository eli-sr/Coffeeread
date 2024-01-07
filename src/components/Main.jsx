import { useReadStore } from '../store/store'
import TextInput from './TextInput'
import Read from './Read'

export default function Main () {
  const { sentences } = useReadStore()

  return (
    <main className='flex items-center justify-center flex-1 w-full'>
      {sentences.length === 0
        ? <TextInput />
        : <Read />}
    </main>
  )
}

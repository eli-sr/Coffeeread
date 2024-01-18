import { useReadStore } from '../store/store'
import { AnimatePresence } from 'framer-motion'
import TextInput from './TextInput'
import Read from './Read'
import ReadInfo from './ReadInfo'

export default function Main () {
  const { sentences } = useReadStore()

  return (
    <main className='flex items-center justify-center flex-1 w-full overflow-hidden'>
      <AnimatePresence>
        {sentences.length === 0
          ? <TextInput />
          : <Read />}
      </AnimatePresence>
      <AnimatePresence>
        {sentences.length !== 0 && <ReadInfo />}
      </AnimatePresence>
    </main>
  )
}

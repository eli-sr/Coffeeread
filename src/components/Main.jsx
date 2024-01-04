import { useEffect, useState } from 'react'
import { useTextStore } from '../store/store'
import format from '../utils/format'
import TextInput from './TextInput'
import Read from './Read'

export default function Main () {
  const { text } = useTextStore()
  const [sentences, setSentences] = useState([])
  useEffect(() => {
    if (text !== '') { setSentences(format(text)) }
  }, [text])
  return (
    <main className='flex items-center justify-center flex-1 w-full'>
      {sentences.length !== 0 && text !== ''
        ? <Read sentences={sentences} />
        : <TextInput />}
    </main>
  )
}

import '@fontsource-variable/quicksand'
import { useState } from 'react'

export default function TextBlock ({ sentences }) {
  const [pos, setPos] = useState(0)
  const handleNext = () => {
    if (pos <= sentences.length) { setPos(pos + 1) }
  }
  return (
    <div className='w-[80em] font-qs font-[300]'>
      <p className='text-[2.5rem] dark:text-opacity-80 dark:text-white'>{sentences[pos]}</p>
      <button className='p-3 text-black bg-white rounded' onClick={handleNext}>next</button>
    </div>
  )
}

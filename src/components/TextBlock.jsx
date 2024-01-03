import '@fontsource-variable/quicksand'
import { useEffect, useState } from 'react'

export default function TextBlock ({ sentences }) {
  const [pos, setPos] = useState(0)
  const handleNext = () => {
    if (pos < sentences.length) { setPos(pos + 1) }
  }
  const handlePrevious = () => {
    if (pos > 0) { setPos(pos - 1) }
  }
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      handleNext()
    } else if (e.key === 'ArrowLeft') {
      handlePrevious()
    }
  }
  useEffect(() => {
    console.log('useeffect')
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [pos])
  return (
    <div className='w-[80em] font-qs font-[300]'>
      <p className='text-[2.5rem] dark:text-opacity-80 dark:text-white'>{sentences[pos]}</p>
      <button className='p-3 text-black bg-white rounded' onClick={handleNext}>next</button>
    </div>
  )
}

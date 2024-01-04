import '@fontsource-variable/figtree'
import { useEffect, useState } from 'react'

export default function TextBlock ({ sentences }) {
  const [pos, setPos] = useState(0)
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [pos])

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
  return (
    <div className='w-[80em]'>
      <p className='text-[2.5rem] dark:text-opacity-80 dark:text-white font-[300] font-ft'>{sentences[pos]}</p>
    </div>
  )
}

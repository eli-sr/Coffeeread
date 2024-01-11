import { motion } from 'framer-motion'
import { useReadStore } from '../store/store'
import format from '../utils/format'
import { setLocalPos, setLocalSentences } from '../utils/utils'

export default function TextInput () {
  const { setSentences } = useReadStore()

  const handlePaste = async (e) => {
    setTimeout(() => {
      const sentences = format(e.target.value)
      setSentences(sentences)
      e.target.value = ''
      setLocalSentences(sentences)
      setLocalPos(0)
    }, 1)
  }
  const handleBlur = (e) => {
    setTimeout(() => e.target.focus(), 1)
  }
  const handleInput = (e) => {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: '2rem' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <p className='text-[2.5rem] dark:text-opacity-80 dark:text-white font-[300]'>Presiona Ctrl+V</p>
      <textarea type='text' className='absolute top-0 left-0 w-screen h-screen opacity-0' onPaste={handlePaste} onBlur={handleBlur} onInput={handleInput} autoFocus />
    </motion.div>
  )
}

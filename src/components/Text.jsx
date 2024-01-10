import { motion } from 'framer-motion'

export default function Text ({ sentence, isNext }) {
  return (
    <motion.div
      className='w-[80em]'
      initial={{ opacity: 0, y: isNext ? '2rem' : '-2rem' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <p className='text-[2.5rem] dark:text-opacity-80 text-opacity-95 text-black dark:text-white font-[300]'>
        {sentence}
      </p>
    </motion.div>
  )
}

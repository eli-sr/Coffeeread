import { motion } from 'framer-motion'
import LineSetter from './LineSetter'
import PageSetter from './PageSetter'

export default function ReadInfo () {
  return (
    <motion.div
      className='fixed bottom-0 right-0 pb-1 pr-2'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ul className='flex space-x-4 dark:opacity-45 opacity-70'>
        <li>
          <LineSetter />
        </li>
        <li>
          <PageSetter />
        </li>
      </ul>
    </motion.div>
  )
}

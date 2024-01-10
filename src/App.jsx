import Header from './components/Header'
import Main from './components/Main'
import '@fontsource-variable/work-sans'
import { useReadStore, useThemeStore } from './store/store'
import { AnimatePresence } from 'framer-motion'

function App () {
  const { darkTheme } = useThemeStore()
  const { sentences } = useReadStore()

  return (
    <div className={`${darkTheme ? 'dark' : ''}`}>
      <div className='flex flex-col w-full h-screen bg-gray-200 dark:bg-dark dark:text-gray-200 font-ws'>
        <AnimatePresence>
          {sentences.length > 0 ? <Header /> : null}
        </AnimatePresence>
        <Main />
      </div>
    </div>
  )
}

export default App

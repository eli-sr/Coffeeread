import Header from './components/Header'
import Main from './components/Main'
import '@fontsource-variable/work-sans'
import { useReadStore, useThemeStore } from './store/store'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { getLocalPos, getLocalSentences } from './utils/utils'

function App () {
  const { darkTheme } = useThemeStore()
  const { sentences, setSentences, setPos } = useReadStore()

  useEffect(() => {
    const savedSentences = getLocalSentences()
    const savedPos = getLocalPos()
    if (!savedSentences) return
    setSentences(savedSentences)
    setPos(savedPos)
  }, [])

  return (
    <div className={`${darkTheme ? 'dark' : ''}`}>
      <div className='flex flex-col w-full h-screen transition-[background-color] duration-300 bg-gray-50 dark:bg-dark dark:text-gray-200 font-ws'>
        <AnimatePresence>
          {sentences.length > 0 ? <Header /> : null}
        </AnimatePresence>
        <Main />
      </div>
    </div>
  )
}

export default App

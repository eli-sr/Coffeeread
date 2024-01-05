import Header from './components/Header'
import Main from './components/Main'
import '@fontsource-variable/work-sans'

function App () {
  return (
    <div className='flex flex-col w-full h-screen dark:bg-dark dark:text-gray-200 font-ws'>
      <Header />
      <Main />
    </div>
  )
}

export default App

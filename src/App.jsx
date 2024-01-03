import Header from './components/Header'
import Main from './components/Main'

function App () {
  return (
    <div className='flex flex-col w-full h-screen dark:bg-dark dark:text-gray-200'>
      <Header />
      <Main />
    </div>
  )
}

export default App

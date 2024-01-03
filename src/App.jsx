import Main from './components/Main'

function App () {
  return (
    <div className='flex flex-col w-full h-screen dark:bg-dark dark:text-gray-200'>
      <header className='fixed top-0 h-20'>
        <h1>read</h1>
      </header>
      <Main />
    </div>
  )
}

export default App

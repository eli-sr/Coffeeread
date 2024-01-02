import TextBlock from './components/TextBlock'

function App () {
  return (
    <div className='flex flex-col w-full h-screen dark:bg-dark dark:text-gray-200'>
      <header>
        <h1>read</h1>
      </header>
      <main className='flex items-center justify-center flex-1 w-full'>
        <TextBlock />
      </main>
    </div>
  )
}

export default App

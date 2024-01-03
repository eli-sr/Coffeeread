import TextInput from './components/TextInput'
import TextBlock from './components/TextBlock'
import { useState } from 'react'

function App () {
  const [text, setText] = useState('')
  return (
    <div className='flex flex-col w-full h-screen dark:bg-dark dark:text-gray-200'>
      <header className='fixed top-0 h-20'>
        <h1>read</h1>
      </header>
      <main className='flex items-center justify-center flex-1 w-full'>
        {text === ''
          ? <TextInput setText={setText} />
          : <TextBlock />}
      </main>
    </div>
  )
}

export default App

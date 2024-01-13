import { useEffect, useState } from 'react'
import { useInputStore } from '../store/store'

export default function Setter ({ num, setNum, totalNum, name }) {
  const [currentNumber, setCurrentNumber] = useState(num)
  const { setFocused, setNotFocused } = useInputStore()

  useEffect(() => {
    if (num <= totalNum) {
      setCurrentNumber(num)
    }
  }, [num])

  const handleSubmit = (e) => {
    e.preventDefault()
    if ((currentNumber < 1 || currentNumber > totalNum)) {
      setCurrentNumber(num)
      return
    }
    setNum(currentNumber)
  }

  const handleChange = (e) => {
    const val = e.target.value
    if (!isNaN(val)) {
      setCurrentNumber(e.target.value)
    }
  }

  const handleFocus = () => setFocused()
  const handleBlur = () => setNotFocused()

  return (
    <div className='flex flex-row items-center'>
      <span>{name} </span>
      <div className='px-0.5 transition duration-300 border border-transparent rounded hover:border-white'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='bg-transparent outline-none max-w-[6ch] text-center'
            style={{ width: (currentNumber).toString().length + 'ch' }}
            value={currentNumber}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </form>
      </div>
      <span>/{totalNum}</span>
    </div>
  )
}

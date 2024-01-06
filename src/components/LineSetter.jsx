import { useEffect, useState } from 'react'

export default function LineSetter ({ pos, setPos, totalLines }) {
  const [line, setLine] = useState(pos + 1)

  useEffect(() => {
    if (pos + 1 <= totalLines) {
      setLine(pos + 1)
    }
  }, [pos])

  const handleSubmit = (e) => {
    e.preventDefault()
    if ((line < 1 || line > totalLines)) {
      setLine(pos + 1)
      return
    }
    setPos(line - 1)
  }

  const handleChange = (e) => {
    const val = e.target.value
    if (!isNaN(val)) {
      setLine(e.target.value)
    }
  }
  return (
    <div className='flex flex-row items-center'>
      <span>Ln: </span>
      <div className='px-0.5 transition duration-300 border border-transparent rounded hover:border-white'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='bg-transparent outline-none max-w-[6ch] text-center'
            style={{ width: (line).toString().length + 'ch' }}
            value={line}
            onChange={handleChange}
          />
        </form>
      </div>
      <span>/{totalLines}</span>
    </div>
  )
}

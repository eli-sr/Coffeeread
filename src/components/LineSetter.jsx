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
    <div className='flex flex-row'>
      <span>Ln: </span>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='ml-2 bg-transparent outline-none max-w-[6ch]'
          style={{ width: (line).toString().length + 'ch' }}
          value={line}
          onChange={handleChange}
        />
      </form>
      <span>/{totalLines}</span>
    </div>
  )
}

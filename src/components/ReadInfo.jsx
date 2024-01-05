import { useEffect, useState } from 'react'

const LinesPerPage = 35

export default function ReadInfo ({ pos, setPos, totalLines }) {
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
    <ul className='fixed bottom-0 right-0 flex flex-row pb-1 pr-2 space-x-2 opacity-45'>
      <li className='flex flex-row'>
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
      </li>
      <li>
        <span>Pg: {Math.ceil((pos + 1) / LinesPerPage)}/{Math.ceil(totalLines / LinesPerPage)}</span>
      </li>
    </ul>
  )
}

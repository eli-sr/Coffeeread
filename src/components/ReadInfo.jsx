import { useEffect, useRef, useState } from 'react'

const LinesPerPage = 35

export default function ReadInfo ({ pos, lines }) {
  const inputRef = useRef(null)

  useEffect(() => {
    if (pos + 1 <= lines) {
      inputRef.current.value = pos + 1
    }
  }, [pos])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <ul className='fixed bottom-0 right-0 flex flex-row pb-1 pr-2 space-x-2 opacity-45'>
      <li className='flex flex-row'>
        <span>Ln: </span>
        <form onSubmit={handleSubmit}>
          <input
            type='number'
            className='ml-2 bg-transparent outline-none'
            style={{ minWidth: (pos + 1).toString().length + 'ch' }}
            ref={inputRef}
          />
        </form>
        <span>/{lines}</span>
      </li>
      <li>
        <span>Pg: {Math.ceil((pos + 1) / LinesPerPage)}/{Math.ceil(lines / LinesPerPage)}</span>
      </li>
    </ul>
  )
}

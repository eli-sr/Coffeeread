import { useEffect, useState } from 'react'

export default function ReadInfo ({ pos, lines }) {
  const [currentLine, setCurrentLine] = useState(pos + 1)

  useEffect(() => {
    if (pos + 1 > lines) {
      setCurrentLine('End')
    } else {
      setCurrentLine(pos + 1)
    }
  }, [pos])

  return (
    <ul className='fixed bottom-0 right-0 flex flex-row pb-1 pr-2 space-x-2 opacity-45'>
      <li>
        <span>Ln: {currentLine}/{lines}</span>
      </li>
    </ul>
  )
}

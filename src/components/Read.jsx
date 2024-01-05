import { useEffect, useState } from 'react'
import Text from './Text'
import ReadInfo from './ReadInfo'

const nextKeys = ['ArrowRight', ' ', 'ArrowDown']
const previousKeys = ['ArrowLeft', 'ArrowUp']

export default function Read ({ sentences }) {
  const [pos, setPos] = useState(0)
  const [isNext, setIsNext] = useState(true)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [pos])

  const handleKeyDown = (e) => {
    if (nextKeys.includes(e.key) && pos < sentences.length) {
      setPos(pos + 1)
      setIsNext(true)
    } else if (previousKeys.includes(e.key) && pos > 0) {
      setPos(pos - 1)
      setIsNext(false)
    }
  }

  return (
    <>
      {pos < sentences.length
        ? (
          <>
            <Text sentence={sentences[pos]} isNext={isNext} />
            <ReadInfo pos={pos} setPos={setPos} totalLines={sentences.length} />
          </>
          )
        : <h1>Ctrl+V para pegar otro texto</h1>}
    </>
  )
}

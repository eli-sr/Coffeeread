import { useEffect, useState } from 'react'
import Text from './Text'
import ReadInfo from './ReadInfo'
import { useReadStore } from '../store/store'

const nextKeys = ['ArrowRight', ' ', 'ArrowDown']
const previousKeys = ['ArrowLeft', 'ArrowUp']

export default function Read () {
  const { pos, setPos, sentences } = useReadStore()
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
            <Text sentence={sentences[pos]} isNext={isNext} key={pos} />
            <ReadInfo />
          </>
          )
        : <h1>Ctrl+V para pegar otro texto</h1>}
    </>
  )
}

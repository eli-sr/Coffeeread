import { useEffect, useState } from 'react'
import Text from './Text'
import { useInputStore, useReadStore } from '../store/store'
import { setLocalPos } from '../utils/utils'

const nextKeys = ['ArrowRight', ' ', 'ArrowDown']
const previousKeys = ['ArrowLeft', 'ArrowUp']

export default function Read () {
  const [isNext, setIsNext] = useState(true)
  const { pos, setPos, sentences } = useReadStore()
  const { focused } = useInputStore()

  useEffect(() => {
    if (focused) return
    window.addEventListener('keydown', handleKeyDown)
    setLocalPos(pos)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [pos, focused])

  const handleKeyDown = (e) => {
    if (nextKeys.includes(e.key) && pos < sentences.length - 1) {
      setPos(pos + 1)
      setIsNext(true)
    } else if (previousKeys.includes(e.key) && pos > 0) {
      setPos(pos - 1)
      setIsNext(false)
    }
  }

  return (
    <Text sentence={sentences[pos]} isNext={isNext} key={pos} />
  )
}

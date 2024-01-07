import { useReadStore } from '../store/store'
import Setter from './Setter'

export default function LineSetter () {
  const { pos, setPos, sentences } = useReadStore()
  const setPosLine = (line) => setPos(line - 1)
  return (
    <Setter num={pos + 1} setNum={setPosLine} totalNum={sentences.length} />
  )
}

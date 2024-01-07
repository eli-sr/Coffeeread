import { page2Pos, pos2Page } from '../utils/utils'
import Setter from './Setter'
import { useReadStore } from '../store/store'

export default function PageSetter () {
  const { pos, setPos, sentences } = useReadStore()
  const setPosPage = (page) => setPos(page2Pos(page))
  return (
    <Setter num={pos2Page(pos)} setNum={setPosPage} totalNum={pos2Page(sentences.length)} />
  )
}

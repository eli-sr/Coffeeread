import Setter from './Setter'

export default function LineSetter ({ pos, setPos, totalLines }) {
  const setPosLine = (line) => setPos(line - 1)
  return (
    <Setter num={pos + 1} setNum={setPosLine} totalNum={totalLines} />
  )
}

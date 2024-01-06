import LineSetter from './LineSetter'

const LinesPerPage = 35

export default function ReadInfo ({ pos, setPos, totalLines }) {
  return (
    <ul className='fixed bottom-0 right-0 flex flex-row pb-1 pr-2 space-x-2 opacity-45'>
      <li>
        <LineSetter pos={pos} setPos={setPos} totalLines={totalLines} />
      </li>
      <li>
        <span>Pg: {Math.ceil((pos + 1) / LinesPerPage)}/{Math.ceil(totalLines / LinesPerPage)}</span>
      </li>
    </ul>
  )
}

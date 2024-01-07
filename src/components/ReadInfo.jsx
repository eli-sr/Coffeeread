import LineSetter from './LineSetter'
import PageSetter from './PageSetter'
import { line2Page } from '../utils/utils'

export default function ReadInfo ({ pos, setPos, totalLines }) {
  return (
    <ul className='fixed bottom-0 right-0 flex flex-row pb-1 pr-2 space-x-2 opacity-45'>
      <li>
        <LineSetter />
      </li>
      <li>
        <PageSetter pos={pos} setPos={setPos} totalPages={line2Page(totalLines)} />
      </li>
    </ul>
  )
}

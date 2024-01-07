import LineSetter from './LineSetter'
import PageSetter from './PageSetter'

export default function ReadInfo () {
  return (
    <ul className='fixed bottom-0 right-0 flex flex-row pb-1 pr-2 space-x-2 opacity-45'>
      <li>
        <LineSetter />
      </li>
      <li>
        <PageSetter />
      </li>
    </ul>
  )
}

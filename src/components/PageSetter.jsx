import { useEffect, useState } from 'react'
import { line2Page, page2Line } from '../utils/utils'

export default function PageSetter ({ pos, setPos, totalPages }) {
  const [page, setPage] = useState(line2Page(pos + 1))

  useEffect(() => {
    if (line2Page(pos + 1) <= totalPages) {
      setPage(line2Page(pos + 1))
    }
  }, [pos])

  const handleSubmit = (e) => {
    e.preventDefault()
    if ((page < 1 || page > totalPages)) {
      setPage(line2Page(pos + 1))
      return
    }
    setPos(page2Line(page) - 1)
  }

  const handleChange = (e) => {
    const val = e.target.value
    if (!isNaN(val)) {
      setPage(e.target.value)
    }
  }
  return (
    <div className='flex flex-row'>
      <span>Pg: </span>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='ml-2 bg-transparent outline-none max-w-[6ch]'
          style={{ width: (page).toString().length + 'ch' }}
          value={page}
          onChange={handleChange}
        />
      </form>
      <span>/{totalPages}</span>
    </div>
  )
}

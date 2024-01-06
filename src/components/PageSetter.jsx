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
    <div className='flex flex-row items-center'>
      <span>Pg: </span>
      <div className='px-0.5 transition duration-300 border border-transparent rounded hover:border-white'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='bg-transparent outline-none max-w-[6ch] text-center'
            style={{ width: (page).toString().length + 'ch' }}
            value={page}
            onChange={handleChange}
          />
        </form>
      </div>
      <span>/{totalPages}</span>
    </div>
  )
}

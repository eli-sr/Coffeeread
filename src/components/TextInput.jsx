export default function TextInput ({ setText }) {
  const handlePaste = async (e) => {
    setTimeout(() => {
      setText(e.target.value)
      e.target.value = ''
    }, 1)
  }
  const handleBlur = (e) => {
    setTimeout(() => e.target.focus(), 1)
  }
  return (
    <div>
      <p className='text-[2.5rem] dark:text-opacity-80 dark:text-white'>Presiona Ctrl+V</p>
      <input type='text' onPaste={handlePaste} className='absolute top-0 left-0 w-screen h-screen opacity-0' onBlur={handleBlur} autoFocus />
    </div>
  )
}

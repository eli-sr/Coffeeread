export default function TextBlock () {
  const text = 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.'
  return (
    <div className='w-[80em]'>
      <p className='text-[2.5rem] dark:text-opacity-80 dark:text-white'>{text}</p>
    </div>
  )
}

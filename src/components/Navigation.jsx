import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='flex justify-between items-center fixed top-0 left-0 right-0 bg-white border-b border-slate-300 px-16 py-2 text-sm text-neutral-950 font-medium'>
      <NavLink className='text-2xl' to='/'>Allder</NavLink>
      <div className='flex justify-center items-center'>
        <NavLink to='/login' className='pe-4'>Inicia sesión</NavLink>
        <NavLink to='/onboarding' className='p-3 bg-green-400 rounded-lg'>Comienza aquí</NavLink>
      </div>
    </div>
  )
}

export default Navigation

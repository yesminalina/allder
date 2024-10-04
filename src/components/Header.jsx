import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <section className='flex py-10 px-16'>
      <div className='flex flex-col justify-between w-1/2 pe-10'>
        <h1 className='text-7xl pe-10'>Texto para llamar atención</h1>
        <div>
          <p className='text-2xl mb-10'>Párrafo para explicar cómo esta aplicación ayuda a solucionar tus problemas</p>
          <NavLink to='/onboarding' className='p-3 bg-green-400 rounded-lg'>Comienza ahora</NavLink>
        </div>
      </div>
      <div className='w-1/2'>
        <img src='/hero_desktop.webp' alt='app' />
      </div>
    </section>
  )
}

export default Header

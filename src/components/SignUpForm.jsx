const SignUpForm = () => {
  return (
    <div className='w-1/2'>
      <div className='flex flex-col border mt-16 px-16 pt-6'>
        <h1 className='text-center mb-6 text-lg font-semibold'>Ingresa tus datos para crear una cuenta</h1>
        <input
          type='email'
          placeholder='Correo electrónico'
          className='mt-1 mb-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
        />
        <input
          type='password'
          placeholder='Contraseña'
          className='mt-1 mb-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
        />
        <input
          type='password'
          placeholder='Confirma tu contraseña'
          className='mt-1 mb-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
        />
        <article className='flex flex-row gap-3'>
          <input
            type='text'
            placeholder='Nombre'
            className='mt-1 mb-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
          />
          <input
            type='text'
            placeholder='Apellido'
            className='mt-1 mb-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
          />
        </article>
        <button className='p-3 mb-4 bg-green-400 rounded-lg'>Crea tu cuenta</button>
      </div>
      <div className='py-6 bg-slate-200 text-center'>
        <a className='text-blue-600'>¿Ya tienes una cuenta?</a>
      </div>
    </div>
  )
}

export default SignUpForm

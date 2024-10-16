import { useForm } from 'react-hook-form'

const SignUpForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className='w-1/2'>
      <form className='flex flex-col border mt-16 px-16 pt-6' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-center mb-6 text-lg font-semibold'>Ingresa tus datos para crear una cuenta</h1>
        <input
          {...register('email', {
            required: 'Email es requerido',
            pattern: {
              value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
              message: 'El email debe tener un formato válido'
            }
          })}
          type='email'
          placeholder='Correo electrónico'
          className='mt-1 mb-2 block w-full px-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
        />
        {errors.email && <div className='text-red-500 text-sm pb-2'>{errors.email.message}</div>}
        <input
          {...register('password', {
            required: 'Contraseña es requerida',
            minLength: {
              value: 8,
              message: 'La contraseña debe tener al menos 8 caracteres'
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
              message: 'La contraseña debe contener al menos una mayúscula, un número y un símbolo.'
            }
          })}
          type='password'
          placeholder='Contraseña'
          className='mt-1 mb-2 block w-full px-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
        />
        {errors.password && <div className='text-red-500 text-sm pb-2'>{errors.password.message}</div>}
        <input
          {...register('passwordConf', {
            required: 'Confirma la contraseña',
            validate: (value) => {
              if (value !== watch('password')) {
                return 'Las contraseñas deben coincidir'
              }
              return true
            }
          })}
          type='password'
          placeholder='Confirma tu contraseña'
          className='mt-1 mb-2 block w-full px-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
        />
        {errors.passwordConf && <div className='text-red-500 text-sm pb-2'>{errors.passwordConf.message}</div>}
        <article className='flex flex-row gap-4'>
          <div className='grow'>
            <input
              {...register('name', {
                required: 'Ingresa un nombre'
              })}
              type='text'
              placeholder='Nombre'
              className='mt-1 mb-2 block w-full px-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
            />
            {errors.name && <div className='text-red-500 text-sm pb-2'>{errors.name.message}</div>}
          </div>
          <div className='grow'>
            <input
              {...register('lastName', { required: 'Ingresa un apellido' })}
              type='text'
              placeholder='Apellido'
              className='mt-1 mb-2 block w-full px-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
            />
            {errors.lastName && <div className='text-red-500 text-sm pb-2'>{errors.lastName.message}</div>}
          </div>
        </article>
        <button className='p-3 mb-4 bg-green-400 rounded-lg' type='submit'>Crea tu cuenta</button>
      </form>
      <div className='py-6 bg-slate-200 text-center'>
        <a className='text-blue-600'>¿Ya tienes una cuenta?</a>
      </div>
    </section>
  )
}

export default SignUpForm

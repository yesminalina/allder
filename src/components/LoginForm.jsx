import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useCaregiverStore } from '../store'

// EJEMPLO DE VALIDACIÓN DE FORMULARIO CON ZOD
const schema = z.object({
  email: z.string().email('Introduce un correo válido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres')
})

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  // User Context
  const user = useCaregiverStore((state) => state.user)
  const updateUser = useCaregiverStore((state) => state.updateUser)
  console.log(user)
  console.log(updateUser)

  return (
    <form className='w-1/3' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col border mt-16 px-16 pt-6'>
        <h1 className='text-center mb-6 text-lg font-semibold'>Inicia Sesión en Allder</h1>
        <input
          {...register('email')}
          type='email'
          placeholder='Correo electrónico'
          className='mt-1 mb-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
        />
        {errors.email && <div className='text-red-500 text-sm pb-2'>{errors.email.message}</div>}
        <input
          {...register('password')}
          type='password'
          placeholder='Contraseña'
          className='mt-1 mb-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
        />
        {errors.password && <div className='text-red-500 text-sm pb-2'>{errors.password.message}</div>}
        <button className='p-3 mb-4 bg-green-400 rounded-lg' type='submit'>Inicia Sesión con tu email</button>
        <a className='mb-4 text-center text-blue-600'>¿Olvidaste tu contraseña?</a>
      </div>
      <div className='py-6 bg-slate-200 text-center'>
        <a className='text-blue-600'>¿No tienes una cuenta?</a>
      </div>
    </form>
  )
}

export default LoginForm

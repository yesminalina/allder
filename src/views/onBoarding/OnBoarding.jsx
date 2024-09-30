const OnBoarding = () => {
  return (
    <section className='flex flex-col mt-24 mb-12'>
      <h1 className='snap-start self-center md:sticky top-40 left-0 right-0 text-2xl font-bold mb-6'>Para ayudarte mejor, cuéntanos algo de ti...</h1>
      <div className='snap-y snap-mandatory w-2/3 md:fixed top-48 left-0 right-0 text-center md:h-4/6 md:overflow-y-scroll mx-auto'>
        <article id='rol' className='flex flex-col flex-shrink-0 snap-start justify-start my-6 h-svh text-xl'>
          <h2 className='text-xl font-semibold mb-12'>Selecciona tu género:</h2>
          <div className='flex justify-center'>
            <div className='flex flex-col mx-16 space-y-4 w-1/3'>
              <article className='flex'>
                <input type='radio' name='gender' value='female' id='female' className='peer/female border-gray-300 border-2 text-green-400 checked:border-gray-300 checked:ring-green-400' />
                <label htmlFor='female' className='flex items-center cursor-pointer ps-6 peer-checked/female:text-green-400'>Mujer</label>
              </article>
              <article className='flex'>
                <input type='radio' name='gender' value='male' id='male' className='peer/male border-gray-300 border-2 text-green-400 checked:border-gray-300 checked:ring-green-400' />
                <label htmlFor='male' className='flex items-center cursor-pointer ps-6 peer-checked/male:text-green-400'>Hombre</label>
              </article>
              <article className='flex'>
                <input type='radio' name='gender' value='other' id='other' className='peer/other border-gray-300 border-2 text-green-400 checked:border-gray-300 checked:ring-green-400' />
                <label htmlFor='other' className='flex items-center cursor-pointer ps-6 peer-checked/other:text-green-400'>Otro</label>
              </article>
              <a href='#gender' className='p-3 bg-green-400 rounded-lg'>Continuar</a>
            </div>
          </div>
        </article>
        <article id='gender' className='flex flex-col flex-shrink-0 snap-start justify-start my-6 h-svh text-xl'>
          <h2 className='text-xl font-semibold mb-12'>Actualmente te consideras:</h2>
          <div className='flex justify-center'>
            <div className='flex flex-col mx-16 space-y-4 w-1/3'>
              <article className='flex'>
                <input type='radio' name='role' value='mainCg' id='mainCg' className='peer/mainCg border-gray-300 border-2 text-green-400 checked:border-gray-300 checked:ring-green-400' />
                <label htmlFor='mainCg' className='flex items-center cursor-pointer ps-6 peer-checked/mainCg:text-green-400'>Cuidador Principal</label>
              </article>
              <article className='flex'>
                <input type='radio' name='role' value='secondCg' id='secondCg' className='peer/secondCg border-gray-300 border-2 text-green-400 checked:border-gray-300 checked:ring-green-400' />
                <label htmlFor='secondCg' className='flex items-center cursor-pointer ps-6 peer-checked/secondCg:text-green-400'>Cuidador Secundario</label>
              </article>
              <article className='flex'>
                <input type='radio' name='role' value='suppCg' id='suppCg' className='peer/suppCg border-gray-300 border-2 text-green-400 checked:border-gray-300 checked:ring-green-400' />
                <label htmlFor='suppCg' className='flex items-center cursor-pointer ps-6 peer-checked/suppCg:text-green-400'>Apoyo del cuidador</label>
              </article>
              <a href='#age' className='p-3 bg-green-400 rounded-lg'>Continuar</a>
            </div>
          </div>
        </article>
        <article id='age' className='flex flex-col flex-shrink-0 snap-start justify-start my-6 h-svh text-xl'>
          <h2 className='text-xl font-semibold mb-12'>Tienes entre:</h2>
          <div className='flex justify-center'>
            <div className='flex flex-col mx-16 space-y-4 w-1/3'>
              <article className='flex'>
                <input type='radio' name='age' value='young' id='young' className='peer/young border-gray-300 border-2 text-green-400 checked:border-gray-300 checked:ring-green-400' />
                <label htmlFor='young' className='flex items-center cursor-pointer ps-6 peer-checked/young:text-green-400'> 18 y 25 años</label>
              </article>
              <article className='flex'>
                <input type='radio' name='age' value='young-adult' id='young-adult' className='peer/young-adult border-gray-300 border-2 text-green-400 checked:border-gray-300 checked:ring-green-400' />
                <label htmlFor='young-adult' className='flex items-center cursor-pointer ps-6 peer-checked/young-adult:text-green-400'>25 y 39 años</label>
              </article>
              <article className='flex'>
                <input type='radio' name='age' value='adult' id='adult' className='peer/adult border-gray-300 border-2 text-green-400 checked:border-gray-300 checked:ring-green-400' />
                <label htmlFor='adult' className='flex items-center cursor-pointer ps-6 peer-checked/adult:text-green-400'>40 y 60 años</label>
              </article>
              <article className='flex'>
                <input type='radio' name='age' value='elder' id='elder' className='peer/elder border-gray-300 border-2 text-green-400 checked:border-gray-300 checked:ring-green-400' />
                <label htmlFor='elder' className='flex items-center cursor-pointer ps-6 peer-checked/elder:text-green-400'>Más de 60 años</label>
              </article>
              <a href='#relate' className='p-3 bg-green-400 rounded-lg'>Continuar</a>
            </div>
          </div>
        </article>
        <article id='relate' className='flex flex-col flex-shrink-0 snap-start justify-start my-6 h-svh text-xl'>
          <h2 className='text-xl font-semibold mb-12'>De la persona a tu cuidado eres:</h2>
          <div className='flex justify-center'>
            <div className='flex flex-col mx-16 space-y-4 w-1/3'>
              <article className='flex'>
                <input type='radio' name='relate' value='daughter' id='daughter' className='peer/daughter border-gray-300 border-2 text-green-400 checked:border-gray-300 checked:ring-green-400' />
                <label htmlFor='daughter' className='flex items-center cursor-pointer ps-6 peer-checked/daughter:text-green-400'>Hija/o</label>
              </article>
              <article className='flex'>
                <input type='radio' name='relate' value='grand' id='grand' className='peer/grand border-gray-300 border-2 text-green-400 checked:border-gray-300 checked:ring-green-400' />
                <label htmlFor='grand' className='flex items-center cursor-pointer ps-6 peer-checked/grand:text-green-400'>Nieta/o</label>
              </article>
              <article className='flex'>
                <input type='radio' name='relate' value='profCg' id='profCg' className='peer/profCg border-gray-300 border-2 text-green-400 checked:border-gray-300 checked:ring-green-400' />
                <label htmlFor='profCg' className='flex items-center cursor-pointer ps-6 peer-checked/profCg:text-green-400'>Cuidador profesional</label>
              </article>
              <article className='flex'>
                <input type='radio' name='relate' value='otherRelate' id='otherRelate' className='peer/otherRelate border-gray-300 border-2 text-green-400 checked:border-gray-300 checked:ring-green-400' />
                <label htmlFor='otherRelate' className='flex items-center cursor-pointer ps-6 peer-checked/otherRelate:text-green-400'>Otro</label>
              </article>
              <a href='#relate' className='p-3 bg-green-400 rounded-lg'>Continuar</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default OnBoarding

import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import Header from '../../components/Header'

const Home = () => {
  const { isAuth } = useContext(UserContext)

  return (
    <main className='mt-24'>
      <Header />
    </main>
  )
}

export default Home

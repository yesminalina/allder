import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, OnBoarding, Login, Profile, Group, TaskDetail, NotFound } from './views/indexViews'
import Navigation from './components/Navigation'
import UserContextProvider from './context/UserContext'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/onboarding' element={<OnBoarding />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/group' element={<Group />} />
            <Route path='/taskDetail' element={<TaskDetail />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App

import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const globalState = { isAuth }

  return (
    <UserContext.Provider value={globalState}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider

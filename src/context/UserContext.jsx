import { createContext } from 'react'
import useCaregiver from '../hooks/useCaregiver'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const globalState = useCaregiver()

  return (
    <UserContext.Provider value={globalState}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider

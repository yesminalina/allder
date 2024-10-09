import { useState } from 'react'

const useCaregiver = () => {
  const [user, setUser] = useState(null)

  const setCaregiver = (caregiver) => setUser(caregiver)

  return { getCaregiver: user, setCaregiver }
}

export default useCaregiver

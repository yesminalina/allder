import { create } from 'zustand'

export const useCaregiverStore = create((set) => ({
  user: {
    userId: '',
    userName: '',
    email: ''
  },
  updateUser: (newUser) => set({ user: newUser })
}))

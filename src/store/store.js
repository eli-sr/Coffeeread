import { create } from 'zustand'

export const useTextStore = create((set) => ({
  text: '',
  setText: (text) => set(() => ({ text }))
}))

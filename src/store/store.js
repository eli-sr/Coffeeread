import { create } from 'zustand'

export const useReadStore = create((set) => ({
  sentences: [],
  pos: 0,
  setSentences: (sentences) => set(() => ({ sentences })),
  setPos: (pos) => set(() => ({ pos }))
}))

export const useThemeStore = create((set) => ({
  darkTheme: true,
  toogleTheme: () => set((state) => ({ darkTheme: !state.darkTheme }))
}))

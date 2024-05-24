import { create } from 'zustand'

export const useReadStore = create((set) => ({
  sentences: [],
  pos: 0,
  setSentences: (sentences) => set(() => ({ sentences })),
  setPos: (pos) => set(() => ({ pos }))
}))

export const useThemeStore = create((set) => ({
  darkTheme: localStorage.getItem('theme') === 'dark',
  toogleTheme: () => set((state) => ({ darkTheme: !state.darkTheme }))

}))

export const useInputStore = create((set) => ({
  focused: false,
  setFocused: () => set(() => ({ focused: true })),
  setNotFocused: () => set(() => ({ focused: false }))
}))

export const useFontStore = create((set) => ({
  dyslexic: false,
  toogleFont: () => set((state) => ({ dyslexic: !state.dyslexic }))
}))

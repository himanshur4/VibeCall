import { create } from 'zustand'

export const useThemeStore = create((set) => ({
    theme:localStorage.getItem("vibeCall-theme")||"lemonade",
    setTheme:(theme)=>{
        localStorage.setItem("vibeCall-theme",theme);
        set({theme});
    }
}))
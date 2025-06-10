import { create } from 'zustand'

export const useThemeStore = create((set) => ({
    theme:localStorage.getItem("vibeCall-theme")||"dark",
    setTheme:(theme)=>{
        localStorage.setItem("vibeCall-theme",theme);
        set({theme});
    }
}))
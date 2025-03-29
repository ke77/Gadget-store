import { create } from "zustand";


// export const useThemeStore = create((set) => ({
//      theme: localStorage.getItem('preferred-theme') || 'forest',
//      setTheme: (theme) => {
//           localStorage.setItem('preferred-theme', theme);
//           // document.documentElement.setAttribute("data-theme", theme); // Explicitly update theme
//           set({ theme });
//      },
// }));




export const useThemeStore = create((set) => ({
     theme: localStorage.getItem("preferred-theme") || "forest",
     setTheme: (theme) => {
     localStorage.setItem("preferred-theme", theme);
     set({ theme });
     },
}));
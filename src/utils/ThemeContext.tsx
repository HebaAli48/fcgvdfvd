import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "dark",
  setTheme: (_theme: string) => {}, // Provide a default function
});

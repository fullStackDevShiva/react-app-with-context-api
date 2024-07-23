import { ThemeContextType } from "../types/ThemeTypes";
import { createContext, useState } from "react";

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | null>(null);

// Create a provider component
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTheme, setSelectedTheme] = useState("light");

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ selectedTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

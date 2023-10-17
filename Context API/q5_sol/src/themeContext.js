import { createContext, useContext, useState } from "react";

export const themeContext = createContext();

export const useThemeValue = () => {
  const value = useContext(themeContext);
  return value;
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

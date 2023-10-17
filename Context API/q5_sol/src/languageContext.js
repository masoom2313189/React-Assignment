import { createContext, useContext, useState } from "react";

export const languageContext = createContext();

export const useLanguageValue = () => {
  const value = useContext(languageContext);
  return value;
};

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("English");

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

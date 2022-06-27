import React, { useState, createContext } from "react";
import Debounce from "./Debounce";
import FetchAPI from "./FetchAPI";
import HooksLearn from "./HooksLearn";
import HooksReducer from "./HooksReducer";
import ReducerLearn from "./ReducerLearn";
import UncontrolledComp from "./UncontrolledComp";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <>
      <ReducerLearn />
      {false && (
        <>
          <FetchAPI />
          <UncontrolledComp />
          <HooksReducer />
          <button onClick={toggleTheme}>Current theme: {theme}</button>
          <Debounce />
          <ThemeContext.Provider value={themes.dark}>
            <HooksLearn />
          </ThemeContext.Provider>
        </>
      )}
    </>
  );
}

export default App;

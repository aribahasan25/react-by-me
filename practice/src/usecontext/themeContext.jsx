/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = "light";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return action.payload;

    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(reducer, initialState);

  const setTheme = (newTheme) => {
    dispatch({
      type: "SET_THEME",
      payload: newTheme,
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
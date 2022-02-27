import { createContext, useContext, useReducer } from "react";

import { appReducer, initialState } from "./AppReducer";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const date = new Date();
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state: {
          ...state,
          data: {
            firstName: "Hello",
            lastName: "World",
            date: date.toUTCString(),
          },
        },
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

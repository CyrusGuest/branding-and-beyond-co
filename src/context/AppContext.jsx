import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  let [MobileNavOpen, setMobileNavOpen] = useState(false);
  let [User, setUser] = useState(null);

  return (
    <AppContext.Provider
      value={{
        MobileNavOpen,
        setMobileNavOpen,
        User,
        setUser,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

import React, { useState, createContext } from 'react'

export const MenuContext = createContext()

export const MenuContextProvider = (props) => {
    let [MobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <MenuContext.Provider value={{ MobileNavOpen, setMobileNavOpen }}>
            {props.children}
        </MenuContext.Provider>
    )
}
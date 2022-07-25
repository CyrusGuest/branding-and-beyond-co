import React, { useState, createContext } from 'react'

export const MenuContext = createContext()

export const MenuContextProvider = (props) => {
    let [MobileNavOpen, setMobileNavOpen] = useState(false)
    let [LightMode, setLightMode] = useState(true)

    return (
        <MenuContext.Provider value={{ MobileNavOpen, setMobileNavOpen, LightMode, setLightMode }}>
            {props.children}
        </MenuContext.Provider>
    )
}
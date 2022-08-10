import React, { useState, createContext } from 'react'
import { createClient } from '@supabase/supabase-js'

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    let [MobileNavOpen, setMobileNavOpen] = useState(false)
    let [LightMode, setLightMode] = useState(true)
    let [User, setUser] = useState(null)

    const supabaseUrl = 'https://enbpozxucdfjzrqzgvds.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuYnBvenh1Y2RmanpycXpndmRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkyMjg0NjUsImV4cCI6MTk3NDgwNDQ2NX0.RwxtINpOIcOSKkzqujV8pEfZA0ZkVtxp2P-n_dn3OBE'
    const supabase = createClient(supabaseUrl, supabaseKey)

    return (
        <AppContext.Provider value={{ MobileNavOpen, setMobileNavOpen, LightMode, setLightMode, User, setUser, supabase }}>
            {props.children}
        </AppContext.Provider>
    )
}
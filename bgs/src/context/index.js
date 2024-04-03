'use client'

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

    // const [isAuthUser, setIsAuthUser] = useState(null);
    // const [user, setUser] = useState(null);

    return (
    <GlobalContext.Provider 
    value={{ 
        // isAuthUser, 
        // setIsAuthUser, 
        // user, 
        // setUser
    }}
    >
        {children}
        </GlobalContext.Provider>
    );

}

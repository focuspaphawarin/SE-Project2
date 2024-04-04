'use client'

import { createContext, useState } from "react";

interface GlobalContextType {
    isAuthUser: boolean;
    setIsAuthUser: (val: any) => void;
    user: any;
    setUser: (val: any) => void;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

export default function GlobalState({ children }: React.PropsWithChildren) {
    const [isAuthUser, setIsAuthUser] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <GlobalContext.Provider
            value={{
                isAuthUser,
                setIsAuthUser,
                user,
                setUser
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}


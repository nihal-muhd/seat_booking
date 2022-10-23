import { createContext, useState } from 'react'

export const UserAuthContext = createContext()

export function UserContext({ children }) {
    const [user, setUser] = useState({ id: null, name: null, form: false, formStatus: null })

    return (
        <UserAuthContext.Provider value={{ user, setUser }}>
            {children}
        </UserAuthContext.Provider>
    )
}
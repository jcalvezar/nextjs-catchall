import React, { createContext, useState, ReactNode } from 'react'

export type UserContextType = {
  userName: string | null
  setUserName: (name: string | null) => void
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useState<string | null>(null)

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  )
}

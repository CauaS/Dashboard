import React from 'react'
import { AuthContext } from './authContext'
import { IAuth } from './authContextTypes'

type ProviderProps = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: ProviderProps) => {
  const [auth, setAuth] = React.useState({} as IAuth)

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  )
}

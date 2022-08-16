import { createContext } from 'react'
import { IAuthContextType } from './authContextTypes'

export const AuthContext = createContext<IAuthContextType>(
  {} as IAuthContextType
)

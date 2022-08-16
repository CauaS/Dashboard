import { createContext } from 'react'
import { ITranslationContextType } from './translationContextTypes'

export const TranslationContext = createContext<ITranslationContextType>(
  {} as ITranslationContextType
)

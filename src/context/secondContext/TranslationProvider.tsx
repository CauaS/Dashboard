import React from 'react'
import { TranslationContext } from './translationContext'
import { ITranslation } from './translationContextTypes'

type ProviderProps = {
  children: React.ReactNode
}

export const TranslationProvider = ({ children }: ProviderProps) => {
  const [trans, setTrans] = React.useState({} as ITranslation)

  const change = (newTrans: string) => setTrans({ trans: newTrans })

  return (
    <TranslationContext.Provider value={{ trans, change }}>
      {children}
    </TranslationContext.Provider>
  )
}

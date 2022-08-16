export type ITranslation = {
  trans: string
}

export type ITranslationContextType = {
  trans: ITranslation
  change: (trans: string) => void
}

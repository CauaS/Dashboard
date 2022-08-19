import React from 'react'

/**
 * React.DetailedHTMLProps serve para passar todas as propridades originais de um HTML elemento
 * Passamos como 1º quais os atributos que queremos, ==> React.ButtonHTMLAttributes de HTMLButtonElement especificando HTMLButtonElement
 */

export const ButtonWrapper: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    title: string
  }
> = ({ title, ...props }) => <button {...props}>{title}</button>

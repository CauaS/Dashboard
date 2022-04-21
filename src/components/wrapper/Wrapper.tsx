import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'

interface Props {
  children?: React.ReactNode
}

export default function Wrapper({ children }: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" data-testid="wrapper">
        {children}
      </Container>
    </React.Fragment>
  )
}

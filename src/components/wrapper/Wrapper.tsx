import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'

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

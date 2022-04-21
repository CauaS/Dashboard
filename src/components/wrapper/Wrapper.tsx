import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function Wrapper() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" data-testid="wrapper">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  )
}

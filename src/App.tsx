import Routers from './routes/Routes'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routers />
    </ThemeProvider>
  )
}

export default App

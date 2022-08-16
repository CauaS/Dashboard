import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AuthProvider } from './context/firstContext/AuthProvider'
import { TranslationProvider } from './context/secondContext/TranslationProvider'
import Routers from './routes/Routes'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {
  return (
    <AuthProvider>
      <TranslationProvider>
        <ThemeProvider theme={darkTheme}>
          <Routers />
        </ThemeProvider>
      </TranslationProvider>
    </AuthProvider>
  )
}

export default App

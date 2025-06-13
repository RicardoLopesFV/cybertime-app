import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { darkCyberpunk } from './themes/darkCyberPunk.ts'
import { GlobalStyle } from './styles/globalStyle.ts'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={darkCyberpunk}>
    <StrictMode>
      <GlobalStyle />
      <App />
    </StrictMode>
  </ThemeProvider>,
)

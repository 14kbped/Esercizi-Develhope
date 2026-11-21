import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { InteractiveWelcome } from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <InteractiveWelcome />
  </StrictMode>,
)

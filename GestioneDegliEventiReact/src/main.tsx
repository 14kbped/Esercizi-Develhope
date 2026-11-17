import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MouseClicker, MultiClick } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MouseClicker />
    <MultiClick />
  </StrictMode>,
)

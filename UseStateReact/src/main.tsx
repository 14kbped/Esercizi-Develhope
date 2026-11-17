import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Counter } from './Counter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Counter initialValue={0} increment={1} />
  </StrictMode>,
)

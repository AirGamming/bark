import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './css/index.css'

document.title = "Bark"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  </StrictMode>,
)

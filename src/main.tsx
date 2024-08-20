import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// css
import './css/index.css'
//  jsx
import Nav from './nav.tsx' ;

document.title = "Bark"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav/>
  </StrictMode>,
)

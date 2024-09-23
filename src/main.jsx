import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Nav from './navigation/navigation.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Nav/>
    </BrowserRouter>
  </StrictMode>,
)

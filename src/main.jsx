import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/normalize.css'
import './css/index.css'
import App from './scripts/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
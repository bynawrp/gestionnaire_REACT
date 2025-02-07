import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GestProvider } from './context/GestContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GestProvider>
      <App />
    </GestProvider>
  </StrictMode>,
)

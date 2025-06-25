import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root1')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById('root2')).render(
  <App/>
)

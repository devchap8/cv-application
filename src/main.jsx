import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FormContainer from './components/form-container'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      <FormContainer></FormContainer>
      <div className="csvContainer"></div>
    </main>
  </StrictMode>,
)

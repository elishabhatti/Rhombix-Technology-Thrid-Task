import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BookProvider } from './Context/BookContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BookProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </BookProvider>
)

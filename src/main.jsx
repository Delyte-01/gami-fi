// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GlobalContextProvider } from './Components/Context/Context.jsx'

createRoot(document.getElementById('root')).render(
    <GlobalContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </GlobalContextProvider>
)

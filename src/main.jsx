import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SchoolLogin from './Components/pages/SchoolLogin.jsx' 
import SchoolPage from './Components/pages/SchoolPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/school-login" element={<SchoolLogin />} />

        <Route path="/school-dashboard" element={<SchoolPage />} />
        
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
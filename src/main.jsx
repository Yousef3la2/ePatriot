import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import SchoolLogin from './Components/pages/SchoolLogin.jsx';
import SchoolPage from './Components/pages/SchoolPage.jsx';
import TeacherManagementPage from './Components/pages/TeacherManagement.jsx';
import ContentLibraryPage from './Components/pages/ContentLibrary.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/school-login" element={<SchoolLogin />} />

        <Route path="/school-dashboard" element={<SchoolPage />} />

        <Route path="/teacher-management" element={<TeacherManagementPage />} />

        <Route path="/educational-content" element={<ContentLibraryPage />} />

        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
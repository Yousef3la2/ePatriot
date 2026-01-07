import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/pages/HomePage";
import LoginPage from "./Components/pages/LoginPage";
import ForgotPasswordPage from "./Components/pages/ForgotPasswordPage";
import SignUpPage from "./Components/pages/SignUpPage";
import TeacherManagement from "./Components/pages/TeacherManagement";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/teachers" element={<TeacherManagement />} />
    </Routes>
  );
}

export default App;
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/pages/HomePage";
import LoginPage from "./Components/pages/LoginPage";
import ForgotPasswordPage from "./Components/pages/ForgotPasswordPage";
import SignUpPage from "./Components/pages/SignUpPage";
import TeacherManagement from "./Components/pages/TeacherManagement";
import TeacherDetails from "./Components/pages/TeacherDetails";
import ContentLibrary from "./Components/pages/ContentLibrary";
import CurriculumOverview from "./Components/pages/CurriculumOverview";
import LessonOverview from "./Components/pages/LessonOverview";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/teachers" element={<TeacherManagement />} />
      <Route path="/teachers/:id" element={<TeacherDetails />} />
      <Route path="/content-library" element={<ContentLibrary />} />
      <Route path="/curriculum-overview" element={<CurriculumOverview />} />
      <Route path="/lesson-overview" element={<LessonOverview />} />
    </Routes>
  );
}

export default App;
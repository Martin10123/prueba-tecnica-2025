import { Navigate, Route, Routes } from "react-router-dom";
import { ProfilePage } from "../modules/pages/ProfilePage";
import { HomePage } from "../modules/pages/HomePage";
import { LoginPage } from "../modules/auth/LoginPage";
import { RegisterPage } from "../modules/auth/RegisterPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />

      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

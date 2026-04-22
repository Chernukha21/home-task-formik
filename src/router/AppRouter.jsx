import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login-page/LoginPage.jsx';
import SignupPage from '../pages/signup-page/SignupPage.jsx';
import AuthLayout from '../components/auth-layout/AuthLayout.jsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

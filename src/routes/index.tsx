import { Routes, Route } from "react-router-dom";
import { Welcome, LoginScreen, RegisterScreen, ErrorScreen, GameScreen } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/draw" element={<GameScreen />} />
      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  )
}

export default AppRoutes;
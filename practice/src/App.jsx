import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./ProtectedRouting/Login";
import Dashboard, { DashboardOverview } from "./ProtectedRouting/Dashboard";
import ProtectedRoute from "./ProtectedRouting/ProtectedRoute";
import Courses from "./ProtectedRouting/Courses";
import Profile from "./ProtectedRouting/Profile";
import Settings from "./ProtectedRouting/Setting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardOverview />} />
            <Route path="courses" element={<Courses />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
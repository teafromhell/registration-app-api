import { Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/routes/PrivateRoute";
import AdminPanel from "./pages/AdminPanel";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import StationsPage from "./pages/StationsPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route
          path="/adminpanel"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UsersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/stations"
          element={
            <PrivateRoute>
              <StationsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

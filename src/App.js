import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminPanel from "./pages/AdminPanel";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import StationsPage from "./pages/StationsPage";
import UsersPage from "./pages/UsersPage";
import Req from "./req";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/adminpanel">
          <Route
            index
            element={
              <Req>
                <AdminPanel />
              </Req>
            }
          />
          <Route
            path="users"
            element={
              <Req>
                <UsersPage />
              </Req>
            }
          />
          <Route
            path="stations"
            element={
              <Req>
                <StationsPage />
              </Req>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;

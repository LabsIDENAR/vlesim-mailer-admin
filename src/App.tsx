import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./app/login/Login";
import Dashboard from "./app/dashboard/App";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default login page */}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* Dashboard route */}
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./app/login/Login";
import Dashboard from "./app/dashboard/App";
import { SupressionList } from "./app/dashboard/supressionList/SupresionList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        <Route path="/dashboard/supressionList" element={<SupressionList />} />
        {/* Dashboard route */}
      </Routes>
    </Router>
  );
}

export default App;

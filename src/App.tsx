import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ProtectedRoute } from "./app/hooks/ProtectRoutes";
import Dashboard from "./app/dashboard/App";
import { Login } from "./app/login/Login";
import { Campaign } from "./app/dashboard/campaign/Campaign";
import { SupressionList } from "./app/dashboard/supressionList/SupresionList";
import { DomainManagement } from "./app/dashboard/configuration/domain-management/DomainManagement";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/campaign" element={<Campaign />} />
          <Route
            path="/dashboard/configuration/domain-management"
            element={<DomainManagement />}
          />
          <Route
            path="/dashboard/supressionList"
            element={<SupressionList />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

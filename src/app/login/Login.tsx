import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      {/* Link to the Dashboard */}
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

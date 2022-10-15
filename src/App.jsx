import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useLocation
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { AuthProvider, useAuth } from './stores/AuthContext';

const App = () => {
  const ctx = useAuth();

  return (
    <AuthProvider>
      <h1>React Router</h1>

      <Navigation token={ctx.token} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home/>} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
};
const Navigation = () => {
  const ctx = useAuth();
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <br />
      <NavLink to="/dashboard">Dashboard</NavLink>
      <br />
      {ctx.token && (
        <button type="button" onClick={ctx.handleLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
};

export default App;

const NoMatch = () => (
  <>
    <h1>Error</h1>
    <p>Page Not Found</p>
  </>
);

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/home" replace state={{ from: location }} />;
  }

  return children;
};

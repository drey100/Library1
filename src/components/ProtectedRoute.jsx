import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('token'); // à adapter plus tard
  return isAuthenticated ? children : <Navigate to="/Connexion" />;
}

export default ProtectedRoute;

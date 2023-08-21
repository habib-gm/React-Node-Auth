import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; 

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export const ProtectedRoute2 = ({ children }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return !isAuthenticated ? children : <Navigate to="/dashboard" />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.elementType.isRequired, // Ensure `component` is a valid React component
};

ProtectedRoute2.propTypes = {
  children: PropTypes.elementType.isRequired, // Ensure `component` is a valid React component
};

export default ProtectedRoute;

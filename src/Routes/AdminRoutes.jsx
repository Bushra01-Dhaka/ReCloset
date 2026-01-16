import { Navigate, useLocation } from "react-router";
import useRole from "../Hooks/useRole";
import useAuth from "../Hooks/useAuth";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, isLoading } = useRole();
  const location = useLocation();

  if (loading || isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user || role !== "admin") {
    return (
      <Navigate
        to="/forbiddenPage"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
};

export default AdminRoutes;

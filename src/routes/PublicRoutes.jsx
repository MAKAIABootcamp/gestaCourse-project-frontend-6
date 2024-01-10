import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ isAuthenticate, redirectPath = "/ingresar", children }) => {
  if (isAuthenticate) return <Navigate to={redirectPath} />;
  return <div>{children ? children : <Outlet />}</div>;
};

export default PublicRoutes;

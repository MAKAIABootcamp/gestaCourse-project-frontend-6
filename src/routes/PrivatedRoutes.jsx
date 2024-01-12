import { Navigate, Outlet } from "react-router-dom";

const PrivatedRoutes = ({isAuthenticate,redirectPath = "/login",children,}) => {
  if (!isAuthenticate) return <Navigate to={redirectPath} />;
  return <div>{children ? children : <Outlet />}</div>;
};

export default PrivatedRoutes;

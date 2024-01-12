import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ isAuthenticate, redirectPath = "/ofertasInscripciones", children }) => {
  if (isAuthenticate) return <Navigate to={redirectPath} />;
  return <div>{children ? children : <Outlet />}</div>;
};

export default PublicRoutes;

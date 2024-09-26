import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";

const PrivateRoutes = () => {
    const { isAuthenticated } = useAuth();
    const location = useLocation()

    return isAuthenticated ? <Outlet /> : <Navigate to="/Login" replace={true} state={{ path: location.pathname }} />;
};
export default PrivateRoutes;
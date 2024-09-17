import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";

const PrivateRoutes = () => {
    const { isAuthenticated, user } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/Login" />;
};
export default PrivateRoutes;
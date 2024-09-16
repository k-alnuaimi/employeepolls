import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";

const PrivateRoutes = () => {
    const { isAuthenticated, user } = useAuth();
    console.log(user)
    console.log(isAuthenticated)
    return isAuthenticated ? <Outlet /> : <Navigate to="/Login" />;
};
export default PrivateRoutes;
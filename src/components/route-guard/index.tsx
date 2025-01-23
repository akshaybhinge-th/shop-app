import { useContext } from "react"
import { UserAuthContext } from "../../providers/user-auth-provider/user-auth-context"
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
    const context = useContext(UserAuthContext);
    const location = useLocation();
    return context?.user ? <Outlet /> : <Navigate to={"/login"} state={{ redirectTo: location}}/>
}

export default PrivateRoute;
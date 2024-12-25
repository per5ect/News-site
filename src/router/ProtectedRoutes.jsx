import {Outlet, Navigate} from "react-router";
import {useSelector} from "react-redux";

export function ProtectedRoutes({roles}) {
    const {user, isAuthenticated} = useSelector((state) => state.auth);

    if (!isAuthenticated) {
        return <Navigate to="/logIn" replace />;
    }

    if (roles && !roles.includes(user.role)) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

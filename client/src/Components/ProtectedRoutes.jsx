import { Navigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
    const user = sessionStorage.getItem("userLoggedIn");

    if (user !== null) {
        return props.children;
    }

    return <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
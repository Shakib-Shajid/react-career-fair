import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname)
    if (loading) {
        return <span className="loading loading-spinner text-error"></span>
    }

    if (user) {  //jodi user thakhey tokhon takey jaitey diby
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>; //naholey aikhaney jabo


};

export default PrivateRoute;
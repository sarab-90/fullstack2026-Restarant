import {Navigate, useNavigate} from "react-router-dom";
import Cookie from "js-cookie"
import toast from "react-hot-toast" 

function ProtectedRoutes({children}){
    const navigate = useNavigate()
    const token = Cookie.get("accessToken");
    if (!token){
        <Navigate to="/login" replace />
        // navigate("/login");
        toast.error("you dont have access here")
    }
    return children;
}
export default ProtectedRoutes;

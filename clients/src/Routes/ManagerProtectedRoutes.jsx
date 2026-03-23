import {Navigate} from "react-router-dom";
import Cookies from "js-cookie"

function ManagerProtectedRoutes(children){
    const user = Cookies.get("refreshTokens");


    if (user.role !== "manager"){
        return 
        <Navigate to="/login" replace />
        // navigate("/login");
            }
    return children;
}
export default ManagerProtectedRoutes;
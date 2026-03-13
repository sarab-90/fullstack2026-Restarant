import {createContext,  useContext, useState } from "react";
import tost from "react-hot-toast";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const register = async (userData) => {
        try {
            if (!userData.name || !userData.email || !userData.password) {
                tost.error("Please fill in all fields");
                return;
            }
            const res = await api.post("/auth/register", userData);
            
            console.log(res)
            setUser(res.data.user);
                tost.success(res.data.message || "Registration successful");
        } catch (error) {
            console.error(error)
            tost.error("Registration failed");
        }
    };
    // login
    const login = async(userData) => {
        try {
            if (!userData.email || !userData.password) {
                tost.error("Please fill in all fields");
                return;
            }
            const res = await api.post("/auth/login", userData);
            
            setUser(res.data.user);
                tost.success(res.data.message || "Login successful");
        } catch (error) {
            console.error(error)
            tost.error("Login failed");
        }
    }
    return (
        <>
        <UserContext.Provider value={
            { register, user ,login }
            }>
            {children}
        </UserContext.Provider>
        </>
    )
}
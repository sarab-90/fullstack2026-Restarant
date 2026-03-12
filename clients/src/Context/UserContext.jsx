import {createContext,  useContext, useState } from "react";
import tost from "react-hot-toast";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const register = async (userData) => {
        try {
            const res = await api.post("/auth/register", userData);
            if (!userData.name || !userData.email || !userData.password) {
                tost.error("Please fill in all fields");
                return;
            }
            console.log(res)
            setUser(res.data.user);
                tost.success(res.data.message || "Registration successful");
        } catch (error) {
            console.error(error)
            tost.error("Registration failed");
        }
    };
    // login
    const login = (userData) => {
        try {
            const res = api.post("/auth/login", userData);
            if (!userData.email || !userData.hashPassword) {
                tost.error("Please fill in all fields");
                return;
            }
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
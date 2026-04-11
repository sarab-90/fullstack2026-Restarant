import { createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../api.js"
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

const currentUser = async () => {
  try {
    const res = await api.get("/auth/me");
    setUser(res.data.me)
  } catch (error) {
    console.log("Not Logged in ")
    setUser(null)
  }
};
useEffect(() => {
  currentUser();
},[]);

  const register = async (userData) => {
    try {
      if (!userData.name || !userData.email || !userData.password) {
        toast.error("Please fill in all fields");
        return;
      }
      const res = await api.post("/auth/register", userData);

      console.log(res);
      setUser(res.data.user);
      toast.success(res.data.message || "Registration successful");
    } catch (error) {
      console.error(error);
      toast.error("Registration failed");
    }
  };
  // login
  const login = async (userData) => {
    try {
      if (!userData.email || !userData.password) {
        toast.error("Please fill in all fields");
        return;
      }
      const res = await api.post("/auth/login", userData);

      setUser(res.data.user);
      toast.success(res.data.message || "Login successful");
      navigate("/user/home");
    } catch (error) {
      console.error(error);
      toast.error("Login failed");
    }
  };
  
  // logout
const logout = async () => {
  try {
  await api.post("/auth/logout")
  setUser(null)
  toast.success("Logged out ")
  navigate("/login")  
  } catch (error) {
    console.log(error)
    toast.error("Logout Failed ")
  }
};
  return (
    <>
      <UserContext.Provider value={{ register, user, login, logout }}>
        {children}
      </UserContext.Provider>
    </>
  );
}

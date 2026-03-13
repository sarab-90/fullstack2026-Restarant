import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from '../api.js'

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState({});
  const allMenu = async () => {
    try {
      const res = await api.get("/menu");
      if (res.data.menu.length === 0) {
        toast.success("No menu yet");
      }
      setMenu(res.data.menu);
      toast.success("Happy Meal");
    } catch (error) {
      toast.error("Some Thing Wrong Error");
    }
  };
  return (
    <>
      <MenuContext.Provider value={{ allMenu, menu }}>
        {children}
      </MenuContext.Provider>
    </>
  );
}

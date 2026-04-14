import { useEffect, useState } from "react";
import api from "../src/api.js";
import toast from "react-hot-toast";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await api.get("/category/all");
      setCategories(res.data.categories);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error fetching categories");
    } finally {
      setLoading(false);
    }
  };

  const addNewCategory = async ({ categoryname, description }) => {
    setLoading(true);
    try {
      const res = await api.post("/category/create", {
        name: categoryname,
        description,
      });
      setCategories(res.data.categories);
      toast.success(res.data.message || "Category added successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error adding category");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const deleteCategory = async (categoryid) => {
    setLoading(true);
    try {
      const res = await api.delete(`/category/${categoryid}`);
      setCategories(res.data.categories);
      toast.success(res.data.message || "Category deleted successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error deleting category");
    } finally {
      setLoading(false);
    }
  };
  const updateCategory = async (categoryid, updatedData) => {
    setLoading(true);
    try {
      const res = await api.put(`/category/${categoryid}`, updatedData);
      setCategories(res.data.categories);
      toast.success(res.data.message || "Category updated successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating category");
    } finally {
      setLoading(false);
    }
  };
  const findCategoryByName = async (categoryname) => {
    setLoading(true);
    try {
      const res = await api.post("/category/search", { name: categoryname });
      return res.data.category;
    } catch (error) {
      toast.error(error.response?.data?.message || "Error finding category");
    } finally {
      setLoading(false);
    }
  };
  const getCategoryById = async (categoryid) => {
    setLoading(true);
    try {
      const res = await api.get(`/category/${categoryid}`);
      return res.data.category;
    } catch (error) {
      toast.error(error.response?.data?.message || "Error finding category");
    } finally {
      setLoading(false);
    }
  };
  return {
    categories,
    addNewCategory,
    deleteCategory,
    updateCategory,
    findCategoryByName,
    getCategoryById,
  };
}

import {
  getAllCategories,
  createCategory,
  getCategory,
  findCategoryByName,
  updateCategory,
  deleteCategory,
} from "../models/categoryModel.js";
import { asyncHandler } from "../middleware/asyncHandlerMiddleware.js";
// get all categories
export const getAllCategoriesController = asyncHandler(async (req, res) => {
  try {
    const categories = await getAllCategories();
    if (categories.length === 0) {
      return res
        .status(200)
        .json({ message: "No categories found", categories: [] });
    }
    return res.status(200).json({ message: "Categories found", categories });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
});
// create category
export const createCategoryController = asyncHandler(async (req, res) => {
  const { categoryname, description } = req.validateData;
  try {
    const existedCategory = await findCategoryByName(categoryname);
    if (existedCategory) {
      return res.status(400).json({ message: "Category already exists" });
    }
    const newCategory = await createCategory(categoryname, description);
    if (!newCategory) {
      return res.status(400).json({ message: "Failed to create category" });
    }
    return res
      .status(201)
      .json({
        message: "Category created successfully",
        category: newCategory,
      });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
});
// get category by id
export const getCategoryByIdController = asyncHandler(async (req, res) => {
  const categoryId = req.params.id;
  try {
    const category = await getCategory(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({ message: "Category found", category });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
});
// find category by name
export const findCategoryByNameController = asyncHandler(async (req, res) => {
    const categoryname = req.params.name;
    try {
        const category = await findCategoryByName(categoryname);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        return res.status(200).json({ message: "Category found", category });
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
});
// update category
export const updateCategoryController = asyncHandler(async (req, res) => {
  const categoryId = req.params.id;
    const { categoryname, description } = req.validateData;
    try {
        const category = await getCategory(categoryId);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        const updatedCategory = await updateCategory(categoryId, categoryname, description);
        if (!updatedCategory) {
            return res.status(400).json({ message: "Failed to update category" });
        }
        return res.status(200).json({ message: "Category updated successfully", category: updatedCategory });
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
});
// delete category
export const deleteCategoryController = asyncHandler(async (req, res) => {
    const categoryId = req.params.id;
    try {
        const category = await getCategory(categoryId);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        const deletedCategory = await deleteCategory(categoryId);
        if (!deletedCategory) {
            return res.status(400).json({ message: "Failed to delete category" });
        }
        return res.status(200).json({ message: "Category deleted successfully", category: deletedCategory });
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
});
import {
  createCategoryController,
  getAllCategoriesController,
  getCategoryByIdController,
  findCategoryByNameController,
  updateCategoryController,
  deleteCategoryController,
} from "../controllers/categoryContreoller.js";
import { createCategorySchema } from "../validation/categoryValidation.js";
import { validate } from "../middleware/validateMiddleware.js";
import { managerOnly } from "../middleware/mangerOnlyMiddleware.js";
import { protect } from "../middleware/protectMiddleware.js";
import express from "express";

const router = express.Router();

// Create a new category
router.post(
  "/category/create",
  protect,
  managerOnly,
  validate(createCategorySchema),
  createCategoryController,
);
// Get all categories
router.get("/category/all", getAllCategoriesController);
// Get a category by ID
router.get("/category/:id", getCategoryByIdController);
// Find a category by name
router.post("/category/search", findCategoryByNameController);
// Update a category by ID
router.put("/category/:id", protect, managerOnly, updateCategoryController);
// Delete a category by ID
router.delete("/category/:id", protect, managerOnly, deleteCategoryController);

export default router;

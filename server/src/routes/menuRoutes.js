import {
    createMenuItemController,
  getMenuItemByIdController,
  getAllMenuItemsController,
  findMenuItemByNameController,
  deleteMenuByIdController,
  updateMenuByIdController,
} from "../controllers/menuControllers.js";
import {createMenuSchema} from "../validation/menuValidation.js";
import {validate} from "../middleware/validateMiddleware.js";
import { managerOnly } from "../middleware/mangerOnlyMiddleware.js";
import { protect } from "../middleware/protectMiddleware.js";
import express from "express";

const router = express.Router();

// Create a new menu item
router.post("/menu", protect, managerOnly, validate(createMenuSchema), createMenuItemController);
// Get a menu item by ID
router.get("/menu/:id", getMenuItemByIdController);
// Get all menu items
router.get("/menus", getAllMenuItemsController);
// Find a menu item by name
router.post("/menu/search", findMenuItemByNameController);
// Update a menu item by ID
router.put("/menu/:id", protect, managerOnly, updateMenuByIdController);
// Delete a menu item by ID
router.delete("/menu/:id", protect, managerOnly, deleteMenuByIdController);

export default router;
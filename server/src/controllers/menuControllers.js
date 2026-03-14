import {
  createMenuItem,
  getMenuItemsById,
  getAllMenuItems,
  findMenuItemByName,
  deleteMenuItemById,
  updateMenuItemById,
} from "../models/menuModels.js";
import { asyncHandler } from "../middleware/asyncHandlerMiddleware.js";
// create menu item
export const createMenuItemController = asyncHandler (async (req, res) => {
  const { menu_name, description, price, image, is_available, cat_ID } =
    req.validateData;
  try {
    const existedMenuItem = await findMenuItemByName(menu_name);
    if (existedMenuItem) {
      return res.status(400).json({ message: "Menu item already exists" });
    }
    const newMenuItem = await createMenuItem(
      menu_name,
      description,
      price,
      image,
      is_available,
      cat_ID,
    );
    if (!newMenuItem) {
      return res.status(400).json({ message: "Failed to create menu item" });
    }
    return res
      .status(201)
      .json({ message: "Menu item created successfully", menu: newMenuItem });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "interal server error , in create menu item" });
  }
});
// get menu item by id
export const getMenuItemByIdController = asyncHandler (async (req, res) => {
  const menuId = req.params.id;
  try {
    const menuItem = await getMenuItemsById(menuId);
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    return res.status(200).json(menuItem);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "interal server error , in get menu item by id" });
  }
});
// get all menu items
export const getAllMenuItemsController = asyncHandler (async (req, res) => {
  try {
    const menuItems = await getAllMenuItems();
    if (menuItems.length === 0) {
      return res
        .status(200)
        .json({ message: "No menu items yet", menuItems: [] });
    }
    return res.status(200).json({menuItems: []});
  } catch (error) {
    return res
      .status(500)
      .json({ message: "interal server error , in get all menu items" });
  }
});
// find menu item by name
export const findMenuItemByNameController = asyncHandler (async (req, res) => {
  const { menu_name } = req.body;
  try {
    const menuItem = await findMenuItemByName(menu_name);
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    return res.status(200).json(menuItem);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "interal server error , in find menu item by name" });
  }
});
// update menu item by id
export const updateMenuByIdController = asyncHandler (async (req, res) => {
  const menuId = req.params.id;
  const { menu_name, description, price, image, is_available, cat_ID } =
    req.body;
  try {
    const updatedMenuItem = await updateMenuItemById(menuId, {
      menu_name,
      description,
      price,
      image,
      is_available,
      cat_ID,
    });
    if (!updatedMenuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    return res
      .status(200)
      .json({
        message: "Menu item updated successfully",
        menu: updatedMenuItem,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "interal server error , in update menu item by id" });
  }
});
// delete menu item by id
export const deleteMenuByIdController = asyncHandler (async (req, res) => {
    const menuId = req.params.id;
    try {
        const deletedMenuItem = await deleteMenuItemById(menuId);
        if (!deletedMenuItem) {
            return res.status(404).json({ message: "Menu item not found" });
        }
        return res.status(200).json({ message: "Menu item deleted successfully" });
    } catch (error) {
        return res
        .status(500)
        .json({ message: "interal server error , in delete menu item by id" });
    }
});
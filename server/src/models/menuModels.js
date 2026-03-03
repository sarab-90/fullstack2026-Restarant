import { pool } from "../config/db";

// create new menu item
export const createMenuItem = async (
    menu_name, description, price, image, is_available, cat_ID
) => {
    const query = `INSERT INTO menu (menu_name, description, price, image, is_available, cat_ID) 
                    VALUES ($1, $2, $3, $4, $5, $6) RETURNING menuId, menu_name, description, price, image, is_available, cat_ID`;
    const result = await pool.query(query, [
        menu_name, description, price, image, is_available, cat_ID
    ]);
    return result.rows[0]; // اخر سطر في النتيجة
}
// get menu items by id
export const getMenuItemsById = async (id) => {
  const result = await pool.query(
    `SELECT menuId, menu_name, description, price, image, is_available, cat_ID FROM menu WHERE id = $1`,
    [id],
  );
  return result.rows[0]; // اخر سطر في النتيجة
};
// get all menu items
export const getAllMenuItems = async () => {
  const result = await pool.query(
    `SELECT menuId, menu_name, description, price, image, is_available, cat_ID FROM menu`,
  );
  return result.rows; // كل السطور في النتيجة
};
// find menu item by name
export const findMenuItemByName = async (menu_name) => {
  const result = await pool.query(
    `SELECT menuId, menu_name, description, price, image, is_available, cat_ID FROM menu WHERE menu_name = $1`,
    [menu_name]
  );
  return result.rows[0];      // اخر سطر في النتيجة 
};
// update menu item by id
export const updateMenuItemById = async (menuId, menu_name, description, price, image, is_available, cat_ID) => {
    const result = await pool.query(
        `UPDATE menu SET menu_name = $1, description = $2, price = $3, image = $4, is_available = $5, cat_ID = $6 WHERE menuId = $7 RETURNING menuId, menu_name, description, price, image, is_available, cat_ID`,
        [menu_name, description, price, image, is_available, cat_ID, menuId],
    );
    return result.rows[0]; // اخر سطر في النتيجة
};
// delete menu item by id
export const deleteMenuItemById = async (menuId) => {
    await pool.query(`DELETE FROM menu WHERE menuId = $1`, [menuId]);
};

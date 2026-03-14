import { pool } from "../config/db.js";


// get categoey items by id
export const getCategoeyItemsById = async (menuId) => {
  const result = await pool.query(
    `SELECT * FROM categoey WHERE menuId = $1`,
    [menuId]
  );
  return result.rows[0]; // اخر سطر في النتيجة
};
// get all categoey items
export const getAllCategoeyItems = async () => {
  const result = await pool.query(
    `SELECT * FROM categoey`,
  );
  return result.rows; // كل السطور في النتيجة
};
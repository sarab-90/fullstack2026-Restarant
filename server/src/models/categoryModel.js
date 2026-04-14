import { pool } from "../config/db.js";
// get categoey  by id
export const getCategory = async (categoryid) => {
  const result = await pool.query(
    `SELECT * FROM categories WHERE categoryid = $1`,
    [categoryid]
  );
  return result.rows[0]; // اخر سطر في النتيجة
};
// get all categoey 
export const getAllCategories= async () => {
  const result = await pool.query(
    `SELECT * FROM categories`,
  );
  return result.rows; // كل السطور في النتيجة
};
// create category
export const createCategory = async (categoryname, description) => {
  const result = await pool.query(
    `INSERT INTO categories (categoryname, description) VALUES ($1, $2) RETURNING *`,
    [categoryname, description]
  );
  return result.rows[0]; // اخر سطر في النتيجة
};
// update category
export const updateCategory = async (categoryid, categoryname, description) => {
  const result = await pool.query(
    `UPDATE categories SET categoryname = $1, description = $2 WHERE categoryid = $3 RETURNING *`,
    [categoryname, description, categoryid]
  );
  return result.rows[0]; // اخر سطر في النتيجة
};
// delete category
export const deleteCategory = async (categoryid) => {
  await pool.query(
    `DELETE FROM categories WHERE categoryid = $1`,
    [categoryid]
  )
};
// find category by name
export const findCategoryByName = async (categoryname) => {
  const result = await pool.query(
    `SELECT * FROM categories WHERE categoryname = $1`,
    [categoryname]
  );
  return result.rows[0]; // اخر سطر في النتيجة  
}
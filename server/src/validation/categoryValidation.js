import Joi from "joi";
// validation for category creation
export const createCategorySchema = Joi.object({
    categoryname: Joi.string().min(3).max(255).required().messages({
        "string.min": "Category name must be at least 3 characters",
        "string.max": "Category name must be at most 255 characters",
        "string.required": "Category name is required",
        "string.empty": "Category name is required",
    }),
    description: Joi.string().min(3).max(1024).required().messages({
        "string.min": "Description must be at least 3 characters",
        "string.max": "Description must be at most 1024 characters",
        "string.required": "Description is required",
        "string.empty": "Description is required",
    }),
    
})
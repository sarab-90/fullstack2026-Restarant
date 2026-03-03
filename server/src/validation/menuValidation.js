import Joi from "joi";

// validation for menu creation
export const createMenuSchema = Joi.object({
    menu_name: Joi.string().min(3).max(255).required().messages({
        "string.min": "Menu name must be at least 3 characters",
        "string.max": "Menu name must be at most 255 characters",
        "string.required": "Menu name is required",
        "string.empty": "Menu name is required",
    }),
    description: Joi.string().min(3).max(1024).required().messages({
        "string.min": "Description must be at least 3 characters",
        "string.max": "Description must be at most 1024 characters",
        "string.required": "Description is required",
        "string.empty": "Description is required",
    }),
    price: Joi.number().positive().precision(2).required().messages({
        "number.positive": "Price must be a positive number",
        "number.precision": "Price must have at most 2 decimal places",
        "number.required": "Price is required",
    }),
    image: Joi.string().uri().required().messages({
        "string.uri": "Image must be a valid URL",
        "string.required": "Image URL is required",
    }),
});

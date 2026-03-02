import joi from "joi";

// validation for user registration
export const registerSchema = joi.object({
  username: joi.string().min(3).max(255).required().messages({
    "string.min": "Username must be at least 3 characters",
    "string.max": "Username must be at most 100 characters",
    "string.required": "Username is required",
    "string.empty": "Username is required",
  }),
  email: joi.string().email().min(6).max(255).required().email().messages({
    "string.email": "Email must be a valid email address",
    "string.min": "Email must be at least 6 characters",
    "string.max": "Email must be at most 255 characters",
    "string.required": "Email is required",
    "string.empty": "Email is required",
  }),
  password: joi
    .string()
    .min(8)
    .max(1024)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    )
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters",
      "string.max": "Password must be at most 1024 characters",
      "string.pattern":
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
      "string.required": "Password is required",
      "string.empty": "Password is required",
    }),
  role: joi
    .string()
    .valid("user", "manager", "employee")
    .default("user")
    .required()
    .messages({
      "string.valid": "Role must be either user, manager or employee",
      "string.required": "Role is required",
      "string.empty": "Role is required",
    }),
});
// validation for user login
export const loginSchema = joi.object({
  email: joi.string().email().min(6).max(255).required().email().messages({
    "string.email": "Email must be a valid email address",
    "string.min": "Email must be at least 6 characters",
    "string.max": "Email must be at most 255 characters",
    "string.required": "Email is required",
    "string.empty": "Email is required",
  }),
  password: joi
    .string()
    .min(8)
    .max(1024)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    )
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters",
      "string.max": "Password must be at most 1024 characters",
      "string.pattern":
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
      "string.required": "Password is required",
      "string.empty": "Password is required",
    }),
});

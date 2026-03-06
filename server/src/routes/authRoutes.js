import { register, login } from "../controllers/authController.js";
import {registerSchema, loginSchema} from "../validation/userValidation.js";
import {validate} from "../middleware/validateMiddleware.js";
import authRateLimitMiddleware from "../middleware/authRateLimitMiddleware.js";

import express from 'express';

const router = express.Router();

router.post('/auth/register',validate(registerSchema), authRateLimitMiddleware, register);

router.post('/auth/login',validate(loginSchema), authRateLimitMiddleware, login);

export default router;
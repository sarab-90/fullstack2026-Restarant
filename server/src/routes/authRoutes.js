import { register, login } from "../controllers/authController.js";
import {registerSchema, loginSchema} from "../validation/userValidation.js";
import {validate} from "../middleware/validateMiddleware.js";

import express from 'express';

const router = express.Router();

router.post('/auth/register',validate(registerSchema), register);

router.post('/auth/login',validate(loginSchema), login);

export default router;
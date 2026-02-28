import { register, login } from "../controllers/authController.js";
import {registerSchema} from "../validation/userValidation.js";
import validate from "../middleware/validateMiddleware.js";

import express from 'express';

const router = express.Router();

router.post('/auth/register',validate(registerSchema), register);

router.post('/auth/login',validate(registerSchema), login);

export default router;
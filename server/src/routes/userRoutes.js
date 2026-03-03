import {
  getUserByIdController,
  getAllUsersController,
  findUserByEmailController,
  deleteUserByIdController,
  updateUserByIdController,
} from "../controllers/userController.js";
import {managerOnly} from "../middleware/mangerOnlyMiddleware.js";
import {protect} from "../middleware/protectMiddleware.js";
import express from "express";  

const router = express.Router();

router.get('/user/:id', protect, getUserByIdController);
router.get('/users', protect, managerOnly, getAllUsersController);
router.post('/user/email', protect, findUserByEmailController);
router.put('/user/:id', protect, managerOnly, updateUserByIdController);
router.delete('/user/:id', protect, managerOnly, deleteUserByIdController);

export default router;
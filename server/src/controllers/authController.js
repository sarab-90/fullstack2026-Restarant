import { createUser } from "../models/authModel.js";
import { findUserByEmail } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { asyncHandler } from "../middleware/asyncHandlerMiddleware.js";

export const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.validateData;
  try {
    const existedUser = await findUserByEmail(email);
    if (existedUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser(username, email, hashedPassword, "{user}");
    if (!newUser) {
      return res.status(400).json({ message: "Failed to create user" });
    }
    return res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "interal server error , in register" });
  }
});
// login logic
export const login = asyncHandler( async (req, res) => {
  const { email, password } = req.validateData;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const isExistedUser = await findUserByEmail(email);
    if (!isExistedUser) {
      return res
        .status(400)
        .json({ message: "User not registered, please register first" });
    }
    const isMatch = await bcrypt.compare(
      password,
      isExistedUser.hashed_password,
    );
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Email or password is incorrect" });
    }
    return res
      .status(200)
      .json({
        message: "Logged in successfully",
        user: {
          id: isExistedUser.id,
          username: isExistedUser.username,
          email: isExistedUser.email,
          role: isExistedUser.role,
        },
      });
  } catch (error) {
    return res.status(500).json({ message: "interal server error , in login" });
  }
});

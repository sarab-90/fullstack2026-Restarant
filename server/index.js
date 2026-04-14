import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./src/config/db.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import menuRoutes from "./src/routes/menuRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import { errorHandler } from "./src/middleware/errorHandlerMiddleware.js";
import { globalRateLimitMiddleware } from "./src/middleware/globalRateLimitMiddleware.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(globalRateLimitMiddleware); // Apply rate limiting to all routes
app.use(helmet());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", menuRoutes);
app.use("/api", categoryRoutes);

app.use(errorHandler);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
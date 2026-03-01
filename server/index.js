import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./src/config/db.js";

import authRoutes from "./src/routes/authRoutes.js";
import { errorHandler } from "./src/middleware/errorHandlerMiddleware.js";

dotenv.config();
connectDB();

const app = express();
app.use(helmet());
app.use(cors({
    origin: "http://localhost:5173",
    withCredentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use("/api", authRoutes);


app.use(errorHandler);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
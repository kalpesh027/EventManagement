import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/features.js';
// importing routes
import userRoute from './routes/userRoute.js';
dotenv.config();
const port = 3000;
const app = express();
app.use(express.json());
// Connect to MongoDB
connectDB();
// usign Routes
app.use("/api/v1/user", userRoute);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

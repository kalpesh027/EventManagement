import express from 'express';
import { registerUser } from '../controller/userController.js';
const app = express.Router();
app.post('/signUp', registerUser);
export default app;

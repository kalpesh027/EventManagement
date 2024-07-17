import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import { NewUserRequestBody } from '../types/types.js';


export const registerUser = async (req: Request<{},{},NewUserRequestBody>, res: Response, next: NextFunction) => {

    const { name, email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();
  
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
  
      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };

import mongoose, { Document, Schema } from 'mongoose';
import validator from 'validator';

interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
    googleId?: string;
    profileImage?: string;
    roles: string[];
    mobileNumber?: string;
    college: string;
    course?: string;
    admissionYear?: string;
    completionYear?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
  }

  const userSchema: Schema<IUser> = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: validator.default.isEmail,
    },
    password: {
      type: String,
      required: true
    }, 
    googleId: {
     type: String 
    },
    profileImage: {
     type: String 
    },
    roles: {
        type: [String],
        default: ['user'],
        enum:['participant','user', 'admin'],
        required: true
    },
    mobileNumber: {
        type: String,
        validate: validator.default.isMobilePhone
    },
    college: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    admissionYear: {
        type: String,
        required: true
    },
    completionYear: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true 
  },
);
  
  const User = mongoose.model<IUser>('User', userSchema);
  export default User;
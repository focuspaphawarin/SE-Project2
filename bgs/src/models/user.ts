import mongoose, { Document, Model } from "mongoose";

// Define interface for User document
interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    phone_number: string;
    address: string;
    role: string;
}

// Define mongoose schema for User
const UserSchema = new mongoose.Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
    address: { type: String, required: true },
    role: { type: String, required: true }
});

// Create mongoose model for User
const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export default User;

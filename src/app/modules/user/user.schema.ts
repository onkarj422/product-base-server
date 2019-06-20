import * as mongoose from 'mongoose';
import { Auth } from './user.interface';

export const AuthSchema = new mongoose.Schema({
    provider: String,
    id: String,
});

export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    contact: Number,
    age: Number,
    gender: String,
    dateCreated: { type: Date, default: Date.now },
    auth: { type: AuthSchema, default: null },
});

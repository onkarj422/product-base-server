import * as mongoose from 'mongoose';

export const ProviderSchema = new mongoose.Schema({
    provider: String,
    id: String,
});

export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    displayPicture: String,
    password: String,
    contact: Number,
    age: Number,
    gender: String,
    dateCreated: { type: Number, default: Date.now() },
    provider: { type: ProviderSchema, default: null },
});

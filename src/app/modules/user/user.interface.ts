import { Document } from 'mongoose';

export interface Provider {
    readonly provider: string;
    readonly id: string;
}

export interface User extends Document {
    firstName: string;
    lastName: string;
    displayPicture?: string;
    password?: string;
    contact?: number;
    email?: string;
    age?: string;
    gender?: string;
    dateCreated: number;
    provider?: Provider;
}

import { Document } from 'mongoose';

export interface Provider {
    readonly provider: string;
    readonly id: string;
}

export interface User extends Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly password: string;
    readonly contact: number;
    readonly email: string;
    readonly age: string;
    readonly gender: string;
    readonly dateCreated: Date;
    readonly provider?: Provider;
}

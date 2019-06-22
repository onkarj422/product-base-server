import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber } from 'class-validator';
import { IsRequiredForProvider } from './validators/password.required';
import { ProviderDTO } from './user.provider.dto';

export class CreateUserDTO {

    @IsNotEmpty()
    readonly firstName: string;

    @IsNotEmpty()
    readonly lastName: string;

    @IsRequiredForProvider()
    readonly password: string;

    @IsRequiredForProvider()
    @IsPhoneNumber('IN')
    readonly contact: number;

    @IsNumber()
    readonly age: number;

    readonly gender: string;

    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsNumber()
    readonly dateCreated: number;

    readonly provider: ProviderDTO;
}

import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    Validator } from 'class-validator';
import { UserService } from '../../user.service';
import { Provider } from '../../../../authentication/providers/constants';

@ValidatorConstraint({ async: true })
export class IsRequiredForProviderConstraints implements ValidatorConstraintInterface {

    constructor(private userService: UserService) {}

    validate(value: any, args: ValidationArguments) {
        const provider = this.userService.getProvider();
        const validator = new Validator();
        let isValid = false;
        if (provider === Provider.GOOGLE || provider === Provider.FACEBOOK) {
            isValid = true;
        } else if (validator.isNotEmpty(value)) {
            isValid = true;
        }
        return isValid;
    }

}

export function IsRequiredForProvider(validationOptions?: ValidationOptions) {
   return (object: object, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsRequiredForProviderConstraints,
        });
   };
}

import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { UserService } from '../modules/user/user.service';
import { User } from '../modules/user/user.interface';
import { Provider } from './providers/constants';

@Injectable()
export class AuthenticationService {
    private readonly JWT_SECRET_KEY = '#1234%';

    constructor(private readonly userService: UserService) {}

    async validateOAuth(profile, provider: Provider) {
        console.log(profile, provider);
        const { id } = profile;
        try {
            this.userService.setProvider(provider);
            let user: User = await this.userService.findOne({ id });
            if (!user) {
                user = await this.userService.generateUser(profile, provider);
            }

        } catch (err) {
            throw err;
        }
    }
}

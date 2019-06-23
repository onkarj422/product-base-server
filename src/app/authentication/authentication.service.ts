import { Injectable, UnauthorizedException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { UserService } from '../modules/user/user.service';
import { User } from '../modules/user/user.interface';
import { AuthProvider } from 'src/app/authentication/constants';
import { privateKEY } from './jwt/utils';

@Injectable()
export class AuthenticationService {

    constructor(private readonly userService: UserService) {}

    public async validateGoogleAuth(profile) {
        const { id } = profile;
        try {
            this.userService.setProvider(AuthProvider.GOOGLE);
            let user: User = await this.userService.findOne({ provider: { id } });
            if (!user && profile) {
                user = await this.userService.createFromProfile(profile, AuthProvider.GOOGLE);
            }
            const jwt = await this.createJWT(user);
            return jwt;
        } catch (err) {
            throw new UnauthorizedException(err);
        }
    }

    public async createJWT(user) {
        const signOptions = {
            expiresIn: '48h',
            algorithm: 'RS256',
        };
        const jwt: string = sign(JSON.parse(JSON.stringify(user)), privateKEY, signOptions);
        return jwt;
    }
}

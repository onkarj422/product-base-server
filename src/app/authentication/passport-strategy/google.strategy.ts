import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthProvider } from '../constants';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, AuthProvider.GOOGLE) {

    constructor(private readonly authService: AuthenticationService) {
        super({
            clientID: '683474798249-nmf83pb8h3jikam8gosghks8vq6gpluh.apps.googleusercontent.com',     // <- Replace this with your client id
            clientSecret: 'Uv6yRhDMvrOl7LGkwDw7wUfE', // <- Replace this with your client secret
            callbackURL: 'http://localhost:8080/api/auth/google/callback',
            passReqToCallback: true,
            scope: ['profile'],
        });
    }

    async validate(request: any, accessToken: string, refreshToken: string, profile, done) {
        try {
            const jwt: string = await this.authService.validateGoogleAuth(profile);
            const user = { jwt };
            done(null, user);
        } catch (err) {
            // console.log(err)
            done(err, false);
        }
    }
}

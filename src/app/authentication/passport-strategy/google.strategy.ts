import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

    constructor() {
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
            console.log(profile);

            const jwt: string = 'placeholderJWT';
            const user = {
                jwt,
            };

            done(null, user);
        } catch (err) {
            // console.log(err)
            done(err, false);
        }
    }
}

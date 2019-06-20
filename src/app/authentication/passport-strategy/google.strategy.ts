import { Injectable } from 'src/app/authentication/passport-strategy/node_modules/@nestjs/common';
import { PassportStrategy } from 'src/app/authentication/passport-strategy/node_modules/@nestjs/passport';
import { Strategy } from 'src/app/authentication/passport-strategy/node_modules/passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

    constructor() {
        super({
            clientID: '309182036165-ql1okud4crrgor0akqh84mp44shg1d3p.apps.googleusercontent.com',     // <- Replace this with your client id
            clientSecret: 'P5FDOjyBHbBvrFqnOipoqezi', // <- Replace this with your client secret
            callbackURL: 'http://localhost:4200/auth/google/callback',
            passReqToCallback: true,
            scope: ['profile', 'email'],
        });
    }

    async validate(request: any, accessToken: string, refreshToken: string, profile, done: (x, y) => void) {
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

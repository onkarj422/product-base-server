import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { GoogleStrategy } from './passport-strategy/google.strategy';
import { UserModule } from '../modules/user/user.module';

@Module({
    imports: [UserModule],
    controllers: [
        AuthenticationController,
    ],
    providers: [
        AuthenticationService,
        GoogleStrategy,
    ],
})
export class AuthenticationModule {}

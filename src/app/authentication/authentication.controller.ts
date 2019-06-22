import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/auth')
export class AuthenticationController {

    @Get('google')
    @UseGuards(AuthGuard('google'))
    public async loginGoogle() {
        console.log("Yetay?");
        // google login
    }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleLoginCallback(@Req() req, @Res() res) {
        // handles the Google OAuth2 callback
        const jwt: string = req.user.jwt;
        if (jwt) {
            res.redirect('http://localhost:4200/login/succes/' + jwt);
        } else {
            res.redirect('http://localhost:4200/login/failure');
        }
    }
}

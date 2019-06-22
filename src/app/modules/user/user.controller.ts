import { Controller, UsePipes, ValidationPipe, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/user.create.dto';
import { User } from './user.interface';
import { RestController } from '../../base';

@Controller('api/user')
@UsePipes(new ValidationPipe({
    transform: true,
}))
export class UserController extends RestController<CreateUserDTO, User> {
    constructor(protected service: UserService) {
        super();
    }

    @Post('/')
    public async create(@Body() dto: CreateUserDTO): Promise<User> {
        return this.service.create(dto);
    }
}

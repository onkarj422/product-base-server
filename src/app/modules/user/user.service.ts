import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { CreateUserDTO } from './dto/user.create.dto';
import { CrudService } from '../../base';

export enum Provider {
    GOOGLE = 'google',
    FACEBOOK = 'facebook',
}

@Injectable()
export class UserService extends CrudService<User, CreateUserDTO> {
    constructor(@InjectModel('User') protected readonly model: Model<User>) {
        super();
    }

    private provider: Provider;

    public async findOne(options: object) {
        return this.model.findOne({ options }).exec();
    }

    public async generateUser(userData: object, provider) {
        const user = null;
        return user;
    }

    public setProvider(provider) {
        this.provider = provider;
    }

    public getProvider() {
        return this.provider;
    }
}

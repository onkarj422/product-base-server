import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { CreateUserDTO } from './dto/user.create.dto';
import { CrudService } from '../../base';
import { AuthProvider } from 'src/app/authentication/constants';
import { generateUserFromProfile } from './utils';

@Injectable()
export class UserService extends CrudService<User, CreateUserDTO> {
    constructor(@InjectModel('User') protected readonly model: Model<User>) {
        super();
    }

    private provider: AuthProvider;

    public async findOne(options: object) {
        return this.model.findOne({ options }).exec();
    }

    public async create(user: CreateUserDTO): Promise<User> {
        const createdUser = await this.model(user);
        return createdUser.save();
    }

    public async createFromProfile(profile: object, provider: AuthProvider) {
        let user = null;
        if (typeof generateUserFromProfile[provider] === 'function') {
            const userObject = generateUserFromProfile[provider](profile);
            user = await this.create(userObject);
        }
        return user;
    }

    public setProvider(provider) {
        this.provider = provider;
    }

    public getProvider() {
        return this.provider;
    }
}

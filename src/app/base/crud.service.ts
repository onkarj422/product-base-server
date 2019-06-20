import { Model } from 'mongoose';

export class CrudService<T, DTO> {
    protected model: Model<T>;

    public async findAll(): Promise<T[]> {
        return this.model.find().exec();
    }

    public async findOneById(id: any): Promise<T> {
        return this.model.findById(id).exec();
    }
    // post a single User
    public async create(dto: DTO): Promise<T> {
        const newDto = await this.model(dto);
        return newDto.save();
    }
}

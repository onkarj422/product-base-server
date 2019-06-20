import {Body, Get, Param, Post } from '@nestjs/common';
import { ObjectIdDTO } from '../dto/object.id.dto';
import { CrudService } from './crud.service';

export class RestController<DTO, T> {
    protected service: CrudService<T, DTO>;

    @Get('/:id')
    public async findOneById(@Param() param: ObjectIdDTO) {
        return this.service.findOneById(param.id);
    }

    @Get('/')
    public async findAll() {
        return this.service.findAll();
    }

    @Post('/')
    public async create(@Body() dto: DTO): Promise<T> {
        return this.service.create(dto);
    }
}

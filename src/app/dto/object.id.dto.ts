import { IsMongoId } from 'class-validator';

export class ObjectIdDTO {
    @IsMongoId()
    readonly id: string;
}

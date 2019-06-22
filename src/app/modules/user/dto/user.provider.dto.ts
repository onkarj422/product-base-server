import { IsNotEmpty } from 'class-validator';

export class ProviderDTO {

    @IsNotEmpty()
    readonly provider: string;

    readonly id: any;
}

import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateGyerekDto {
    @IsString()
    @IsNotEmpty()
    nev: string

    @IsString()
    @IsNotEmpty()
    lakcim: string

    @IsBoolean()
    @IsNotEmpty()
    jo: boolean

    @IsString()
    @IsOptional()
    kerJatek: string
}
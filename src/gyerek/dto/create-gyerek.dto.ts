import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

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
    kerJatek: string
}
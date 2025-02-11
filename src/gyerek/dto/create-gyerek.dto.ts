import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateGyerekDto {

    /**
     * Gyerek neve
     */
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: 'Nagy Laci'
    })
    nev: string


    /**
     * A gyerek lakcíme
     */
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: '1111 Budapest, Teszt utca 1'
    })
    lakcim: string


    /**
     * Jó volt e a gyerek
     */
    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        example: 'true'
    })
    jo: boolean


    /**
     * Kért játéka
     */
    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'Tigris tank'
    })
    kerJatek: string
}
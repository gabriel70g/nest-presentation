import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreatePokemonDto {


    @ApiProperty()
    @IsString()
    @MinLength(3)
    name: string;

    @ApiProperty()
    @IsString()
    @MinLength(3)
    url: string;

}

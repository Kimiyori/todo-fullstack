import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateSectionDto {
  @IsNumber()
  @ApiProperty()
  id: number;
  @IsString()
  @MaxLength(140)
  @ApiProperty()
  name: string;
}
export class CreateSectionDtoIn extends PickType(CreateSectionDto, ['name'] as const) {}

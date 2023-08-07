import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, IsNumber } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @MaxLength(140)
  @ApiProperty()
  name: string;
  @IsString()
  @ApiProperty()
  text: string;
  @IsNumber()
  @ApiProperty()
  sectionId: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, IsNumber } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @MaxLength(140)
  @ApiProperty()
  name: string;
  @IsNumber()
  @ApiProperty()
  sectionId: number;
  @IsString()
  @ApiProperty()
  category: 'NewTask' | 'InProcess' | 'Completed';
}

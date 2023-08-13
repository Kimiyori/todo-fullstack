import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MaxLength } from 'class-validator';
export class ItemEntity {
  @IsNumber()
  @ApiProperty()
  id: number;
  @IsString()
  @MaxLength(140)
  @ApiProperty()
  name: string;
  @IsString()
  @ApiProperty()
  sectionId: string;
  @IsString()
  @ApiProperty()
  category: 'NewTask' | 'InProcess' | 'Completed';
}

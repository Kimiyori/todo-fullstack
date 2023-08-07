import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MaxLength, IsArray } from 'class-validator';
import { ItemEntity } from '../../item/entity/item.entity';
export class SectionEntity {
  @IsNumber()
  @ApiProperty()
  id: number;
  @IsString()
  @MaxLength(140)
  @ApiProperty()
  name: string;
  @IsArray()
  @ApiProperty()
  items: ItemEntity[];
}

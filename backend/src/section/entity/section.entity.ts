import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsNumber, IsString, MaxLength } from 'class-validator';
import { ItemEntity } from '../../item/entity/item.entity';

class CountItems {
  @ApiProperty()
  items: number;
}

export class SectionEntity {
  @IsNumber()
  @ApiProperty()
  id: number;
  @IsString()
  @MaxLength(140)
  @ApiProperty()
  name: string;
  @ApiProperty({ isArray: true, type: ItemEntity })
  items: ItemEntity[];
  @ApiProperty({ type: CountItems })
  _count: CountItems;
}
export class SectionEntityWithoutItems extends OmitType(SectionEntity, ['items'] as const) {}

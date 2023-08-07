import { PartialType, PickType } from '@nestjs/swagger';
import { CreateSectionDto } from './create-section.dto';

export class UpdateSectionDto extends PartialType(PickType(CreateSectionDto, ['name'] as const)) {}

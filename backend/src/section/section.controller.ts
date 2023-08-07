import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SectionService } from './section.service';
import { CreateSectionDtoIn } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SectionEntity } from './entity/section.entity';

@ApiTags('section')
@Controller('section')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  @ApiOperation({ description: 'Create todo section' })
  @ApiResponse({
    status: 201,
    description: 'Created instance',
    type: SectionEntity,
  })
  async create(@Body() createSectionDto: CreateSectionDtoIn) {
    return await this.sectionService.create(createSectionDto);
  }

  @Get()
  @ApiOperation({ description: 'Return all section instances' })
  @ApiResponse({
    status: 200,
    description: 'All section instances',
    type: SectionEntity,
    isArray: true,
  })
  async findAll() {
    return await this.sectionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: 'Return section instance' })
  @ApiResponse({
    status: 200,
    description: 'Found instance',
    type: SectionEntity,
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.sectionService.findOne({ id: id });
  }

  @Patch(':id')
  @ApiOperation({ description: 'Update section' })
  @ApiResponse({
    status: 200,
    description: 'Successfuly updated instance',
    type: SectionEntity,
  })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateSectionDto: UpdateSectionDto) {
    return await this.sectionService.update({
      where: { id: id },
      data: updateSectionDto,
    });
  }

  @Delete(':id')
  @ApiOperation({ description: 'Delete section' })
  @ApiResponse({
    status: 200,
    description: 'Successfuly deleted instance',
    type: SectionEntity,
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.sectionService.remove({ id: id });
  }
}

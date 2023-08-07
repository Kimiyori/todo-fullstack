import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ItemEntity } from './entity/item.entity';

@ApiTags('item')
@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  @ApiOperation({ description: 'Create todo item' })
  @ApiResponse({
    status: 201,
    description: 'Created instance',
    type: ItemEntity,
  })
  async create(@Body() createItemDto: CreateItemDto) {
    return await this.itemService.create(createItemDto);
  }

  @Get()
  @ApiOperation({ description: 'Return all шеуь instances' })
  @ApiResponse({
    status: 200,
    description: 'All item instances',
    type: ItemEntity,
    isArray: true,
  })
  async findAll() {
    return await this.itemService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: 'Return item instance' })
  @ApiResponse({
    status: 200,
    description: 'Found instance',
    type: ItemEntity,
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.itemService.findOne({ id: id });
  }

  @Patch(':id')
  @ApiOperation({ description: 'Update item' })
  @ApiResponse({
    status: 200,
    description: 'Successfuly updated instance',
    type: ItemEntity,
  })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateitemDto: UpdateItemDto) {
    return await this.itemService.update({
      where: { id: id },
      data: updateitemDto,
    });
  }

  @Delete(':id')
  @ApiOperation({ description: 'Delete item' })
  @ApiResponse({
    status: 200,
    description: 'Successfuly deleted instance',
    type: ItemEntity,
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.itemService.remove({ id: id });
  }
}

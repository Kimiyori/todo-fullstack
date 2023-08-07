import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateItemDto) {
    return await this.prisma.item.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.item.findMany();
  }

  async findOne(data: Prisma.ItemWhereUniqueInput) {
    return this.prisma.item.findFirstOrThrow({
      where: data,
    });
  }

  async update(params: { where: Prisma.ItemWhereUniqueInput; data: Prisma.ItemUpdateInput }) {
    const { data, where } = params;
    return await this.prisma.item.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.ItemWhereUniqueInput) {
    return await this.prisma.item.delete({
      where,
    });
  }
}

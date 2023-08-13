import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.ItemCreateInput) {
    return await this.prisma.item.create({
      data,
    });
  }

  async findAll(sectionId?: number) {
    const whereSection = sectionId && {
      where: {
        sectionId: +sectionId,
      },
    };
    return await this.prisma.item.findMany({ ...whereSection });
  }

  async findOne(data: Prisma.ItemWhereUniqueInput) {
    return this.prisma.item.findFirstOrThrow({
      where: data,
    });
  }

  async update(params: { where: Prisma.ItemWhereUniqueInput; data: Prisma.ItemUpdateInput }) {
    const { data, where } = params;
    return await this.prisma.item.update({
      where,
      data,
    });
  }

  async remove(where: Prisma.ItemWhereUniqueInput) {
    return await this.prisma.item.delete({
      where,
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class SectionService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.SectionCreateInput) {
    return await this.prisma.section.create({
      data,
      include: {
        _count: {
          select: { items: true },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.section.findMany({
      include: {
        _count: {
          select: { items: true },
        },
      },
    });
  }

  async findOne(data: Prisma.SectionWhereUniqueInput) {
    return this.prisma.section.findFirstOrThrow({
      where: data,
    });
  }

  async update(params: { where: Prisma.SectionWhereUniqueInput; data: Prisma.SectionUpdateInput }) {
    const { data, where } = params;
    return await this.prisma.section.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.SectionWhereUniqueInput) {
    return await this.prisma.section.delete({
      where,
    });
  }
}

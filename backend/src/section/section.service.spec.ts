import { Test, TestingModule } from '@nestjs/testing';
import { SectionService } from './section.service';
import { PrismaService } from 'nestjs-prisma';
import { mockSection } from '../utils/mockData';
import { prismaMock } from '../utils/testDb';

describe('SectionService', () => {
  let service: SectionService;
  const mockSectionData = mockSection();
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SectionService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(prismaMock)
      .compile();

    service = module.get<SectionService>(SectionService);
  });
  test('create section', async () => {
    prismaMock.section.create.mockResolvedValue(mockSectionData);
    await expect(service.create(mockSectionData)).resolves.toEqual(mockSectionData);
  });
  test('find all section', async () => {
    prismaMock.section.findMany.mockResolvedValue([mockSectionData]);
    await expect(service.findAll()).resolves.toEqual([mockSectionData]);
  });
  test('find one section', async () => {
    prismaMock.section.findFirstOrThrow.mockResolvedValue(mockSectionData);
    await expect(service.findOne({ id: mockSectionData.id })).resolves.toEqual(mockSectionData);
  });
  test('update section', async () => {
    prismaMock.section.update.mockResolvedValue(mockSectionData);
    await expect(service.update({ where: { id: mockSectionData.id }, data: mockSectionData })).resolves.toEqual(
      mockSectionData,
    );
  });
  test('remove section', async () => {
    prismaMock.section.delete.mockResolvedValue(mockSectionData);
    await expect(service.remove({ id: mockSectionData.id })).resolves.toEqual(mockSectionData);
  });
});

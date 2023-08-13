import { Test, TestingModule } from '@nestjs/testing';
import { ItemService } from './item.service';
import { mockItem } from '../utils/mockData';
import { PrismaService } from 'nestjs-prisma';
import { prismaMock } from '../utils/testDb';

describe('ItemService', () => {
  let service: ItemService;
  const mockItemData = mockItem();
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(prismaMock)
      .compile();

    service = module.get<ItemService>(ItemService);
  });
  test('create section', async () => {
    prismaMock.item.create.mockResolvedValue(mockItemData);
    await expect(service.create(mockItemData)).resolves.toEqual(mockItemData);
  });
  test('find all section', async () => {
    prismaMock.item.findMany.mockResolvedValue([mockItemData]);
    await expect(service.findAll()).resolves.toEqual([mockItemData]);
  });
  test('find one section', async () => {
    prismaMock.item.findFirstOrThrow.mockResolvedValue(mockItemData);
    await expect(service.findOne({ id: mockItemData.id })).resolves.toEqual(mockItemData);
  });
  test('update section', async () => {
    prismaMock.item.update.mockResolvedValue(mockItemData);
    await expect(service.update({ where: { id: mockItemData.id }, data: mockItemData })).resolves.toEqual(mockItemData);
  });
  test('remove section', async () => {
    prismaMock.item.delete.mockResolvedValue(mockItemData);
    await expect(service.remove({ id: mockItemData.id })).resolves.toEqual(mockItemData);
  });
});

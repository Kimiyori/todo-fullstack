import { faker } from '@faker-js/faker';

export const mockSection = () => {
  return {
    id: faker.number.int(),
    name: faker.string.sample({ min: 1, max: 140 }),
  };
};
export const mockItem = () => {
  return {
    id: faker.number.int(),
    name: faker.string.sample({ min: 1, max: 140 }),
    text: faker.string.sample(),
    sectionId: faker.number.int(),
  };
};

import { ToDoCategoriesType } from 'types/Main';
export const ToDoCategoriesNames = {
  New: 'NewTask',
  InProcess: 'InProcess',
  Completed: 'Completed',
};

export const toDoCategories: ToDoCategoriesType[] = [
  {
    name: ToDoCategoriesNames.New,
    bgColor: '58,253,45',
  },
  {
    name: ToDoCategoriesNames.InProcess,
    bgColor: '255,224,45',
  },
  {
    name: ToDoCategoriesNames.Completed,
    bgColor: '249,0,0',
  },
];

import { ToDo } from './ToDo';
import taxios from './meta';

export const getallSectionItems = async (id: number) => {
  const res = await taxios.get('/section/{id}', { params: { id: id }, query: { includeItems: true } });
  return res.data;
};

export const createItem = async (name: string, id: number) => {
  const res = await taxios.post('/item', {
    name: name,
    sectionId: id,
    category: 'NewTask',
  });
  return res.data;
};

export const deleteItem = async (id: number) => {
  await taxios.delete('/section/{id}', { params: { id: id } });
};

export const updateItem = async (id: number, data: ToDo.UpdateItemDto) => {
  const res = await taxios.patch('/item/{id}', data, { params: { id: id } });
  return res.data;
};

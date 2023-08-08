import taxios from './meta';

export const getallSections = async () => {
  const res = await taxios.get('/section');
  return res.data;
};

export const createSection = async (name: string) => {
  const res = await taxios.post('/section', {
    name: name,
  });
  return res.data;
};

export const deleteSection = async (id: number) => {
  await taxios.delete('/section/{id}', { params: { id: id } });
};

export const updateSection = async (id: number, name: string) => {
  const res = await taxios.patch('/section/{id}', { name: name }, { params: { id: id } });
  return res.data;
};

import { getallSections } from 'api/section';
import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

export const sectionList = atomWithDefault(async () => await getallSections());
export const sectionFilterString = atom('');
export const filteredSectionList = atom(async (get) => {
  const currList = await get(sectionList);
  const filterStr = get(sectionFilterString);
  return currList.filter((item) => item.name.toLowerCase().includes(filterStr.toLowerCase()));
});

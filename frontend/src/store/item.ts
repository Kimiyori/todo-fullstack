import { getallSectionItems } from 'api/item';
import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

export const itemId = atomWithDefault<number | null>(() => {
  const loc = window.location.href;
  return Number(loc.match(/\d+$/gm)?.[0]);
});
export const itemList = atomWithDefault(async (get) => {
  return await getallSectionItems(Number(get(itemId)));
});
export const itemFilterString = atom('');
export const filteredItemsList = atom(async (get) => {
  const currList = await get(itemList);
  const filterStr = get(itemFilterString);
  return currList.filter((item) => item.name.toLowerCase().includes(filterStr.toLowerCase()));
});

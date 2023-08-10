import Board from 'components/core/Board/Board';
import InputAddTask from 'components/shared/fields/InputAddTask/InputAdd';
import ToDoContainer from 'components/shared/todo/ToDoContainer';
import InputFilter from 'components/shared/fields/InputFilter/InputFilter';
import { itemFilterString, itemId, itemList, sectionAtom } from 'store/item';
import { useAtomValue, useSetAtom } from 'jotai';
import { createItem } from 'api/item';
import { FC, Suspense } from 'react';

const ToDo: FC = () => {
  const addItem = useSetAtom(itemList);
  const currId = useAtomValue(itemId);
  const handleCreateItem = async (itemName: string, setError: (value: string) => void) => {
    if (!itemName.trim().length) {
      setError('Empty task is invalid');
    } else if (itemName.trim().length > 140) {
      setError('Task is too long');
    } else {
      const newItem = await createItem(itemName, Number(currId));
      addItem(async (section) => {
        (await section)?.push(newItem);
        return section;
      });
    }
  };
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ToDoBoard />
      </Suspense>
      <div>
        <InputAddTask handleCreate={handleCreateItem} />
        <InputFilter filterStringAtom={itemFilterString} />
      </div>
      <ToDoContainer />
    </>
  );
};

const ToDoBoard = () => {
  const sectionData = useAtomValue(sectionAtom);
  return <Board title={sectionData.name} />;
};

export default ToDo;

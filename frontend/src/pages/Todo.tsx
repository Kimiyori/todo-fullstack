import Board from 'components/core/Board/Board';
import InputAddTask from 'components/shared/fields/InputAddTask/InputAdd';
import ToDoContainer from 'components/shared/todo/ToDoContainer';
import InputFilter from 'components/shared/fields/InputFilter/InputFilter';
import { itemFilterString, itemId, itemList } from 'store/item';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { createItem } from 'api/item';

const ToDo = () => {
  const addItem = useSetAtom(itemList);
  const [filterString, setFilterString] = useAtom(itemFilterString);
  const currId = useAtomValue(itemId);
  const handleCreateItem = async (itemName: string, setError: (value: string) => void) => {
    if (!itemName.trim().length) {
      setError('Empty task is invalid');
    } else if (itemName.trim().length > 140) {
      setError('Task is too long');
    } else {
      const newItem = await createItem(itemName, Number(currId));
      addItem(async (section) => {
        (await section).push(newItem);
        return section;
      });
    }
  };
  return (
    <>
      <Board title={'To Do List'} />
      <div>
        <InputAddTask handleCreate={handleCreateItem} />
        <InputFilter filterString={filterString} setFilterString={setFilterString} />
      </div>
      <ToDoContainer />
    </>
  );
};

export default ToDo;

import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import InputForm from 'components/core/Input/Input';
import Button from 'components/core/Button/Button';
import Tooltip from 'components/core/Tooltip/Tooltip';
import useError from 'hooks/useError';
import { ToDo } from 'api/ToDo';
import { updateItem } from 'api/item';
import { itemList } from 'store/item';
import { useSetAtom } from 'jotai';

type ToDoEditItemProps = {
  data: ToDo.ItemEntity;
  toggleFrom: () => void;
  currentTask: string;
  setCurrentTask: Dispatch<SetStateAction<string>>;
};

const ToDoEditItem: FC<ToDoEditItemProps> = ({ data, toggleFrom, currentTask, setCurrentTask }) => {
  const setItem = useSetAtom(itemList);
  const handleCancel = () => {
    setCurrentTask(data.name);
    toggleFrom();
  };
  const { error, setError } = useError();
  const handleUpdate = async () => {
    if (!currentTask.trim().length) {
      setError('Empty task is invalid');
    } else if (currentTask.trim().length > 140) {
      setError('Task is too long');
    } else {
      const updated = await updateItem(data.id, { name: currentTask.trim() });
      setItem(async (section) => (await section).map((item) => (item.id === updated.id ? updated : item)));
      toggleFrom();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentTask(event.target.value);
  };

  return (
    <>
      {error && <Tooltip content={error} />}
      <InputForm
        inputValue={currentTask}
        actionButtons={
          <>
            <Button text={'Save'} onClick={handleUpdate} />
            <Button text={'Cancel'} onClick={handleCancel} />
          </>
        }
        onChange={handleChange}
      />
    </>
  );
};
export default ToDoEditItem;

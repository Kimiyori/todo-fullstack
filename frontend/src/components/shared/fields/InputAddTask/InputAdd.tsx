import { ChangeEvent, FC, useCallback, useReducer, useState } from 'react';
import InputForm from 'components/core/Input/Input';
import Button from 'components/core/Button/Button';
import useError from 'hooks/useError';
import Tooltip from 'components/core/Tooltip/Tooltip';

type InputAddTaskProps = { handleCreate: (itemName: string, setError: (value: string) => void) => Promise<void> };

const InputAddTask: FC<InputAddTaskProps> = ({ handleCreate }) => {
  const [potentialString, setPotentialString] = useState('');
  const [isDisabled, toggleButton] = useReducer((currState) => !currState, false);
  const { error, setError } = useError();
  const clearTask = useCallback(() => setPotentialString(''), []);
  const handleCreateTask = async () => {
    toggleButton();
    await handleCreate(potentialString, setError);
    clearTask();
    toggleButton();
  };
  return (
    <>
      {error && <Tooltip content={error} />}
      <InputForm
        placeholder={'Add your new task'}
        inputValue={potentialString}
        actionButtons={<Button text={'Add new task'} onClick={handleCreateTask} isDisabled={isDisabled} />}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setPotentialString(event.target.value)}
      />
    </>
  );
};

export default InputAddTask;

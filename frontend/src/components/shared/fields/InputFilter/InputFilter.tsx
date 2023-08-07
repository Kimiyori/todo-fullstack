import { ChangeEvent, FC, useContext } from 'react';
import InputForm from 'components/core/Input/Input';
import { TasksContext } from 'context/TasksContext';
import Button from 'components/core/Button/Button';

const InputFilter: FC = () => {
  const { filterString, setFilterString } = useContext(TasksContext);
  const clearFilter = () => setFilterString('');
  return (
    <InputForm
      placeholder={'Filter works in real time'}
      inputValue={filterString}
      actionButtons={
        <>
          <Button isDisabled={true} text={'Filter tasks'} />
          <Button text={'Clear'} onClick={clearFilter} />
        </>
      }
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setFilterString(event.target.value)}
    />
  );
};
export default InputFilter;

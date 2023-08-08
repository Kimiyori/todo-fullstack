import { ChangeEvent, FC, startTransition } from 'react';
import InputForm from 'components/core/Input/Input';
import Button from 'components/core/Button/Button';
import { SetStateAction } from 'jotai';
type SetAtom<Args extends unknown[], Result> = (...args: Args) => Result;
const InputFilter: FC<{ filterString: string; setFilterString: SetAtom<[SetStateAction<string>], void> }> = ({
  filterString,
  setFilterString,
}) => {
  const clearFilter = () => startTransition(() => setFilterString(''));
  const changeFilter = (event: ChangeEvent<HTMLTextAreaElement>) =>
    startTransition(() => setFilterString(event.target.value));
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
      onChange={changeFilter}
    />
  );
};
export default InputFilter;

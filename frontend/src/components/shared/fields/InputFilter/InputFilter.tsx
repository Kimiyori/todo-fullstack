import { ChangeEvent, FC, startTransition } from 'react';
import InputForm from 'components/core/Input/Input';
import Button from 'components/core/Button/Button';
import { PrimitiveAtom, useAtom } from 'jotai';

type InputFilterProps = {
  filterStringAtom: PrimitiveAtom<string>;
};
const InputFilter: FC<InputFilterProps> = ({ filterStringAtom }) => {
  const [filterString, setFilterString] = useAtom(filterStringAtom);
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

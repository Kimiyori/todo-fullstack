import { updateSection } from 'api/section';
import Button from 'components/core/Button/Button';
import InputForm from 'components/core/Input/Input';
import Tooltip from 'components/core/Tooltip/Tooltip';
import useError from 'hooks/useError';
import { useSetAtom } from 'jotai';
import { ChangeEvent, FC, useState } from 'react';
import { sectionList } from 'store/section';

const SectionEdit: FC<{ id: number; name: string; toggleEdit: () => void }> = ({ id, name, toggleEdit }) => {
  const [sectionName, setSectionName] = useState(name);
  const setSection = useSetAtom(sectionList);
  const { error, setError } = useError();
  const handleUpdateSection = async () => {
    if (!sectionName.trim().length) {
      setError('Empty task is invalid');
    } else if (sectionName.trim().length > 140) {
      setError('Task is too long');
    } else {
      await updateSection(id, sectionName);
      setSection(async (currSections) =>
        (await currSections).map((section) => (section.id === id ? { ...section, ...{ name: sectionName } } : section)),
      );
      toggleEdit();
    }
  };

  const handleCancelUpdateSection = () => {
    setSectionName(name);
    toggleEdit();
  };
  return (
    <>
      {error && <Tooltip content={error} />}
      <InputForm
        inputValue={sectionName}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setSectionName(event.target.value)}
        actionButtons={
          <>
            <Button text="Save" onClick={handleUpdateSection} />
            <Button text="Cancel" onClick={handleCancelUpdateSection} />
          </>
        }
      />
    </>
  );
};
export default SectionEdit;

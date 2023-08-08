import { createSection } from 'api/section';
import Board from 'components/core/Board/Board';
import InputAddTask from 'components/shared/fields/InputAddTask/InputAdd';
import InputFilter from 'components/shared/fields/InputFilter/InputFilter';
import SectionContainer from 'components/shared/section/SectionContainer';
import { useAtom, useSetAtom } from 'jotai';
import { Suspense } from 'react';
import { sectionFilterString, sectionList } from 'store/section';

const SectionPage = () => {
  const addSection = useSetAtom(sectionList);
  const [filterString, setFilterString] = useAtom(sectionFilterString);
  const handleCreateSection = async (itemName: string, setError: (value: string) => void) => {
    if (!itemName.trim().length) {
      setError('Empty task is invalid');
    } else if (itemName.trim().length > 140) {
      setError('Task is too long');
    } else {
      const newSection = await createSection(itemName);
      addSection(async (section) => {
        (await section).push(newSection);
        return section;
      });
    }
  };
  return (
    <>
      <Board title="ToDo Sections" />
      <div>
        <InputAddTask handleCreate={handleCreateSection} />
        <InputFilter filterString={filterString} setFilterString={setFilterString} />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <SectionContainer />
      </Suspense>
    </>
  );
};
export default SectionPage;

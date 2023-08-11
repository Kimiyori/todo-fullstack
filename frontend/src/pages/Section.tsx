import { createSection } from 'api/section';
import axios from 'axios';
import Board from 'components/core/Board/Board';
import Spinner from 'components/core/LoadingElement/LoadingElement';
import InputAddTask from 'components/shared/fields/InputAddTask/InputAdd';
import InputFilter from 'components/shared/fields/InputFilter/InputFilter';
import SectionContainer from 'components/shared/section/SectionContainer';
import { useSetAtom } from 'jotai';
import { FC, Suspense } from 'react';
import { sectionFilterString, sectionList } from 'store/section';

const SectionPage: FC = () => {
  const addSection = useSetAtom(sectionList);
  const handleCreateSection = async (itemName: string, setError: (value: string) => void) => {
    if (!itemName.trim().length) {
      setError('Empty task is invalid');
    } else if (itemName.trim().length > 140) {
      setError('Task is too long');
    } else {
      try {
        const newSection = await createSection(itemName);
        addSection(async (section) => {
          (await section).push(newSection);
          return section;
        });
      } catch (error: unknown) {
        axios.isAxiosError(error) &&
          error.response?.data?.statusCode !== 201 &&
          setError(error.response?.data?.message);
      }
    }
  };
  return (
    <>
      <Board title="ToDo Sections" />
      <div>
        <InputAddTask handleCreate={handleCreateSection} />
        <InputFilter filterStringAtom={sectionFilterString} />
      </div>
      <Suspense fallback={<Spinner />}>
        <SectionContainer />
      </Suspense>
    </>
  );
};
export default SectionPage;

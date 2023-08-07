import Board from 'components/core/Board/Board';
import SectionCard from 'components/core/SectionCard/SectionCard';
import InputAddTask from 'components/shared/fields/InputAddTask/InputAdd';
import InputFilter from 'components/shared/fields/InputFilter/InputFilter';

const SectionPage = () => {
  return (
    <>
      <Board title='ToDo Sections' />
      <div>
        <InputAddTask />
        <InputFilter />
      </div>
      <SectionCard />
      <SectionCard />
    </>
  );
};
export default SectionPage;

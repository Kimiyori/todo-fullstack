import { deleteSection } from 'api/section';
import SectionEdit from 'components/shared/section/SectionEdit';
import { useSetAtom } from 'jotai';
import { FC, useReducer } from 'react';
import { sectionList } from 'store/section';
import Button from 'components/core/Button/Button';
import DeleteButton from 'components/shared/buttons/DeleteButton';
import { itemId } from 'store/item';
import { ToDo } from 'api/ToDo';
import { Link } from 'react-router-dom';
import { ButtonsWrapper, SectionContainer, SectionName } from './SectionCard.styles';

type SectionCardProps = { data: ToDo.SectionEntityWithoutItems };

const SectionCard: FC<SectionCardProps> = ({ data }) => {
  const [isEdit, toggleEdit] = useReducer((currState) => !currState, false);
  const setItemId = useSetAtom(itemId);
  const setSection = useSetAtom(sectionList);
  const handleDeleteSection = async () => {
    await deleteSection(data.id);
    setSection(async (currSections) => (await currSections).filter((item) => item.id !== data.id));
  };

  return (
    <SectionContainer>
      {isEdit ? (
        <SectionEdit id={data.id} name={data.name} toggleEdit={() => toggleEdit()} />
      ) : (
        <>
          <Link to={`/${data.id}`} onClick={() => setItemId(data.id)}>
            <SectionName text={data.name} disabled={true} />
          </Link>
          <p>Todo items: {data._count.items}</p>
          <ButtonsWrapper>
            <Button text="Update" onClick={toggleEdit} />
            <DeleteButton handleRemove={handleDeleteSection} />
          </ButtonsWrapper>
        </>
      )}
    </SectionContainer>
  );
};
export default SectionCard;

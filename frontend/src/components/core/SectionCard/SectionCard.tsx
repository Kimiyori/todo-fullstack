import { deleteSection } from 'api/section';
import SectionEdit from 'components/shared/section/SectionEdit';
import { useSetAtom } from 'jotai';
import { FC, useReducer } from 'react';
import { sectionList } from 'store/section';
import styled from 'styled-components';
import Button from 'components/core/Button/Button';
import DeleteButton from 'components/shared/buttons/DeleteButton';
import TextArea from 'components/core/TextArea/TextArea';
import CustomLink from 'components/core/Link/Link';
import { itemId } from 'store/item';
import { ToDo } from 'api/ToDo';

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
          <CustomLink to={`/${data.id}`} onClick={() => setItemId(data.id)}>
            <SectionName text={data.name} disabled={true} />
          </CustomLink>
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

const SectionContainer = styled.div`
  background: ${(props) => props.theme.color.Secondary};
  text-align: center;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const SectionName = styled(TextArea)`
  font-size: 24px;
  margin: 0;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

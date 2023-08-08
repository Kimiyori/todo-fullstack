import { deleteSection } from 'api/section';
import SectionEdit from 'components/shared/section/SectionEdit';
import { useSetAtom } from 'jotai';
import { FC, useReducer } from 'react';
import { sectionList } from 'store/section';
import styled from 'styled-components';
import Button from '../Button/Button';
import DeleteButton from 'components/shared/buttons/DeleteButton';
import TextArea from '../TextArea/TextArea';
import CustomLink from '../Link/Link';
import { itemId } from 'store/item';

const SectionCard: FC<{
  id: number;
  name: string;
  itemsCount: number;
}> = ({ id, name, itemsCount }) => {
  const [isEdit, toggleEdit] = useReducer((currState) => !currState, false);
  const setItemId = useSetAtom(itemId);
  const setSection = useSetAtom(sectionList);
  const handleDeleteSection = async () => {
    await deleteSection(id);
    setSection(async (currSections) => (await currSections).filter((item) => item.id !== id));
  };

  return (
    <SectionContainer>
      {isEdit ? (
        <SectionEdit id={id} name={name} toggleEdit={() => toggleEdit()} />
      ) : (
        <>
          <CustomLink to={`/${id}`} onClick={() => setItemId(id)}>
            <SectionName text={name} disabled={true} />
          </CustomLink>
          <p>Todo items: {itemsCount}</p>
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
`;
const SectionName = styled(TextArea)`
  font-size: 24px;
  margin: 0;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

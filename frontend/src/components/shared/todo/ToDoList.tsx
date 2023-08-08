import styled from 'styled-components';
import { DragEvent, FC, useContext } from 'react';
import { DragAndDropContext } from 'context/DragAndDropContext';
import { ToDoCategoriesType } from 'types/Main';
import ToDoItem from 'components/shared/todo/ToDoItem';
import { useAtomValue, useSetAtom } from 'jotai';
import { filteredItemsList, itemList } from 'store/item';
import { updateItem } from 'api/item';

type ToDoListProps = {
  status: ToDoCategoriesType;
};

const ToDoList: FC<ToDoListProps> = ({ status }) => {
  const { handleDragging } = useContext(DragAndDropContext);
  const setItem = useSetAtom(itemList);
  const handleDrop = async (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    const updated = await updateItem(+id, { category: status.name });
    setItem(async (section) => (await section).map((item) => (item.id === updated.id ? updated : item)));
    handleDragging(false);
  };
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const data = useAtomValue(filteredItemsList);
  return (
    <ToDoListContainer $bgColor={status.bgColor} onDragOver={handleDragOver} onDrop={handleDrop}>
      <h3>{status.name}</h3>
      {data.map((item) => status.name === item.category && <ToDoItem data={item} key={item.id} />)}
    </ToDoListContainer>
  );
};

export const ToDoListContainer = styled.div<{ $bgColor: string }>`
  width: 100%;
  min-height: 400px;
  text-align: center;
  background: ${(props) => props.theme.color.Secondary};
  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 0 4rem 0 4rem;
  }
  h3 {
    background: rgba(${(props) => props.$bgColor}, 0.3);
    margin: 0;
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

export default ToDoList;

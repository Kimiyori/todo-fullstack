import { styled } from 'styled-components';
import { DragAndDropContext, DragAndDropProvider } from 'context/DragAndDropContext';
import { toDoCategories } from 'data/main';
import ToDoList from 'components/shared/todo/ToDoList';
import { FC, Suspense, useContext, DragEvent } from 'react';
import { useSetAtom } from 'jotai';
import { updateItemAtom } from 'store/item';
import Spinner from 'components/core/LoadingElement/LoadingElement';

const ToDoContainer: FC = () => {
  const { handleDragging } = useContext(DragAndDropContext);
  const setItem = useSetAtom(updateItemAtom);
  const handleDrop = async (event: DragEvent<HTMLDivElement>, name: string) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    await setItem(id, { category: name });
    handleDragging(false);
  };
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <DragAndDropProvider>
      <CategoriesWrapper>
        {toDoCategories.map((category) => (
          <ToDoListContainer
            key={category.name}
            $bgColor={category.bgColor}
            onDragOver={handleDragOver}
            onDrop={(event: DragEvent<HTMLDivElement>) => handleDrop(event, category.name)}
          >
            <h3>{category.name}</h3>
            <Suspense fallback={<Spinner />}>
              <ToDoList status={category} />
            </Suspense>
          </ToDoListContainer>
        ))}
      </CategoriesWrapper>
    </DragAndDropProvider>
  );
};

const CategoriesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 2rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: row;
  }
`;
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

export default ToDoContainer;

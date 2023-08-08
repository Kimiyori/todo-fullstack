import { styled } from 'styled-components';
import { DragAndDropProvider } from 'context/DragAndDropContext';
import { toDoCategories } from 'data/main';
import ToDoList from 'components/shared/todo/ToDoList';
import { FC, Suspense } from 'react';

const ToDoContainer: FC = () => {
  return (
    <DragAndDropProvider>
      <CategoriesWrapper>
        {toDoCategories.map((category) => (
          <Suspense key={category.name} fallback={<div>loading...</div>}>
            <ToDoList status={category} />
          </Suspense>
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

export default ToDoContainer;

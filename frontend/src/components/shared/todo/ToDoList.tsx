import styled from 'styled-components';
import { DragEvent, FC, useContext } from 'react';
import { TasksContext } from 'context/TasksContext';
import { DragAndDropContext } from 'context/DragAndDropContext';
import { ToDoCategoriesType } from 'types/Main';
import ToDoItem from 'components/shared/todo/ToDoItem';

type ToDoListProps = {
  status: ToDoCategoriesType;
};

const ToDoList: FC<ToDoListProps> = ({ status }) => {
  const { todosFiltered, updateTask } = useContext(TasksContext);
  const { handleDragging } = useContext(DragAndDropContext);
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    updateTask(id, { status: status.name });
    handleDragging(false);
  };
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <ToDoListContainer $bgColor={status.bgColor} onDragOver={handleDragOver} onDrop={handleDrop}>
      <h3>{status.name}</h3>
      {todosFiltered.map((item) => status.name === item.status && <ToDoItem data={item} key={item.id} />)}
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

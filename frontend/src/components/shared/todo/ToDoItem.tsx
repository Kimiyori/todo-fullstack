import { FC, useReducer, useState } from 'react';
import { Data } from 'types/Main';
import Button from 'components/core/Button/Button';
import { styled } from 'styled-components';
import ToDoEditItem from 'components/shared/todo/ToDoEditItem';
import DeleteButton from 'components/shared/buttons/DeleteButton';
import TextArea from 'components/core/TextArea/TextArea';
import ToDoDragTask from 'components/shared/todo/ToDoTaskDnD';
import ToDoDropdown from 'components/shared/todo/ToDoDropdown';
import { devices } from 'data/breakpoints';
import useMediaQuery from 'hooks/useMediaQuery';

type ToDoItemProps = {
  data: Data;
};

const ToDoItem: FC<ToDoItemProps> = ({ data }) => {
  const [isEditing, toggleEditing] = useReducer((isEditing) => !isEditing, false);
  const [task, setTask] = useState(data.content);
  const isDesktop = useMediaQuery(devices.lg);
  return (
    <>
      {isEditing ? (
        <ToDoEditItem data={data} toggleFrom={toggleEditing} currentTask={task} setCurrentTask={setTask} />
      ) : (
        <TaskWrapper>
          <TextArea text={task} disabled={true} />
          <Button text={'Edit'} onClick={toggleEditing} />
          <DeleteButton taskId={data.id} />
          {isDesktop ? <ToDoDragTask taskId={data.id} /> : <ToDoDropdown taskId={data.id} />}
        </TaskWrapper>
      )}
    </>
  );
};

const TaskWrapper = styled.div`
  background: ${(props) => props.theme.color.Primary};
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid ${(props) => props.theme.color.Outline};
  margin: 0 1rem 1rem;
`;

export default ToDoItem;

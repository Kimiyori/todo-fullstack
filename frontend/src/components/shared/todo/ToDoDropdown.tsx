import { useReducer, MouseEvent, useContext, FC } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as Dropdown } from 'assets/Resume.svg';
import { TasksContext } from 'context/TasksContext';
import { toDoCategories } from 'data/main';

type ToDoDropdownProps = { taskId: string };

const ToDoDropdown: FC<ToDoDropdownProps> = ({ taskId }) => {
  const [isShow, toggleIsShow] = useReducer((isShow) => !isShow, false);
  const { updateTask } = useContext(TasksContext);
  const handleUpdateTask = (event: MouseEvent<HTMLLIElement>) => {
    updateTask(taskId, { status: (event.target as HTMLElement).textContent as string });
    toggleIsShow();
  };
  return (
    <ToDoDropdownContainer>
      <div>
        <Dropdown title={'DropdownButton'} onClick={toggleIsShow} />
      </div>
      {isShow && (
        <ToDoDropdownList>
          {toDoCategories.map((category) => (
            <DropdownItem onClick={handleUpdateTask} $color={category.bgColor} key={category.name}>
              {category.name}
            </DropdownItem>
          ))}
        </ToDoDropdownList>
      )}
    </ToDoDropdownContainer>
  );
};

const ToDoDropdownContainer = styled.div`
  position: relative;
  height: 100%;
  div {
    border-left: 1px solid ${(props) => props.theme.color.Outline};
  }
`;
const ToDoDropdownList = styled.ul`
  position: absolute;
  background-color: #f1f1f1;
  z-index: 1;
  list-style-type: none;
  margin: 0;
  padding: 0;
  right: 1px;
  top: 30px;
`;
const DropdownItem = styled.li<{ $color: string }>`
  text-decoration: none;
  padding: 0.5rem;
  background: rgba(${(props) => props.$color}, 0.3);
  &:hover {
    background: rgba(${(props) => props.$color}, 0.6);
  }
`;

export default ToDoDropdown;

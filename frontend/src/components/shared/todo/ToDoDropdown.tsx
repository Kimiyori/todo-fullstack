import { useReducer, MouseEvent, FC } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as Dropdown } from 'assets/Resume.svg';
import { toDoCategories } from 'data/main';
import { updateItem } from 'api/item';
import { itemList } from 'store/item';
import { useSetAtom } from 'jotai';

type ToDoDropdownProps = { taskId: number };

const ToDoDropdown: FC<ToDoDropdownProps> = ({ taskId }) => {
  const [isShow, toggleIsShow] = useReducer((isShow) => !isShow, false);
  const setItem = useSetAtom(itemList);
  const handleUpdateTask = async (event: MouseEvent<HTMLLIElement>) => {
    const updated = await updateItem(taskId, { category: (event.target as HTMLElement).textContent as string });
    setItem(async (section) => (await section).map((item) => (item.id === updated.id ? updated : item)));
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

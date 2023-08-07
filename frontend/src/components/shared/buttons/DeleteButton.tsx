import { FC, useContext, useReducer } from 'react';
import { TasksContext } from 'context/TasksContext';
import Button from 'components/core/Button/Button';
import Popup from 'components/core/Popup/Popup';
import styled from 'styled-components';

type DeleteButtonProps = {
  taskId: string;
};

const DeleteButton: FC<DeleteButtonProps> = ({ taskId }) => {
  const [isActive, toggleisActive] = useReducer((isActive) => !isActive, false);
  const { removeTask } = useContext(TasksContext);
  const handleRemove = () => {
    toggleisActive();
    removeTask(taskId);
  };
  return (
    <>
      {isActive && (
        <Popup toggleVisible={toggleisActive}>
          <h2>{'Are you sure you want to delete this task?'}</h2>
          <ButtonContainer>
            <StyledPopupButton text={'Nah...I\'m okay'} onClick={toggleisActive} />
            <StyledPopupButton text={'Delete'} onClick={handleRemove} />
          </ButtonContainer>
        </Popup>
      )}
      <Button text={'Delete'} onClick={toggleisActive} />
    </>
  );
};

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
`;
export const StyledPopupButton = styled(Button)`
  border: 1px solid ${(props) => props.theme.color.Outline};
`;

export default DeleteButton;

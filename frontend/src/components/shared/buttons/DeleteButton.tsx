import { FC, useReducer } from 'react';
import Button from 'components/core/Button/Button';
import Popup from 'components/core/Popup/Popup';
import styled from 'styled-components';

type DeleteButtonProps = {
  handleRemove: () => void;
};

const DeleteButton: FC<DeleteButtonProps> = ({ handleRemove }) => {
  const [isActive, toggleisActive] = useReducer((isActive) => !isActive, false);
  return (
    <>
      {isActive && (
        <Popup toggleVisible={toggleisActive}>
          <h2>{'Are you sure you want to delete this task?'}</h2>
          <ButtonContainer>
            <StyledPopupButton text={'Nah...Im okay'} onClick={toggleisActive} />
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

import { FC, MouseEventHandler } from 'react';
import { styled } from 'styled-components';

type ButtonProps = {
  text: string;
  onClick?: (event?: MouseEventHandler<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  className?: string;
};

const Button: FC<ButtonProps> = ({ text, onClick, className, isDisabled = false }) => {
  return (
    <ButtonElement className={className} disabled={isDisabled} onClick={() => onClick?.()}>
      {text}
    </ButtonElement>
  );
};

export default Button;

const ButtonElement = styled.button`
  padding: 0.5rem;
  background: ${(props) => props.theme.color.Primary};
  cursor: pointer;
  color: ${(props) => props.theme.color.OnPrimary};
  border: 1px solid ${(props) => props.theme.color.Outline};
  &:hover {
    background: ${(props) => props.theme.color.Secondary};
    color: ${(props) => props.theme.color.OnSecondary};
  }
  &:disabled {
    background: ${(props) => props.theme.color.Surface};
    opacity: 0.5;
    cursor: auto;
  }
`;

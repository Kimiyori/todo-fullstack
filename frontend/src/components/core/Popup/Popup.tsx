import { styled } from 'styled-components';
import { FC, PropsWithChildren } from 'react';
import useOutsideClick from 'hooks/useOutsideClick';

type PopupProps = {
  toggleVisible: () => void;
} & PropsWithChildren;

const Popup: FC<PopupProps> = ({ toggleVisible, children }) => {
  const targetOutsideClick = useOutsideClick(toggleVisible);
  return (
    <PopupContainer>
      <PopupBody ref={targetOutsideClick}>{children}</PopupBody>
    </PopupContainer>
  );
};

const PopupContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopupBody = styled.div.attrs(({ ref }) => ({
  ref: ref,
}))`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: auto;
  background: ${(props) => props.theme.color.Surface};
  padding: 2rem;
`;

export default Popup;

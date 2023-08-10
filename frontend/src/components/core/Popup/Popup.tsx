import { FC, PropsWithChildren } from 'react';
import useOutsideClick from 'hooks/useOutsideClick';
import { PopupBody, PopupContainer } from './Popup.styles';

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

export default Popup;

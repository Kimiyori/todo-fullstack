import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CustomLink: FC<{ to: string; onClick?: () => void } & PropsWithChildren> = ({ to, onClick, children }) => {
  return (
    <StyledLink to={to} onClick={onClick}>
      {children}
    </StyledLink>
  );
};
export default CustomLink;

const StyledLink = styled(Link)`
  cursor: pointer;
`;

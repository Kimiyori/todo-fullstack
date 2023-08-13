import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FallbackProps } from 'react-error-boundary';
import { FC } from 'react';
import Button from 'components/core/Button/Button';
const Fallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <StyledBox>
      <h3>Something went wrong</h3>
      <h4>{error.message}</h4>
      <Link onClick={resetErrorBoundary} to="/">
        <Button text="Back" />
      </Link>
    </StyledBox>
  );
};
export default Fallback;

const StyledBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

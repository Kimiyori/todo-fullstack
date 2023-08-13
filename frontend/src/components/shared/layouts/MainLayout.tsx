import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Fallback from 'components/shared/error/ErrorFallback';

const MainLayout = () => {
  return (
    <MainBackground>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Outlet />
      </ErrorBoundary>
    </MainBackground>
  );
};
export default MainLayout;

const MainBackground = styled.main`
  background: ${(props) => props.theme.color.Background};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 100vh;
  }
`;

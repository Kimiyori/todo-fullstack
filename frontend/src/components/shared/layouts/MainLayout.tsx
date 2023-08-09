import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const MainLayout = () => {
  return (
    <MainBackground>
      <Outlet />
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

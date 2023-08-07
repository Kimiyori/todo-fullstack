import styled from 'styled-components';
import { TasksProvider } from '../context/TasksContext';
import Board from 'components/core/Board/Board';
import InputAddTask from 'components/shared/fields/InputAddTask/InputAdd';
import ToDoContainer from 'components/shared/todo/ToDoContainer';
import InputFilter from 'components/shared/fields/InputFilter/InputFilter';

const ToDo = () => {
  return (
    <>
      <TasksProvider>
        <MainBackground>
          <Board title={'To Do List'} />
          <div>
            <InputAddTask />
            <InputFilter />
          </div>
          <ToDoContainer />
        </MainBackground>
      </TasksProvider>
    </>
  );
};

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

export default ToDo;

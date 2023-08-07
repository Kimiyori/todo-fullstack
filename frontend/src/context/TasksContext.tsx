import { Dispatch, PropsWithChildren, createContext } from 'react';
import useTaskList from 'hooks/useTaskList';
import { Data } from 'types/Main';

type TasksContainerProps = {
  todos: Data[];
  setTodos: Dispatch<React.SetStateAction<Data[]>>;
  createTask: (newTodo: Data) => void;
  updateTask: (id: string, updtedTask: Partial<Data>) => void;
  removeTask: (id: string) => void;
  filterString: string;
  todosFiltered: Data[];
  setFilterString: Dispatch<React.SetStateAction<string>>;
};
export const TasksContext = createContext<TasksContainerProps>({
  todos: [],
  setTodos: () => undefined,
  createTask: () => undefined,
  updateTask: () => undefined,
  removeTask: () => undefined,
  filterString: '',
  todosFiltered: [],
  setFilterString: () => undefined,
});
export const TasksProvider = ({ children }: PropsWithChildren) => {
  const { todos, setTodos, createTask, updateTask, removeTask, filterString, todosFiltered, setFilterString } =
    useTaskList();
  return (
    <TasksContext.Provider
      value={{
        todos,
        setTodos,
        createTask,
        updateTask,
        removeTask,
        filterString,
        todosFiltered,
        setFilterString,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

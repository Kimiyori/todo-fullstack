import { useMemo, useState } from 'react';
import { Data } from 'types/Main';

const useTaskList = () => {
  const [todos, setTodos] = useState<Data[]>([]);
  const [filterString, setFilterString] = useState('');
  const todosFiltered = useMemo(() => {
    return filterString
      ? todos.filter((todo) => todo.content.toLowerCase().includes(filterString.toLowerCase()))
      : todos;
  }, [filterString, todos]);

  const createTask = (newTodo: Data) => setTodos([...todos, newTodo]);

  const removeTask = (id: string) => setTodos(todos.filter((todo) => todo.id !== id));

  const updateTask = (id: string, updatedTask: Partial<Data>) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTask } : todo));
    setTodos(updatedTodos);
  };

  return {
    todos,
    setTodos,
    createTask,
    updateTask,
    removeTask,
    filterString,
    todosFiltered,
    setFilterString,
  };
};
export default useTaskList;


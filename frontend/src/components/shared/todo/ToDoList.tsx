import { FC } from 'react';
import { ToDoCategoriesType } from 'types/Main';
import ToDoItem from 'components/shared/todo/ToDoItem';
import { useAtomValue } from 'jotai';
import { filteredItemsList } from 'store/item';

type ToDoListProps = {
  status: ToDoCategoriesType;
};

const ToDoList: FC<ToDoListProps> = ({ status }) => {
  const data = useAtomValue(filteredItemsList);
  return <>{data?.map((item) => status.name === item.category && <ToDoItem data={item} key={item.id} />)}</>;
};

export default ToDoList;

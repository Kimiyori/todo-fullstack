import { styled } from 'styled-components';
import DragDrop from 'assets/DragDrop.svg';
import { FC, useContext } from 'react';
import { DragAndDropContext } from 'context/DragAndDropContext';

type ToDoDragTaskProps = {
  taskId: string;
};
const ToDoDragTask: FC<ToDoDragTaskProps> = ({ taskId }) => {
  const { handleDragging } = useContext(DragAndDropContext);
  const handleDragStart = (event: React.DragEvent<HTMLImageElement>) => {
    event.dataTransfer.setData('text', taskId);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);
  return (
    <StyledDragIcon src={DragDrop} alt={'DragDrop'} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
  );
};

const StyledDragIcon = styled.img`
  border-left: 1px solid ${(props) => props.theme.color.Outline};
  cursor: pointer;
`;

export default ToDoDragTask;

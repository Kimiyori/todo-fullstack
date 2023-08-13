import { useState } from 'react';

const useDragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const handleDragging = (dragging: boolean) => {
    setIsDragging(dragging);
  };
  return {
    isDragging,
    handleDragging,
  };
};
export default useDragAndDrop;


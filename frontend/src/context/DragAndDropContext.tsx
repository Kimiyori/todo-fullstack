import { PropsWithChildren, createContext } from 'react';

import useDragAndDrop from 'hooks/useDragAndDrop';

type DnDContextProps = {
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
};
export const DragAndDropContext = createContext<DnDContextProps>({
  isDragging: false,
  handleDragging: () => undefined,
});
export const DragAndDropProvider = ({ children }: PropsWithChildren) => {
  const { handleDragging, isDragging } = useDragAndDrop();
  return <DragAndDropContext.Provider value={{ handleDragging, isDragging }}>{children}</DragAndDropContext.Provider>;
};

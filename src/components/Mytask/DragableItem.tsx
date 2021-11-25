import React from "react";
import { useDrag } from "react-dnd";
function DragableItem() {
  const ItemTypes = {
    KNIGHT: "knight",
  };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
        color: "white",
      }}
    >
      Task 1
    </div>
  );
}

export default DragableItem;

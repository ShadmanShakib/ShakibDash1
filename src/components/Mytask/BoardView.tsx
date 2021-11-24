import React from "react";
import { useDrag } from "react-dnd";

function BoardView() {
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
      ♘
    </div>
  );
}

export default BoardView;

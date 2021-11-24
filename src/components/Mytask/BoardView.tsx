import React from "react";
import {} from "react-dnd";
import { BoardGrid, DraggableTask } from ".";
function BoardView() {
  return (
    <div>
      <DraggableTask />
      <BoardGrid />
    </div>
  );
}

export default BoardView;

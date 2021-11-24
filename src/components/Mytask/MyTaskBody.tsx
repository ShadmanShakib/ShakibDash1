import React from "react";
import { Box } from "@chakra-ui/react";
import { ListView, FilesView, BoardView } from "../Mytask";
import { useAppSelector } from "../../hooks/useApp";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function MyTaskBody() {
  const selectSelectedTaskId = useAppSelector(
    (state) => state.myTask.selectedTaskId
  );
  return (
    <Box>
      {selectSelectedTaskId === "list" ? (
        <ListView />
      ) : selectSelectedTaskId === "file" ? (
        <FilesView />
      ) : selectSelectedTaskId === "board" ? (
        <DndProvider backend={HTML5Backend}>
          <BoardView />
        </DndProvider>
      ) : null}
    </Box>
  );
}

export default MyTaskBody;

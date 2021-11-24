import React from "react";
import { Box } from "@chakra-ui/react";
import { ListView, FilesView } from "../Mytask";
import { useAppSelector } from "../../hooks/useApp";
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
      ) : null}
    </Box>
  );
}

export default MyTaskBody;

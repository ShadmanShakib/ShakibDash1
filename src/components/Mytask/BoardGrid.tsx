import React from "react";
import { Box } from "@chakra-ui/react";
import BoardColumn from "./BoardColumn";

function BoardGrid() {
  return (
    <Box display="grid" gridColumn={3}>
      <BoardColumn title="To Do" />
    </Box>
  );
}

export default BoardGrid;

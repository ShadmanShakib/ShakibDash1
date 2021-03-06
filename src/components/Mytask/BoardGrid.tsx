import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import BoardColumn from "./BoardColumn";

function BoardGrid() {
  return (
    <Box>
      <SimpleGrid
        columns={3}
        alignContent="center"
        justifyItems="center"
        spacing="4"
      >
        <BoardColumn title="To Do" />
        <BoardColumn title="Today" />
      </SimpleGrid>
    </Box>
  );
}

export default BoardGrid;

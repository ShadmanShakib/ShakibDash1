import React from "react";
import { Box } from "@chakra-ui/react";
import { ListView, BodyHeader } from "../Mytask";
function MyTaskBody() {
  return (
    <Box>
      <BodyHeader />

      <ListView />
    </Box>
  );
}

export default MyTaskBody;

import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ListView, BodyHeader } from "../Mytask";
import s from "./MyTask.module.css";
function MyTaskBody() {
  return (
    <Box>
      <BodyHeader />
      <Box
        position="relative"
        display="flex"
        flex="1 1 auto"
        flexDirection="column"
        min-height="1px"
        width="100%"
      >
        <Box className={s.SpreadsheetGridHeaderStructure}>
          <Box className={s.SpreadsheetGridHeaderStructureleft}>
            <Text color="brand.weak">Task Name</Text>
          </Box>
        </Box>
        <ListView />
      </Box>
    </Box>
  );
}

export default MyTaskBody;

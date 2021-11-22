import React from "react";

import { Box, Text } from "@chakra-ui/react";
import s from "./MyTask.module.css";

function ListView() {
  return (
    <Box
      position="relative"
      display="flex"
      flex="1 1 auto"
      flexDirection="column"
      min-height="1px"
      width="100%"
      px="24px"
    >
      <Box className={s.SpreadsheetGridHeaderStructure}>
        <Box className={s.SpreadsheetGridHeaderStructureleft}>
          <Text color="brand.weak">Task Name</Text>
        </Box>
      </Box>

      <Box>
        <Box>
          <svg
            height="16px"
            width="16px"
            fill="#a2a0a2"
            focusable="false"
            viewBox="0 0 32 32"
          >
            <path d="M13.707,6.707L23,16l-9.293,9.293C13.077,25.923,12,25.477,12,24.586V7.414C12,6.523,13.077,6.077,13.707,6.707z"></path>
          </svg>
        </Box>
      </Box>
    </Box>
  );
}

export default ListView;

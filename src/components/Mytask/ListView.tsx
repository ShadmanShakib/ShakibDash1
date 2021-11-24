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
        <Box h="full" display="flex">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexBasis={0}
            flexShrink={0}
            flexGrow={1}
            borderRight="1px solid #a2a0a2"
          >
            <Box
              display="flex"
              flexGrow={1}
              w="600px"
              alignItems="strech"
              color="brand.weak"
            >
              Task name
            </Box>
            <Box></Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            w="40"
            pl="2"
            borderRight="1px solid #a2a0a2"
            color="brand.weak"
          >
            Due date
          </Box>
          <Box
            display="flex"
            alignItems="center"
            flexGrow={1}
            pl="2"
            color="brand.weak"
          >
            Project
          </Box>
        </Box>
      </Box>

      <Box>
        <Box display="flex" alignItems="center">
          <svg
            className={s.svg}
            height="16px"
            width="16px"
            fill="#a2a0a2"
            focusable="false"
            viewBox="0 0 32 32"
          >
            <path d="M13.707,6.707L23,16l-9.293,9.293C13.077,25.923,12,25.477,12,24.586V7.414C12,6.523,13.077,6.077,13.707,6.707z"></path>
          </svg>
          <Text color="white" fontWeight="semibold">
            Recently assigned
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default ListView;

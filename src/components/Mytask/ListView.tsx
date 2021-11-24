import React from "react";
import { TaskGroupHeader } from ".";
import { Box } from "@chakra-ui/react";
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
        <TaskGroupHeader title="Task Group 1" />
      </Box>
    </Box>
  );
}

export default ListView;

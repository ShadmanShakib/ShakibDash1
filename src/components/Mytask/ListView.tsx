import React from "react";
import { TaskGroupHeader } from ".";
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
        <TaskGroupHeader title="Recently Added" />
        <TaskGroupHeader title="Today" />
        <TaskGroupHeader title="Tomorrow" />
        <TaskGroupHeader title="This Week" />
        <TaskGroupHeader title="Next Week" />
      </Box>
      <Box display="flex" alignItems="center" role="button" tabIndex={0}>
        <svg
          height="16px"
          fill="#a2a0a2"
          width="16px"
          focusable="false"
          viewBox="0 0 32 32"
        >
          <path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z"></path>
        </svg>
        <Text fontWeight="semibold" ml="3" color="#a2a0a2">
          Add section
        </Text>
      </Box>
    </Box>
  );
}

export default ListView;

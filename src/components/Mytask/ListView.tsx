import React from "react";
import { TaskGroupHeader } from ".";
import { Box, Text } from "@chakra-ui/react";
import s from "./MyTask.module.css";

function ListView() {
  return (
    <>
      <Box
        px="24px"
        borderTop="1px solid"
        display="flex"
        alignItems="center"
        h="56px"
        zIndex={600}
        bg="brand.bgWeak"
        borderColor="brand.weak"
      >
        <Box
          display="flex"
          borderTopRadius="6px"
          borderBottomRadius="6px"
          px="8px"
          bg="brand.btnBgPrimary"
          h="28px"
          alignItems="center"
        >
          <svg fill="white" height="12" width="12" viewBox="0 0 24 24">
            <path d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z"></path>
          </svg>
          <Text ml="2" color="white">
            Add Task
          </Text>
          <Box h="28px" w="1px" mx="2" bg="brand.darkBg" />
          <svg
            fill="white"
            height="12"
            width="12"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path>
          </svg>
        </Box>
      </Box>
      <Box
        position="relative"
        display="flex"
        flex="1 1 auto"
        flexDirection="column"
        min-height="1px"
        width="100%"
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
    </>
  );
}

export default ListView;

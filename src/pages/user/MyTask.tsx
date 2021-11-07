import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "../../components/common/Sidebar";
import { MyTaskTopbar } from "../../components/Mytask";
function MyTask() {
  return (
    <Box
      position="absolute"
      right="0"
      left="0"
      top="0"
      bottom="0"
      display="flex"
      minH="100vh"
      overflow="hidden"
      bg="#1e1f21"
    >
      <Sidebar />
      <Box
        display="flex"
        overflowY="auto"
        flex={1}
        flexDirection="column"
        minWidth="920px"
      >
        <MyTaskTopbar />
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

export default MyTask;

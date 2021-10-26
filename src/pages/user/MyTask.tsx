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
    >
      <Sidebar />
      <Box display="flex" flex={1} flexDirection="column" minWidth="920px">
        <MyTaskTopbar />
      </Box>
    </Box>
  );
}

export default MyTask;

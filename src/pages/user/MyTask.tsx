import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "../../components/common/Sidebar";
function MyTask() {
  return (
    <Box display="flex" flexGrow={1} flexShrink={1} flexBasis={0} minH="1px">
      <Sidebar />
      <Box display="flex" flexGrow={1} flexShrink={1} flexBasis="0%"></Box>
    </Box>
  );
}

export default MyTask;

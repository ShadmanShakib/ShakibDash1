import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "../../components/common";
function Goals() {
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
    </Box>
  );
}

export default Goals;

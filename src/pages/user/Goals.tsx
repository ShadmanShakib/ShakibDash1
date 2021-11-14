import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar, Header } from "../../components/common";

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
      <Box w="full">
        <Header title="Goals" />
      </Box>
    </Box>
  );
}

export default Goals;

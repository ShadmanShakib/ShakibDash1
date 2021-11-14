import React from "react";
import { Sidebar } from "../../components/common";
import { Box } from "@chakra-ui/react";
import { Currency } from "../../components/Charts";
import { Header } from "../../components/Reporting";
function Portfolio() {
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
      <Box w="full" overflowY="auto">
        <Header title="Charts" />
        <Currency />
      </Box>
    </Box>
  );
}

export default Portfolio;

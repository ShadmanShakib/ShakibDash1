import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "../../components/common";
import { CurrencyDetails, Header } from "../../components/Reporting";

function Reporting() {
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
      <Box bg="#1e1f21" w="full">
        <Header />
        <Box mt="8" ml="8">
          <CurrencyDetails />
        </Box>
      </Box>
    </Box>
  );
}

export default Reporting;
